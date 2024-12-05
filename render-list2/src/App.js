import logo from './logo.svg';
import './App.css';
import Users from './components/Users';
import Onclick from './Onclick';



const user=[
  { id:1, firstname:"Aditya" , lastname:"vashistha"},
  { id:2, firstname:"Prachi" , lastname:"vashistha"},
  { id:3, firstname:"Harshit" , lastname:"vashistha"},
  { id:4, firstname:"Nitish" , lastname:"vashistha"}

]

function App() {

  function adityaprachi(){
    console.log("hello aditya vashistha");

  }
  return (
    <div className="App">
      <h1>Aditya Vashistha</h1>
    {
    user.map((data)=>{
      return <Users key={data.id} firstname={data.firstname} lastname={data.lastname}/>

    })
    }

    <Onclick onClick={adityaprachi}/>
      
    </div>
  );
}

export default App;
