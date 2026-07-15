import * as os from 'node:os'


function runOsDemo(): void{
console.log('platform', os.platform())
console.log('architecture', os.arch())
console.log('os type', os.type())
console.log('os release', os.release())
console.log('os homedir', os.homedir())
console.log('os tmpdir', os.tmpdir())


const cpus = os.cpus()

console.log(cpus.length)

if(cpus.length > 0){
    console.log('First CPU model', cpus[0].model, cpus[0].speed, cpus[0].times)
}

console.log(os.totalmem(), os.freemem())
}

runOsDemo()