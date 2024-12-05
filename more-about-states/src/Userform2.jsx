import React from 'react'
import { formatPostcssSourceMap } from 'vite'

function Userform2() {
  return (
   <form>
    <h1>Form</h1>
    <label htmlFor='firstname'>firstname</label>
    <input type="text"  name='firstname' id="firstname"/>
   </form>
  )
}

export default Userform2