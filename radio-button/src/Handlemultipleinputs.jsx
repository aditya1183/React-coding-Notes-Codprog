import React from 'react'
import { useState } from 'react'

function Handlemultipleinputs() {


    // const [FirstName , setFirstName]=useState("");
    // const [LastName , setLastName]=useState("");
    // const [UserName , setUserName]=useState("");
    // const [email , setemail]=useState("");
    // const [Password , setPassword]=useState("");
    // const [confirmpassword , setconfirmpassword]=useState("");
    // const [Phonenumber , setPhonenumber]=useState("");
    // const [Addres , setAddress]=useState("");
    const [formdata , setformdata]=useState({
        FirstName:"",
        LastName:"",
        UserName:"",
        email:"",
        Password:"",
        "Confirm Password":"",

        "Phone Number":"",
        Addres:"",




    })

    function handlesubmit(e){
        e.preventDefault();


    }
    function  handlechange(e){
        setformdata((prevstate)=>{
            return {...prevstate , [e.target.name]:e.target.value}

        })

    }

  return (
    <form  onSubmit={handlesubmit} style={{
        padding:"1rem"
    }}>
        <div className="fromgroup">

        <label htmlFor="FirstName">FirstName : </label> <br/>
        <input type="text" name="FirstName" id="FirstName"  value={formdata.FirstName} onChange={handlechange}/>
        </div>
        <div className="fromgroup">

        <label htmlFor="LastName">LastName : </label> <br/>
        <input type="text" name="LastName" id="LastName"
        value={formdata.LastName} onChange={handlechange}
        />
        </div>





        <div className="fromgroup">

        <label htmlFor="UserName">UserName : </label> <br/>
        <input type="text" name="UserName" id="UserName"
        value={formdata.UserName} onChange={handlechange}
        />

        </div>


        
        <div className="fromgroup">

    <label htmlFor="email">email : </label> <br/>
    <input type="email" name="email" id="email" 
    value={formdata.email} onChange={handlechange}
    />
    </div>




        <div className="fromgroup">

        <label htmlFor="Password">Password : </label> <br/>
        <input type="number" name="Password" id="Password"  
        value={formdata.Password} onChange={handlechange}
        
        />
        </div>


        <div className="fromgroup">

        <label htmlFor="Confirm Password"> Confirm Password : </label> <br/>
        <input type="number" name="Confirm Password" id=" Confirm Password"  value={formdata['Confirm Password']} onChange={handlechange}/>
        </div>


        <div className="fromgroup">

        <label htmlFor="Phone Number">Phone Number  : </label> <br/>
        <input type="number" name="Phone Number" id="Phone Number" value={formdata['Phone Number']}  onChange={handlechange}/>

        </div>



        <div className="fromgroup">

        <label htmlFor="Addres">Address : </label> <br/>
        <input type="text" name="Address" id="Address"   value={formdata.Addres} onChange={handlechange} />

        </div>

        <input type="submit" value="Sign Up" style={{
            margin:"2rem"
        }}/>
        
    </form>
  )
}

export default Handlemultipleinputs