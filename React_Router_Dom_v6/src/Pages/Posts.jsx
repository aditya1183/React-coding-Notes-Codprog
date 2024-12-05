import React, { useEffect, useState } from 'react'
import Post from '../Components/Post';





// function Posts() {
//   const [posts , setposts]=useState(null);
//   async function fetchposts(){
//      const res=await fetch(endpoint)
//       const data= await res.json()
//       setposts(data);
    
//   }
//   useEffect(()=>{
//     fetchposts()

//   } , [])
//   return (
//     <>
   
//     {
//       posts && posts.map((Aditya)=>{
//         return <Post id={Aditya.id} title={Aditya.title} key={Aditya.id}/>
//       })
//     }
// </>
//   )
// }

// export default Posts

const endpoint="https://jsonplaceholder.typicode.com/posts";

function Posts() {
  const[posts , setposts]=useState(null);
  async function fetchposts(){
    const responce = await fetch(endpoint);
    const data=await responce.json();
    setposts(data);
  }

  useEffect(()=>{
fetchposts();
  } , [])
  return (
    <div>
      <h1>All Posts</h1>
      {
        posts && posts.map((post)=>{
          return <Post id={post.id}  title={post.title} key={post.id}/>
        })
      }
    </div>
  )
}

export default Posts