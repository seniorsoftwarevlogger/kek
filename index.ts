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

const input = `1.3 + 2.2`;
const watCode = compile(input);

compileAndRunWasm(watCode)
  .then((result) => console.log(`Result: ${result}`))
  .catch((error) => console.error(`Error: ${error}`));
