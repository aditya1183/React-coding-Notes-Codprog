import React from 'react'

function User({id , name , username , email , address, phone, company}) {
  return (
    <div style={{
        padding:"1rem",
        margin:"1rem",
        backgroundColor:"#292929",
        color:"#efefef",
        textAlign:"center",
        

    }}>
        <h3>Name :{name}</h3>
        <h3>Username :{username}</h3>
        <h4>Email :{email}</h4>
        <h3>Phone :{phone}</h3>
        <h3>Address {address.city}</h3>
        <h3>Address {address.street}</h3>
    </div>
  )
}

export default User