import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PhotoDisplay() {
  const { Id } = useParams();
  const [photo, setPhoto] = useState(null);
  useEffect(() => {
    // Fetch the specific photo by ID
    fetch(`https://jsonplaceholder.typicode.com/photos/${Id}`)
      .then((res) => res.json())
      .then((data) => setPhoto(data))
      .catch((error) => console.error("Error fetching photo:", error));
  }, [Id]);

  return (
    <>
      <h2>Your Photo</h2>

      <div>
        {!photo ? (
          <>
            <div className="loading">
              <h3>Loading...</h3>
            </div>
          </>
        ) : (
          <>
            <img src={photo.url} alt={photo.title} />
            <h3>{photo.title}</h3>
          </>
        )}
      </div>
    </>
  );
}

export default PhotoDisplay;
