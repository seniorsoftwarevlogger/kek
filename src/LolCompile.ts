import { CharStream, CommonTokenStream, ParseTreeWalker } from "antlr4";
import LolLexer from "./gen/LolLexer.ts";
import LolParser, { ProgContext, ExprContext } from "./gen/LolParser.ts";
import LolListener from "./gen/LolListener.ts";

class LolTreeWalker extends LolListener {
  private output: string = "";

  enterProg = (_ctx: ProgContext) => {
    this.output = `(module (func $program (export "program") (result f32)\n`;
  };

  exitExpr = (ctx: ExprContext) => {
    if (ctx.FLOAT()) {
      this.output += `f32.const ${ctx.FLOAT().getText()}\n`;
    } else if (ctx.expr(1)) {
      // if operator exists
      const op = ctx.getChild(1).getText(); // get operator
      switch (op) {
        case "+":
          this.output += `f32.add\n`;
          break;
        case "-":
          this.output += `f32.sub\n`;
          break;
        case "*":
          this.output += `f32.mul\n`;
          break;
        case "/":
          this.output += `f32.div\n`;
          break;
      }
    }
  };

  exitProg = (_ctx: ProgContext) => {
    this.output += `  )
)`;
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
