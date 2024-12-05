
import './App.css';
import Aditya from './Aditya';
import Fetchdataexample from './Fetchdataexample';
import { useState } from 'react';
import Mousemove from './Mousemove';


function App() {
  const [showcomponent , setshowcomponet]=useState(true);
  return (
   <>
    
    <Fetchdataexample/>

    <label htmlFor='showcomponent'>Show Component</label>
    <input id="showcomponent" name="showcomponent" type='checkbox' checked={showcomponent} onChange={()=> setshowcomponet(!showcomponent)}/>
    {showcomponent && <Mousemove/>}
    </>


  );
}

export default App;
