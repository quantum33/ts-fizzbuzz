# Fizz buzz kata

## "simple"
"simple" is a basic implementation

## "runner" implementation
Create a runner of "named function"

A "named function" is a basic structure with two properties:
- a value ("fizz", "buzz", "fizzbuzz" or self number value)
- a predicate to determine if value should be returned or not
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "value": {
      "oneOf": [
        { "type": "string" },
        { "type": "number" }
      ]
    },
    "execute": {
      "type": "function",
      "parameter": {
        "type": "number"
      },
      "returns": {
        "type": "boolean"
      }
    }
  },
  "required": ["value", "execute"]
}
```

## build
```bash
npx tsc
```
```dist``` directory will contain the output js files

## run test
```bash
npm test
```

Take a look at the top of the ```main.spec.ts``` file to select the implementation to test:
```ts
// const fizzBuzz = require("../dist/simple");
const fizzBuzz = require('../dist/runner')
```
## credits
```main.spec.ts``` taken (and adapted) from https://github.com/Soniakeat/TDD_FizzBuzz-kata/blob/master/src/tests/fizzBuzz.test.js