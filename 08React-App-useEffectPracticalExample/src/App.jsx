import { useEffect, useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  const [dataArray, setDataArray] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => {
        const album = [];
        for (let id = 1; id <= 100; id++) {
          const newArray = [];
          data.forEach((element) => {
            if (element.albumId === id) newArray.push(element);
          });

          album.push(newArray);
        }

        setDataArray(album);
        
      });
  }, []);

  return (
    <>
      <h1>Hello Bondhu</h1>
      <div className="container">
        {
          dataArray.map((index) => (
            <Link 
            key={index} 
            className={`album ${index}`} 
            to={`/album/${index+1}`}
            >
              
              <h3>{`album ${index + 1}`}</h3>

            </Link>
          ))

        }
      </div>
    </>
  );
}

export default App;
