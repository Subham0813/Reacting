/*
function ListGroup() {
  return (
    <div>
        <h1>Hello From List</h1>
        <ul className="list-group">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
          <li className="list-group-item">And a fifth one</li>
        </ul>
    </div> //okay for multiple elements but we're adding another Dom element into the Browser which is not good so We can use React Fragments
  );
}
*/

/*
function ListGroup() {
  return (
    <Fragment>
        <h1>Hello From List</h1>
        <ul className="list-group">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
          <li className="list-group-item">And a fifth one</li>
        </ul>
    </Fragment> //good for react , React is Happy but we can do it another way
  );
}
*/
/*
function ListGroup() {
  return (
    <>
      <h1>Hello From List</h1>
      <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>
    </> //React is also Happy with This Snippet, Do not need to import Fragment

    //Now Change List items Dynamicaly
  );
}
*/

// function ListGroup() {
//   let items = [
//     "Apple🍎",
//     "Bannana🍌",
//     "Lemon🍋",
//     "Orange🍊",
//     "grape🍇",
//     "Strawberry🍓",
//     "Mango🥭",
//   ];

//   items = [];
//   const getMessage = () => {
//     if (items.length === 0) return <p>No item found!☹️</p>;
//   };

//   return (
//     <>
//       <h1>Hello From List</h1>
//       {getMessage()};
//       <ul className="list-group">
//         {items.map((item) => (
//           /*
//           <li className="list-group-item">{item}</li>
//            //getting error for key props , React need key Props for each element so that it can modify/update each of elements in DOM according to our usecases / UI.
//           */

//           <li key={item} className="list-group-item">
//             {item}
//           </li>
//         ))}
//       </ul>
//     </>

//     //Changing List items Dynamicaly
//     //getMessage Function have a replacement of shorter syntax
//   );
// }

/*
function ListGroup() {
  let items = [
    "Apple🍎",
    "Bannana🍌",
    "Lemon🍋",
    "Orange🍊",
    "grape🍇",
    "Strawberry🍓",
    "Mango🥭",
  ];

  //   items = [];

  return (
    <>
      <h1>Hello From List</h1>
      {items.length === 0 && <p>No item found!☹️</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>

    //Changing List items Dynamicaly
    //getMessage Function have a replacement of shorter syntax
  );
}
*/

/*
// HANDLING  EVENT

function ListGroup() {
  let items = [
    "Apple🍎",
    "Bannana🍌",
    "Lemon🍋",
    "Orange🍊",
    "grape🍇",
    "Strawberry🍓",
    "Mango🥭",
  ];

  //   const HandleEvent = (event) => console.log(event);
  const HandleEvent = (event) => alert(`${event.target.innerText} clicked`);

  return (
    <>
      <h1>Hello From List</h1>
      {items.length === 0 && <p>No item found!☹️</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li
            key={item}
            className="list-group-item active"
            onClick={HandleEvent}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
*/

//trying to do Dom manupulation
/*
function ListGroup() {
  let items = [
    "Apple🍎",
    "Bannana🍌",
    "Lemon🍋",
    "Orange🍊",
    "grape🍇",
    "Strawberry🍓",
    "Mango🥭",
  ];

  let selectedIndex = -1;
  const HandleEvent = function (index) {
    selectedIndex == index;
    console.log(selectedIndex, index);
  }; 
  //Not working as we expected because react does not awear about the "selectedIndex" variable because it is in global declearation of this component.

  //so solve this problem react provide us a HOOK called useState, using this we tell to react that this component has a data that might be change over time. so according to our need react do the rest seamlessly.

  return (
    <>
      <h1>Hello From List</h1>
      {items.length === 0 && <p>No item found!☹️</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={item} className="list-group-item" onClick={HandleEvent}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
*/

//Trying DOM manupulation Using HOOKS
//Managing state in our website

import { useState } from "react";

function ListGroup() {
  let items = [
    "Apple🍎",
    "Banana🍌",
    "Lemon🍋",
    "Orange🍊",
    "Grape🍇",
    "Strawberry🍓",
    "Mango🥭",
  ];

  /*
    let selectedIndex = -1;
    const HandleEvent = function (index) {
      selectedIndex == index;
      console.log(selectedIndex, index);
    }; 

    //Not working as we expected because react does not awear about the "selectedIndex" variable because it is in global declearation of this component.
  
    //so solve this problem react provide us a HOOK called useState, using this we tell to react that this component has a data that might be change over time. so according to our need react do the rest seamlessly.
    */

  //State HOOK
  // const arr = useState(-1)
  // arr[0] -> a variable
  // arr[1] -> a updater function

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>Hello From List</h1>
      {items.length === 0 && <p>No item found!☹️</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
