const alphabet = ['A', 'B', 'C', 'D', 'E', 'F']

// const a = alphabet[0]
// console.log(a)

// const b = alphabet[1]
// console.log(a, b)

const [a, b, c, ...rest] = alphabet
console.log(`${a} ${b} ${c} this is what's left: ${rest}`)