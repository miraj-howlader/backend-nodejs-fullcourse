import EventEmitter  from "node:events"



const appEvent = new EventEmitter()



type UserRegisterPayload = {
    id:number,
    email:string
}

appEvent.on('user:registered',(user:UserRegisterPayload)=>{
    console.log(`email listener: welcome email to send email ${user.email}`)
})

appEvent.on('user:registered',(user:UserRegisterPayload)=>{
    console.log(`log listener: user ${user.id} and email is ${user.email}`)
})



function registerUser(): void{
    const user = {
        id:1,
        email: 'miraj@gmail.com'
    }
    console.log('user saved')

    appEvent.emit('user:registered',user)

    console.log('register user: event listener completed')
}

registerUser()