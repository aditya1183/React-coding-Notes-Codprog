import React from 'react'
import { createBrowserRouter ,createRoutesFromElements , Route , RouterProvider } from 'react-router-dom'
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"

import Error from "./Pages/Error";
import Posts from "./Pages/Posts";
import RootLayots from './Layots/RootLayots'
import PostDetail from './Pages/PostDetail';
import ReqiredAuth from './Components/ReqiredAuth'
import Login from './Components/Login'
import AuthContext from './Context/AuthProvider'
import AuthProvider from './Context/AuthProvider'



// create router 
const route =createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<RootLayots/>}>

  <Route index element={<Home/>}/>
  <Route path='/About' element={<About/>}/> 
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/posts' element={<ReqiredAuth><Posts/></ReqiredAuth> }/>
  <Route path='/posts/:id' element={<PostDetail/>}/>
  <Route path='/login' element={<Login/>}/>
  

  <Route path='*' element={<Error/>}/> 


</Route>))
function App() {
  return (
    <div>
      
      <AuthProvider>
      <RouterProvider router={route}/>

      </AuthProvider>
    </div>
  )
}

export default App