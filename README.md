# Fizz buzz kata

## simple
basic implementation

## runner implementation
create a runner of "named function"
a "named function" is a basic structure with two properties:
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

