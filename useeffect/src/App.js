import Fetchdata from './Fetchdata';
import Fetchdata2 from './Fetchdata2';
import './App.css';
import Cleanupfunction from './Cleanupfunction';
import { useState } from 'react';
import Mousemoveevent from './Mousemoveevent';
import Focusoninput from './Focusoninput';
import Fetchdataexamplewithmount_and_unmount from './Fetchdataexamplewithmount_and_unmount';

function App() {
  const [showcomponent , setshowcomponent]=useState(true);
  return (
    <div className="App">
      <h1>Aditya</h1>
 
      <br></br>
      <Cleanupfunction/>
      <Mousemoveevent/>

      <label htmlFor='cleanupfunction'>show Component : </label>
      <input  
      type='checkbox' id='cleanupfunction' name='cleanupfunction' checked={showcomponent}
      onChange={()=>setshowcomponent(!showcomponent)}
      />
     
    
    {showcomponent && <Focusoninput/>}
    </div>
  );
}

export default App;
