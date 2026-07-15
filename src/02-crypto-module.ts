import crypto from "node:crypto"

const request = crypto.randomUUID()
console.log(request)



const resetToken  = crypto.randomBytes(16).toString('hex')
console.log(resetToken)

// crypto.createHash
const text = 'hellob node'
const hash = crypto.createHash('sha256').update(text).digest('hex')
console.log("hash",hash)


// crypto.createHmac

const seceretKey = 'my-super-secret-key'
const message = 'user_id=1'

const signature = crypto.createHmac('sha256',seceretKey).update(message).digest('hex')
console.log("secret",signature)
