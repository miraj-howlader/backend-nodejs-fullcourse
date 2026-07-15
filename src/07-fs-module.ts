
import path from 'node:path'
import fs from 'node:fs'
import fsPromises from 'node:fs/promises'

const DEMO_FOLDER_PATH  = path.join(process.cwd(), 'file-system', 'fs-demo')
const SYNC_FILE_PATH = path.join(DEMO_FOLDER_PATH,'sync-note.txt')
const CALLBACK_FOLDER_PATH  = path.join(process.cwd(), 'callback-system', 'fs-demo')
const PROMISE_FILE_PATH = path.join(DEMO_FOLDER_PATH,'promise-note.txt')

type FileResult = {
    style:string,
    fileName:string,
    content:string,
    sizeInBytes:number
}

function ensureDemoFolderExists(): void {
    if(!fs.existsSync(DEMO_FOLDER_PATH)){
        fs.mkdirSync(DEMO_FOLDER_PATH, {recursive: true})
    }
}
function runSyncExample(): FileResult {
    fs.writeFileSync(SYNC_FILE_PATH,'created using sync fs', 'utf-8')

    fs.appendFileSync(SYNC_FILE_PATH,'appended using sync fs', 'utf-8')

    const content = fs.readFileSync(SYNC_FILE_PATH, 'utf-8')

    const stats = fs.statSync(SYNC_FILE_PATH)


    return {
        style: 'sync',
        content,
        fileName: path.basename(SYNC_FILE_PATH),
        sizeInBytes: stats.size
    }
}

async function runPromiseExample(): Promise<FileResult> {
    await fsPromises.writeFile(
        PROMISE_FILE_PATH,
        "Created using promise apis",
        "utf-8"
    )
    await fsPromises.appendFile(
        PROMISE_FILE_PATH,
        "Append using promise apis",
        "utf-8"
    )

    const content = await fsPromises.readFile(PROMISE_FILE_PATH,"utf-8")
    const stats = await fsPromises.stat(PROMISE_FILE_PATH)

    return {
        style: 'promises',
        content,
        fileName: path.basename(PROMISE_FILE_PATH),
        sizeInBytes: stats.size
    }
}

function runCallBackExample(): Promise<FileResult> {
   return new Promise((resolve,reject)=>{
     fs.writeFile(CALLBACK_FOLDER_PATH,'created using callback fs','utf-8',(writeError)=>{
       if(writeError){
        reject(writeError)
        return
       }
       fs.appendFile(CALLBACK_FOLDER_PATH,'Append usiing callback fs','utf-8',(appendError)=>{
        if(appendError){
            reject(appendError)
            return
        }
        fs.readFile(CALLBACK_FOLDER_PATH,'utf-8',(readError,content)=>{
            if(readError){
                reject(readError)
                return
            }

            fs.stat(CALLBACK_FOLDER_PATH,(statError,stats)=>{
                if(statError){
                    reject(statError)
                    return
                }
                resolve({
                    style:"callback",
                    content,
                    sizeInBytes: stats.size,
                    fileName: path.basename(CALLBACK_FOLDER_PATH)
                })
            })
        })
       })
    })
   })
}


async function main(): Promise<void> {
    try {
        ensureDemoFolderExists()
        const syncResult = runSyncExample()
        const callbackResult = await runCallBackExample()
        const promiseResult = await runPromiseExample()
        console.log([syncResult,callbackResult,promiseResult])
        
    } catch (error) {
        const message = error instanceof Error ? error.message : "unknown person"
        console.log('file system error', message)
    }
    
}

main()