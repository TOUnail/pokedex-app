import React, { useState } from "react";
import { useRequestFullUrl } from "../../hooks/useRequest";

const ListResultCard = ({ pokemon }) => {
  //https://swr.vercel.app/docs/conditional-fetching#dependent

  console.log(pokemon);
  const [imgLoading, setImgLoading] = useState(true);
  const imageLoaded = () => {
    setImgLoading(false);
  };
  const { data, error } = useRequestFullUrl(pokemon.url);

  if (error) return <p>Something went wrong.</p>;
  if (!data) return null;
  // console.log(data);

  return (
    <div className="d-flex align-items-center">
      <figure
        className="img-wrapper m-0 d-flex justify-content-center align-items-center"
        style={{ width: "96px", height: "96px" }}
      >
        {imgLoading && (
          <div className="spinner-border text-secondary p-2" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
        <img
          src={data.sprites["front_default"]}
          alt={pokemon.name}
          onLoad={imageLoaded}
          style={{
            display: imgLoading ? "none" : "block",
            imageRendering: "pixelated",
          }}
        />
      </figure>
      <p className="mb-0 text-capitalize">{pokemon.name}</p>
    </div>
  );
};

export default ListResultCard;
