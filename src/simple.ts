export function fizzBuzz(i: number): string | number {

  const isFizz = (i: number) => i % 3 == 0
  const isBuzz = (i: number) => i % 5 == 0
  const isFizzBuzz = (i: number) => isFizz(i) && isBuzz(i)
  
  if (isFizzBuzz(i)) {
    return "fizzbuzz"
  } else if (isFizz(i)) {
    return "fizz"
  } else if (isBuzz(i)) {
    return "buzz"
  } else {
    return i
  }
}
module.exports = fizzBuzz