// import ListGroup from "./components/ListGroup";
import ListGroupProps from "./components/ListGroupProps";

function App() {
  // return <div><Message></Message></div>
  const fruits = [
    "Apple🍎",
    "Banana🍌",
    "Lemon🍋",
    "Orange🍊",
    "Grape🍇",
    "Strawberry🍓",
    "Mango🥭",
  ];
  const handleSelectItem = (item) => console.log(item);
  // const emojies = [
  //   "Happy 🙂",
  //   "Sad 🥲",
  //   "Confused 😕",
  //   "Thinking 🤔",
  //   "Angry 😤",
  //   "Sobbing 😭",
  //   "Wink 😉",
  // ];

  return (
    <>
      {/* <ListGroup /> */}

      <ListGroupProps
        items={fruits}
        heading="Fruits"
        onSelectItem={handleSelectItem}
      />

      {/* <ListGroupProps items={emojies} heading="Emojies" /> */}
    </>
  );
}

export default App;
