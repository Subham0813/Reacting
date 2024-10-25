/*
import Compo3 from "./Compo3"

function Compo2(Props) {

    return (
        <>
        <h3>{"Hello I'm Compo 2"}</h3>
        <Compo3 data={Props.data}/>
        </>
    )
}

export default Compo2

//Prop DRILLING
*/

import { useContext } from "react";
import Compo3 from "./Compo3";
import { MyContext } from "../App";

function Compo2() {
  const { state } = useContext(MyContext);
  const [color, setColor] = state
  const handleClick = () => {
    const rand = Math.round(Math.random() * 1000000);
    setColor(rand);
  };

  return (
    <>
      <h3 style={{ color: `#${color}` }}>{"Hello I'm Compo 2"}</h3>
      <button onClick={handleClick} style={{ backgroundColor: `#${color}` }}>
        Change Color
      </button>
      <Compo3 />
    </>
  );
}

export default Compo2;

