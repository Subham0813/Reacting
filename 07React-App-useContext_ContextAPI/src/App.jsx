/*

import './App.css'
// import Compo1 from './components/Compo1'

function App() {
  

  return (
    <>
      
      <h1>Hello Bondhu</h1>
      <Compo1 data={
        {name: 'Subham',
        roll : 11200122063,
        branch: "CSE"
        }
      }/> 
      
      {
      **PROP DRILLING - A prop is send by higher component to that child who is going to use this prop, from higher component to child there may be other compoponet in between which are going to carry this prop to that destined child, so we found that outer components carrying Props for a perticular child component which makes component bulky and we have to write same code again and again which break the DRY principle,

      **To resolve this problem we need useContext() hook or context api in React..

      **In useContext() a simple working principle followed that is who is sending Props is a Provider and who is going to use that Props will be the consumer, no need to manually pass on the Props along..
      }
    </>
  )
}

export default App

*/

import { createContext, useState } from "react";
import "./App.css";
import Compo1 from "./components/Compo1";

// step 1: Create Context
const MyContext = createContext();

function App() {
  const [color, setColor] = useState("000000");
  const user = {
    fname: "Subham",
    lname: "Bachar",
    pincode: 700141,
  };

  return (
    <>
      <h1>Hello Bondhu</h1>
      {/* step 2: Wrap all that child into Provider which will going to use Props or Context
      these will helps to consume the data by that component if they want to..*/}

      <MyContext.Provider value={{state: [color, setColor],
      user}}>
        <Compo1 />
      </MyContext.Provider>
    </>
  );
}

export default App;
export { MyContext };
