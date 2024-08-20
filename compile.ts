import wabt from "wabt";
import compile from "./src/KekWAT.ts";

async function compileAndRunWasm(watCode: string): Promise<number> {
  const wabtModule = await wabt();
  const wasmModule = wabtModule.parseWat("inline", watCode);
  const { buffer } = wasmModule.toBinary({});

  const module = await WebAssembly.instantiate(buffer);
  const result = (module.instance.exports.main as Function)();
  return result;
}

const watCode = compile(Deno.readTextFileSync(Deno.args[0]));

compileAndRunWasm(watCode)
  .then((result) => console.log(result.toString()))
  .catch((error) => console.error(`Error: ${error}`));
