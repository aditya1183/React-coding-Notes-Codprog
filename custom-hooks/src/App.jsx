

import { useState } from 'react';
import useFetch from './hooks/useFetch'
import Aditya from './hooks/Aditya';
import BasicsForm from './BasicsForm';


function App() {
  

  return (
    <div>
      <BasicsForm/>
      <useLocalStorageHooks/>
    </div>
  )
}

export default App
