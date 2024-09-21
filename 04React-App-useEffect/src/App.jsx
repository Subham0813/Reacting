import { useEffect, useState } from "react";
import "./index.css";

function App() {
  
  const [joke, setJoke] = useState("");
  const [count , setCount] = useState(1)
  
  const handleClick = () => {
    console.log(joke)
    setCount(count+1)
  }

  useEffect(() => {
    //side-effect funtion
  
    return () => {
      //clean-up function
    }
  }, []) // [] => dependency list , multiple dependency elements can be there
  

  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Any")
      .then((res) => res.json())
      .then((data) => {
        if (data.type === "single") setJoke(data.joke);
        else setJoke(`${data.setup} -> ${data.delivery}`);
      })
      .catch((error) => console.error("Error fetching joke:", error));


      return () =>{
        console.log('unmountiing')
        alert('component is Unmounting')
      }

  }, [count]);


  return (
    <>
      <h1 className="main">{count}</h1>
      <div className="container">
        <h3>Todays Joke :</h3>
        <p>{joke}</p>
        <button onClick={handleClick}>Refresh</button>
      </div>
    </>
  );
}

export default App;
