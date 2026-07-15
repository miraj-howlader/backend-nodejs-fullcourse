
import { error } from 'node:console'
import { Readable, Transform, Writable } from 'node:stream'
import { pipeline } from 'node:stream/promises'




const redableStream  = Readable.from([
    "hello",
    "from",
    "node.js",
    "streams"
])


const uppercaseTranisform = new Transform({
    transform(chunk,encoding,callback){
        const text = chunk.toString()


        callback(null,text.toUpperCase())
    }
})


const writeStream = new Writable({
    write(chunk,encoding,callback){
        console.log('received chunk', chunk.toString())
        callback()
    }
})


async function main(): Promise<void> {
    try {
        await pipeline(redableStream,uppercaseTranisform,writeStream)
        console.log('stream completed')
    } catch (error) {
        const msg = error instanceof Error ? error.message : "unknown error"
        console.error("stream failed ", msg)
    }
}

main()