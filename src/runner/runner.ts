export function fizzBuzz(i: number): string | number {

  const isFizz = new NamedFunc("fizz", (i: number) => i % 3 == 0)
  const isBuzz = new NamedFunc("buzz", (i: number) => i % 5 == 0)
  const isFizzBuzz = new NamedFunc("fizzbuzz", (i: number): boolean => isFizz.execute(i) && isBuzz.execute(i))
  const isSelf = new NamedFunc(i, () => true)

  return new Runner([
      isFizzBuzz,
      isFizz,
      isBuzz,
      isSelf
    ]
  ).execute(i)

}

class NamedFunc {
  constructor(
    public value: string | number,
    public execute: (i: number) => boolean) {      
    }
}

class Runner {
  constructor(private readonly funcs: NamedFunc[]) { }

  execute(i: number): string | number  {

    for (let a = 0; a < this.funcs.length; a++) {
      const func = this.funcs[a]
      if (func.execute(i)) {
        return func.value
      }
    }
    console.log("unreachable")
    return "unreachable"
  }
}

module.exports = fizzBuzz
