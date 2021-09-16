
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


export function Welcome({name}: {name: string}): JSX.Element {
  return <div>Hello to the {name}!</div>
}

