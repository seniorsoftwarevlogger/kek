import compile from "./src/LolCompile.ts";
import wabt from "wabt";

async function compileAndRunWasm(watCode: string): Promise<number> {
  const wabtModule = await wabt();
  const wasmModule = wabtModule.parseWat("inline", watCode);
  const { buffer } = wasmModule.toBinary({});

  const module = await WebAssembly.instantiate(buffer);
  const result = (module.instance.exports.program as Function)();
  return result;
}

const input = `2 * (3 + 4) - 5 / (1 + 1) + 10.5`;
const watCode = compile(input);

compileAndRunWasm(watCode)
  .then((result) => console.log(`Result: ${result}`))
  .catch((error) => console.error(`Error: ${error}`));
