import React from 'react'
import { useParams } from 'react-router-dom'
const url="https://jsonplaceholder.typicode.com/posts";
import { useState , useEffect } from 'react';


function PostDetail() {
    const {id}=useParams();
    const [post , setpost]=useState(null);
  async function fetchpost(){
     const res=await fetch(`${url}/${id}`)
      const data= await res.json()
      console.log(data)
      setpost(data);
      
    
  }
  useEffect(()=>{
    fetchpost( )

  } , [])
   
  return (
    <>
     {post && <h1>{post.title}</h1>  }
    </>
  
  )
}

export default PostDetail