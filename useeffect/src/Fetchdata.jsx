import React, { useEffect } from 'react'

import { useState } from 'react';

const aditya="https://jsonplaceholder.typicode.com/comments";

function Fetchdata() {
    const [data , setdata]=useState([]);

    useEffect(()=>{
        fetch(aditya)
            .then((prachi)=>{
                return prachi.json();
            })
            .then((data)=>{
                console.log(data);
                setdata(data);

            })
    } , []);


  return (
    <div>
        <h1>Backend data</h1>
        {
            data.map((users)=>{
                return <div style={{
                    border:"2px solid black", margin:"1rem" 
                    
                }}>
                <ol>
                    <li>{users.id}</li>
                    <li>{users.name}</li>
                </ol>
                </div>
            })

        }
    </div>

  )
}

export default Fetchdata