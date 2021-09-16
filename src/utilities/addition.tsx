/*interface Person {
  name: string
  shirtColor: string
}

const drBart: Person = {name: "Dr. Bart", shirtColor: "purple"}
const ada: Person = {name: "Ada Bart", shirtColor: "yellow"}

const {name} = ada

console.log(name)

const numbers = [1, 2, 3]
const [num1, num2, thirdNumber] = numbers
console.log(thirdNumber)
*/


export function adder(first: number, second: number): number {
  return first + second;
}

adder(3, 5)

export function adderObject(data: {first: number, second: number}): number {
  return data.first + data.second;
}

adderObject({first: 7, second: 9})

export function adder3({first, second}: {first: number, second: number}): number {
  return first + second;
}

adder3({first: 7, second: 9})

export function sumList(numbers: number[]): number {
  return numbers[0] + numbers[1] + numbers[2];
}