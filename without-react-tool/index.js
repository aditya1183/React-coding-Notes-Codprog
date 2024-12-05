// const rootelement=document.getElementById("root");
// const heading=React.createElement("h1" , null , "aditya vashistha");
// // ReactDOM.createRoot(rootelement).render(heading)



// function aditya(){
//     return ReactDOM.createRoot(rootelement).render(heading);
// }

// aditya();



// const rootelement=document.getElementById("root");
//const aditya=React.createElement("h1" , null  , "prachi vashistha");
//ReactDOM.createRoot(rootelement).render(aditya);


// with the help of function create createElement

// function createElement(){
//     return React.createElement("h1" , {className:"aditya"} , "aditya");
// }


// ReactDOM.createRoot(rootelement).render(createElement());
const rootelement=document.getElementById("root");
function Aditya(){
    return <h1>aditya vashistha is good boy</h1>
}

ReactDOM.createRoot(rootelement).render(<Aditya />);
