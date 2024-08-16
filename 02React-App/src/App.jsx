import ChildrenPassing from "./components/ChildrenPassing";

function App() {
  const handleclick = () => {
    window.open("https://google.com");
  };
  return (
    <>
      <ChildrenPassing name="Subham">
        <div>
          <p>Hello</p>
          <button onClick={handleclick}>Click Me!</button>
        </div>
      </ChildrenPassing>
    </>
  );
}

export default App;
