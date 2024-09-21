import { useState } from "react";
import "./App.css";

function App() {

  //data was given
  const data = [
    { name: "subham", email: "subham@subham.in", contact: "8246846284" },
    {name : 'rahul',
      email: "rahul@rahul.in",
      contact : "8648246284"},
    {name : 'sneha',
      email: "sneha@sneha.in",
      contact : '7580046284'
      },
  ];

  //setting input value and re-rendeing by useState
  const [inputValue, setInput] = useState("");

  //setting output value and re-rendering
  const [user, setUser] = useState({})

  const handleClick = () => {
    let flag = false
    data.forEach((element) => {
      if(element.name === inputValue){
        flag = true
        setUser(element)
      }
    })

    if(!flag) setUser({
      name : inputValue.toString(),
      email: 'NOT FOUND',
      contact : 'NOT FOUND'
    })

  };
  
  return (
    <>
      <h1>hello</h1>
      <input type="text" value={inputValue} onChange={(e) => setInput(e.target.value)}/> 
      <button onClick={handleClick}>search</button>
      <br />
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>{user.contact}</p>
      
    </>
  );
}

export default App;
