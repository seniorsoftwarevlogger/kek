import { CharStream, CommonTokenStream, ParseTreeWalker } from "antlr4";
import LolLexer from "./gen/LolLexer.ts";
import LolParser, {
  ProgContext,
  ExprContext,
  VarDeclarationContext,
  VarAssignmentContext,
  IfStatementContext,
  WhileStatementContext,
  FunctionDeclarationContext,
  FunctionCallContext,
  ReturnExprContext,
} from "./gen/LolParser.ts";
import LolListener from "./gen/LolListener.ts";

class LolTreeWalker extends LolListener {
  private output: string = "";
  private locals: { [key: string]: string[] } = { "~global": [] };
  private currentFunction: string = "~global";
  private instructions: string[] = [];
  private functions: string[] = [];
  private exprStack: string[] = [];
  private blockStack: string[][] = [];

  enterProg = () => {
    this.instructions = [];
  };

  exitVarDeclaration = (ctx: VarDeclarationContext) => {
    if (ctx.ID()) {
      this.locals[this.currentFunction].push(
        `(local $${ctx.ID().getText()} f32)`
      );
    }
    if (ctx.expr()) {
      const expr = this.exprStack.pop();
      this.instructions.push(`(local.set $${ctx.ID().getText()} ${expr})`);
    }
  };

  exitVarAssignment = (ctx: VarAssignmentContext) => {
    const expr = this.exprStack.pop();
    this.instructions.push(`(local.set $${ctx.ID().getText()} ${expr})`);
  };

  enterIfStatement = (_ctx: IfStatementContext) => {
    this.blockStack.push(this.instructions);
    this.instructions = [];
  };

  exitIfStatement = (_ctx: IfStatementContext) => {
    const condition = this.exprStack.pop();
    const thenBlock = this.instructions.join("\n");
    this.instructions = this.blockStack.pop()!;
    this.instructions.push(`(if ${condition} (then ${thenBlock}))`);
  };

  enterWhileStatement = (_ctx: WhileStatementContext) => {
    this.blockStack.push(this.instructions);
    this.instructions = [];
  };

  exitWhileStatement = (_ctx: WhileStatementContext) => {
    const condition = this.exprStack.pop();
    const bodyBlock = this.instructions.join("\n");
    this.instructions = this.blockStack.pop()!;
    this.instructions.push(`(loop\n${bodyBlock}\n(br_if 0 ${condition}))`);
  };

  enterFunctionDeclaration = (ctx: FunctionDeclarationContext) => {
    this.blockStack.push(this.instructions);
    this.instructions = [];
    this.currentFunction = ctx.ID(0).getText();
    this.locals[this.currentFunction] = [];
  };

  exitFunctionDeclaration = (ctx: FunctionDeclarationContext) => {
    const functionName = ctx.ID(0).getText();
    const locals = this.locals[this.currentFunction].join("\n");
    const params = ctx
      .ID_list()
      .slice(1)
      .map((id) => `(param $${id.getText()} f32)`)
      .join(" ");

    const bodyBlock = this.instructions.join("\n");

    this.functions.push(
      `(func $${functionName} ${params} (result f32)\n${locals}\n${bodyBlock})`
    );

    this.instructions = this.blockStack.pop()!;
    this.currentFunction = "~global";
  };

  exitFunctionCall = (ctx: FunctionCallContext) => {
    const functionName = ctx.ID().getText();
    const args = ctx
      .arg_list()
      .map((arg) =>
        arg.FLOAT()
          ? `(f32.const ${arg.FLOAT().getText()})`
          : `(local.get $${arg.ID().getText()})`
      );
    this.exprStack.push(`(call $${functionName} ${args.join(" ")})`);
  };

  exitReturnExpr = (_ctx: ReturnExprContext) => {
    const expr = this.exprStack.pop();
    this.instructions.push(`${expr}`);
  };

  exitExpr = (ctx: ExprContext) => {
    if (ctx.FLOAT()) {
      this.exprStack.push(`(f32.const ${ctx.FLOAT().getText()})`);
    } else if (ctx.ID()) {
      this.exprStack.push(`(local.get $${ctx.ID().getText()})`);
    } else if (ctx.expr(1)) {
      const right = this.exprStack.pop();
      const left = this.exprStack.pop();
      const op = ctx.getChild(1).getText();
      let instruction: string;
      switch (op) {
        case "+":
          instruction = "f32.add";
          break;
        case "-":
          instruction = "f32.sub";
          break;
        case "*":
          instruction = "f32.mul";
          break;
        case "/":
          instruction = "f32.div";
          break;
        case "<":
          instruction = "f32.lt";
          break;
        case ">":
          instruction = "f32.gt";
          break;
        case "<=":
          instruction = "f32.le";
          break;
        case ">=":
          instruction = "f32.ge";
          break;
        case "==":
          instruction = "f32.eq";
          break;
        case "!=":
          instruction = "f32.ne";
          break;
        default:
          throw new Error(`Unknown operator: ${op}`);
      }
      this.exprStack.push(`(${instruction} ${left} ${right})`);
    }
  };

  exitProg = (_ctx: ProgContext) => {
    this.output = [
      `(module`,
      this.functions.join("\n"),
      `\n(func $main (export "main") (result f32)`,
      this.locals["~global"].join("\n"),
      this.instructions.join("\n"),
      this.exprStack.join("\n"),
      "))",
    ]
      .filter((s) => s !== "")
      .join("\n");
  };

  getResult(): string {
    return this.output;
  }
}

export default function compile(input: string): string {
  const chars = new CharStream(input);
  const lexer = new LolLexer(chars);
  const tokens = new CommonTokenStream(lexer);
  const parser = new LolParser(tokens);
  const tree = parser.prog();

  const walker = new LolTreeWalker();
  ParseTreeWalker.DEFAULT.walk(walker, tree);

  return walker.getResult();
}
