import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Exmapleuseref from './Exmapleuseref'
import Counter from './Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Aditya</h1>
      <Counter/>
      <Exmapleuseref/>
    </>
  )
}

export default App
