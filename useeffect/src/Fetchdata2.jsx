import { signal } from 'nodemon/lib/config/defaults';
import React from 'react'
import { useState , useEffect } from 'react';


const aditya="https://jsonplaceholder.typicode.com/comments"

function Fetchdata2() {
    const [Data , setdata]=useState([]);
    const [loading , setloading]=useState(true);
    const [error  , seterror]=useState(false);

    


    useEffect(()=>{
        const controller=new AbortController();
        const signal =controller.signal;
        const prachi=async ()=>{
            const responce=await fetch(aditya , {signal:signal});
    
            if(!(responce.status>=200 && responce.status<299)){
                seterror(true);
                 setloading(false);
                return ;
    
            }
            const data= await responce.json();
            console.log(data);
            setdata(data);
            setloading(false)
    
        }
        prachi();
        
     return ()=>{
        controller.abort();


     }
    } , [])

    if(loading){
         return <h1>Loading .............. </h1>
    }

    if(error){
        return <h>Arraaa kuch na kuch to gadbad hai  URL mai bahi log </h>
    }
  return (
    <div >
   
   <div className='backenddata'>
   {
        Data.map(user=>{
            return <li key={user.id}>{user.name}</li>
        })
    }
   </div>
    </div>
    
  )
}

export default Fetchdata2