import { useEffect, useState } from "react";

import { Unsplash } from "../consts.ts";

import FotoCard from "../components/FotoCard.tsx";

const HomePage = () => {
  const [photos, setPhotos] = useState<any>([]);
  useEffect(() => {
    fetch("https://api.unsplash.com/photos?page=1", {
      headers: {
        Authorization: `Client-ID ${Unsplash.ACCESS_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((json) => setPhotos(json));
  }, []);

  return (
    <>
      <div className="w-full h-full p-5 flex flex-row gap-4 flex-wrap">
        {photos.map((photo: any) => (
          <FotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
