import wabt from "wabt";
import { formatWat } from "./src/lib/watFormat.ts";
import compile from "./src/LolWAT.ts";

async function compileAndRunWasm(watCode: string): Promise<number> {
  const wabtModule = await wabt();
  const wasmModule = wabtModule.parseWat("inline", watCode);
  const { buffer } = wasmModule.toBinary({});

  const module = await WebAssembly.instantiate(buffer);
  const result = (module.instance.exports.main as Function)();
  return result;
}

const input = `
// calculates factorial
function factorial(n) {
  var num = 1
  var i = 1

  while( i <= n ) {
    num = num * i
    i = i + 1
  }

  return num
}

// returns 2
function retrunTwo() {
  return 2
}

// tests if the result is equal to the expected value
function test(res, expected) {
  var output = 0

  if (res == expected) {
    output = 1
  }

  return output
}

var result = factorial(6) + retrunTwo()

test(result, 722)
`;

const watCode = compile(input);

console.log(formatWat(watCode));

compileAndRunWasm(watCode)
  .then((result) => console.log(`Result: ${result}`))
  .catch((error) => console.error(`Error: ${error}`));
