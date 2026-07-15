import {setTimeout as sleep} from  'node:timers/promises'

function runSetTimeOutExample():void{
    console.log('setTimeout example started')

    setTimeout(()=>{
        console.log('this runs after 1 seconds')
    },1000)

    console.log('this run immediately node does')
}

function runClearTimeOutExample():void{
    const timerId = setTimeout(()=>{
        console.log("This message will not run")
    },2000)
    clearTimeout(timerId)
    console.log("cleartimeout cancelled the 2 seconds timer")
}

async function runPromiseTimeExample():Promise<void> {
    console.log('waiting for promise based timer')


    await sleep(5500)
    console.log('promised based timer finisher after 5 seconds')
    
}

function runTimerDemo(): void{
    runSetTimeOutExample()
    runClearTimeOutExample()
    
}

runPromiseTimeExample().catch((error:unknown)=>{
    console.log('timer based demo failed', error)
})

runTimerDemo()