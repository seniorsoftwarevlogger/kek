import compile from "./src/LolWAT.ts";
import wabt from "wabt";

async function compileAndRunWasm(watCode: string): Promise<number> {
  const wabtModule = await wabt();
  const wasmModule = wabtModule.parseWat("inline", watCode);
  const { buffer } = wasmModule.toBinary({});

  const module = await WebAssembly.instantiate(buffer);
  const result = (module.instance.exports.program as Function)();
  return result;
}

const input = `
var num = 1
var n = 6

while( n >= 1 ) {
  num = num * n
  n = n - 1
}

num
`;

const watCode = compile(input);

console.log(watCode);

compileAndRunWasm(watCode)
  .then((result) => console.log(`Result: ${result}`))
  .catch((error) => console.error(`Error: ${error}`));
