import { CharStream, CommonTokenStream, ParseTreeWalker } from "antlr4";
import LolLexer from "./gen/LolLexer.ts";
import LolParser, { ProgContext, ExprContext } from "./gen/LolParser.ts";
import LolListener from "./gen/LolListener.ts";
import wabt from "wabt";

const input = ``;
const chars = new CharStream(input);
const lexer = new LolLexer(chars);
const tokens = new CommonTokenStream(lexer);
const parser = new LolParser(tokens);
const tree = parser.prog();

class LolTreeWalker extends LolListener {
  private output: string = "";

  enterProg = (ctx: ProgContext) => {
    this.output = `(module
  `;
  };

  exitProg = (ctx: ProgContext) => {
    this.output += `(func $program (export "program")`;
    this.output += `
  )
)`;
  };

  exitExpr = (ctx: ExprContext) => {};

  getResult(): string {
    return this.output;
  }
}

const walker = new LolTreeWalker();
ParseTreeWalker.DEFAULT.walk(walker, tree);

const watCode = walker.getResult();
console.log(watCode);

async function compileAndRunWasm(watCode: string): Promise<number> {
  const wabtModule = await wabt();
  const wasmModule = wabtModule.parseWat("inline", watCode);
  const { buffer } = wasmModule.toBinary({});

  const module = await WebAssembly.instantiate(buffer);
  const result = (module.instance.exports.program as Function)();
  return result;
}

compileAndRunWasm(watCode)
  .then((result) => console.log(`Result: ${result}`))
  .catch((error) => console.error(`Error: ${error}`));
