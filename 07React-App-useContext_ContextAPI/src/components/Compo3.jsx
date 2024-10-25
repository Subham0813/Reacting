/*

function Compo3(Props) {
    const {name, roll, branch} = Props.data

    return (
        <>
            <h4>{"I'm Compo 3"}</h4>
            <p>{name}</p>
            <p>{roll}</p>
            <p>{branch}</p>
        </>
    )
}

export default Compo3
// Prop-DRILLING

*/

import { useContext } from "react";
import { MyContext } from "../App";

function Compo3() {

  const {user} = useContext(MyContext)

  return (
    <>
      <h4>{"I'm Compo 3"}</h4>
      <p>First name: {user.fname}</p>
      <p>Last name: {user.lname}</p>
      <p>Pincode : {user.pincode}</p>
    </>
  );
}
export default Compo3;
