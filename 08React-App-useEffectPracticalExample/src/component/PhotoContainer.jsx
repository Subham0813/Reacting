import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PhotoDisplay from "./PhotoDisplay";

export default function PhotoContainer() {
  const { albumId } = useParams();
  const [photoAlbum, setPhotoAlbum] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
      .then((res) => res.json())
      .then((data) => {
        setPhotoAlbum(data);
      });
  }, [albumId]);

  console.log(photoAlbum);
  return (
    <>
      <h1>Photos</h1>
      <div className="container">
      {photoAlbum.map((photo) => (
          <Link to={`/album/${albumId}/${photo.id}`}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
          </Link>
      ))}
      </div>
    </>
  );
}
