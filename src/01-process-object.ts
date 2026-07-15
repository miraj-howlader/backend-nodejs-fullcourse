import process from 'node:process'

const nodeEnv   = process.env.NODE_ENV ?? "development"
const port = Number(process.env.port ?? 3000)


const command = process.argv[2] ?? 'start'


const shouldFail = process.argv.includes('--fail')
const shouldCrash = process.argv.includes('--crash')


process.on('exit', (code)=>{
    console.log(`Process finised with exit code ${code}`)
})


function runApp(): void{
    console.log({
        command
    })
    if(shouldFail){
        console.error('Manual failure trigered with -fail falge')
        process.exit(1)
    }
    if(shouldCrash){
        console.error('Manual crash trigered with -crash falge')
        process.exit(1)
    }
}
runApp()