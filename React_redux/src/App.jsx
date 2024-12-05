import { useSelector, useDispatch } from "react-redux";
import { increament } from "./features/counter/counterSlice";
import { decreament } from "./features/counter/counterSlice";
import { reset } from "./features/counter/counterSlice";
function App() {
  const { count } = useSelector((aditya) => {
    return aditya.adityaprachi;
  });
  const dispatch = useDispatch();
  return (
    <>
      <h1>count : {count}</h1>
      <button
        onClick={() => {
          dispatch(increament());
        }}
      >
        Increase
      </button>
      <button onClick={()=>{
        dispatch(reset());
      }
      }>Reset</button>
      <button 
      onClick={()=>{
        dispatch(decreament());
      }}
      >Decrease</button>
    </>
  );
}

export default App;
