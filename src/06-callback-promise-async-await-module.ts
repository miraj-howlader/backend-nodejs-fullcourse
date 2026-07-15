type User = {
    id:Number,
    name:string,
    role:"user" | 'super-admin'
}


const users : User[]=[
    {
    id: 1,
    name:"miraj",
    role:'super-admin'
},
{
    id: 2,
    name:"jack",
    role:'user'
},
{
    id:3,
    name:'mike',
    role:'user'
}
]


function findUserWithCallback(userId:number,callback:(error:Error | null, user?:User)=>void): void{
  setTimeout(()=>{
    const user = users.find(currentUser=>currentUser.id===userId)
    if(!user){
        callback(new Error(`user with id ${userId} was not found`))
        return
    }
    callback(null,user)
  },500)
}

// findUserWithCallback(30,(error,user)=>{
//     if(error){
//         console.log('callback error', error.message)
//         return
//     }
//     console.log('callback result', user?.id,user?.name,user?.role)
// })


function fetchUserWithPromise(userId:number): Promise<User> {
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const user = users.find((currentUser)=>currentUser.id===userId)
        if(!user){
            reject(new Error(`user with ${userId} data was not found`))
            return
        }
        resolve(user)
    },1000)
})
}
// fetchUserWithPromise(10).then((user)=>{
//     console.log("promise result", user.id,user.name, user.role)
// }).catch((error:Error)=>{
//     console.log("promise error",error)
// })


async function findUserWithAsyncAwait(userId: number): Promise<void> {
    try {
        const user = await fetchUserWithPromise(userId)
        console.log('async/await',user.name)
    } catch (error) {
        const message = error instanceof Error ? error.message : "unknown"
        console.log('async/await',message)
        
    }
}
findUserWithAsyncAwait(3)