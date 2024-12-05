import { useState } from 'react'

 import Formexample from './Formexample'
import Randomnumbers from './Randomnumbers'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Formexample/>
    <Randomnumbers/>
    
    
   
    </>
  )
}

export default App
