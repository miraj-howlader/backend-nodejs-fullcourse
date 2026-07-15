import path from "node:path";


const prjectRoot = process.cwd()
console.log(prjectRoot)


const userId = '42'
const originalName = 'profile.photo.png'

const uploadFilePath = path.join(
    prjectRoot,
    'uploads',
    'users',
    userId,
    originalName
)

console.log(uploadFilePath)


const fileName = path.basename(uploadFilePath)
const fileExt = path.extname(uploadFilePath)
const parentFolder = path.dirname(uploadFilePath)
console.log(fileName,fileExt,parentFolder)