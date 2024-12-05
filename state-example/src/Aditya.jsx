import React from 'react'

function Aditya({aditya , increaseage  , deleteuser}) {
 
  
  return (


    <>
     
     {
        aditya.map((user)=>{
            return <div className='garima' key={user.id}>
              <p> Id        :{user.id}</p>
              <p>Firstname  :{user.firstname}</p>
              <p>Lastname   :{user.lastname}</p>
              <p>Age :    {user.age}</p>
              <button onClick={()=>{increaseage(user.id)}}>Increase Age</button>
              <button onClick={()=>{deleteuser(user.id)}}>Delete User</button>
            </div>
        })
        
     }
    </>
   


  )
}

export default Aditya