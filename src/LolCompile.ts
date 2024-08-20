import { CharStream, CommonTokenStream, ParseTreeWalker } from "antlr4";
import LolLexer from "./gen/LolLexer.ts";
import LolParser, {
  ProgContext,
  ExprContext,
  VarDeclarationContext,
  VarAssignmentContext,
} from "./gen/LolParser.ts";
import LolListener from "./gen/LolListener.ts";

class LolTreeWalker extends LolListener {
  private output: string = "";
  private locals: string[] = [];
  private instructions: string[] = [];
  private exprStack: string[] = [];

  enterProg = (_ctx: ProgContext) => {
    this.output = `(module (func $program (export "program") (result f32)\n`;
  };

  exitVarDeclaration = (ctx: VarDeclarationContext) => {
    if (ctx.ID()) {
      this.locals.push(`(local $${ctx.ID().getText()} f32)`);
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
        default:
          throw new Error(`Unknown operator: ${op}`);
      }
      this.exprStack.push(`(${instruction} ${left} ${right})`);
    }
  };

  exitProg = (_ctx: ProgContext) => {
    this.output += this.locals.join("\n") + "\n";
    this.output += this.instructions.join("\n") + "\n";
    if (this.exprStack.length > 0) {
      this.output += this.exprStack.pop() + "\n";
    }
    this.output += "  )\n)";
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
