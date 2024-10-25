/*
import Compo2 from "./Compo2"

function Compo1(Props) {
    
    return (
        <>
        <h1>{"Hello I'm Compo 1"}</h1>
        <Compo2 data={Props.data}/>
        </>
    )
}

export default Compo1

//Prop DRILLING
*/

import Compo2 from "./Compo2";

function Compo1() {
  return (
    <>
      <h1>{"Hello I'm Compo 1"}</h1>
      <Compo2 />
    </>
  );
}

export default Compo1;
