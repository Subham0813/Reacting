// Props stands for properties in react , using this we can pass values / data to any component functions and use it according to our need , which unlocks the reuseability of one componenet at many times in our web-app, That is one of the main advantage of React.

import { useState } from "react";

// function ListGroupProps(Props) {
function ListGroupProps(Props) {
  const items = Props.items;
  const heading = Props.heading;

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
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
            onClick={() => {
              setSelectedIndex(index);
              Props.onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
//We can de-structure the props that will clean our code and increase readability in TypeScript not available in JS

export default ListGroupProps;
