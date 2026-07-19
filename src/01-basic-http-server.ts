const API_URL="https://jsonplaceholder.typicode.com/users/1"


type PlaceholderUser = {
    id:number,
    name:string,
    email:string,
    company:{
        name:string
    }
}


type PublicUser = {
    id:number,
    name:string,
    email:string,
    company:string
}


function transformUser(rawData:PlaceholderUser): PublicUser{
  return {
    id:rawData.id,
    name:rawData.name,
    email:rawData.email,
    company:rawData.company.name
  }
}


async function  fetchExternalUser(): Promise<void> {
    const controller =  new AbortController()

    const timer = setTimeout(()=>{
        controller.abort()
    },5000)

    try {
        const response = await fetch(API_URL,{
            method:"GET",
            signal: controller.signal
        })
        if(!response.ok){
            console.log(`udaterea api failed with http ${response.status}`)
            return
        }

        const rewUser = (await response.json()) as PlaceholderUser

        const user = transformUser(rewUser)
        console.log(`user fetched from external api ${JSON.stringify(user)}`)
    } catch (error) {
        console.log(`fetch error from user`)
    }finally{
        clearTimeout(timer)
    }
}

fetchExternalUser()