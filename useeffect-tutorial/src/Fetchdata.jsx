import React, { useState } from 'react'
import { useEffect } from 'react'

const URL="https://jsonplaceholder.typicode.com/posts"

function Fetchdata() {
    const [users , setusers]=useState([]);
    const [isloading , setisloading]=useState(true);




    async function datafetch(){
          const responce= await fetch(URL);
           const data = await responce.json();
           console.log(data);
           setusers(data);
           setisloading(false)

    }
    
    useEffect(()=>{
        datafetch();

    //     fetch(URL)
    //         .then((responce)=>{
    //             return responce.json();
    //         })
    //         .then((data)=>{
    //             console.log(data);
    //         })
    // } ,[] )
})

if(isloading){
    return <h1>Arraaa Loading hoo rahi hai ruk abhi  . tang na kar </h1>
}
  return (
    <div>
        {
            users.map((user)=>{
                return <ul style={{border:"2px solid red" , background:"blue"}}>
                    <li style={{margin:"1rem" ,  border:"2px solid black" , background:"black", color:"white" ,  listStyle:"none"}}>{user.id} <br/>{user.title} <br/>{user.body}</li>
                </ul>
            })
        }
    </div>
  )
}

export default Fetchdata