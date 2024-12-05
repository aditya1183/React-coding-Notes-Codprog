import React from 'react'
import { useEffect , useState } from 'react'
import User from './User';

const URL="https://jsonplaceholder.typicode.com/users";


function Fetchdataexample() {

    const [users , setusers]=useState([]);
    const fetchdata=async()=>{
         const responce=  await fetch(URL);
         const data= await responce.json();
         setusers(data);

    }

    useEffect(()=>{
        fetchdata();
    }, [])




  return (
    <div>
        {
            users.map((user)=>{
                return <User  key={user.id }{...user}/>
            })
        }
    </div>
  )
}

export default Fetchdataexample