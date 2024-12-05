import React from 'react'
import { Link, Outlet, useSearchParams } from 'react-router-dom'
import { useAuth } from '../Context/AuthProvider'

function RootLayots() {
  const {islogin , setinlogin}=useAuth();
  return (
    <div>
        <h1>Nav</h1>
        <nav>
            <ul>
                <li>
                  <Link>Home</Link>
                </li>
                <li>
                  <Link to="About">About</Link>
                </li>
                <li>
                  <Link to="contact">Contact</Link>
                </li>
                <li>
                  <Link to="posts">posts</Link>
                </li>
                <li>
                  <Link to="error">Error</Link>
                </li>
               {!islogin &&  <li>
                  <Link to="login">Login</Link>
                </li>}
            </ul>
           {
            islogin &&  <button onClick={()=>{setinlogin(false)}}>Log Out</button>
           }
        </nav>
        <hr></hr>
        <main>
          <h1>Main Content</h1>
          <Outlet/>
        </main>
    </div>
  )
}

export default RootLayots