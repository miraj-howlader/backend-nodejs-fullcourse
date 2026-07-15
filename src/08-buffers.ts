const textBuffer = Buffer.from("Node")
console.log(textBuffer.toString('utf-8'))

const engBuffer = Buffer.from("Hello")
console.log(engBuffer.length)


const fixedBuffer = Buffer.alloc(5)

console.log('empty fixed buffer', fixedBuffer)


fixedBuffer.write('API')

console.log('fixed buffer after write', fixedBuffer)
console.log('fixed buffer as text', fixedBuffer.toString('utf-8'))

const chunks = [
    Buffer.from("Hello "),
    Buffer.from("Node "),
    Buffer.from("JS "),
]


const combineBuffer = Buffer.concat(chunks)


console.log(combineBuffer, combineBuffer.toString('utf-8'))