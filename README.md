# Kek Lang

Kek is a demo language built on top of WebAssembly. It supports variables, if, while and functions. The only type available for now is f32

This is a valid kek program:

```kek
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

// factorial of 6 is 720
var result = factorial(6) + retrunTwo()

test(result, 722)
```