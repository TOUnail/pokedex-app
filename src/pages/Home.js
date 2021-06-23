import React, { useRef, useContext, useState } from "react";
import Header from "../components/home/Header";
import Footer from "../components/home/Footer";
import PokemonCard from "../components/home/PokemonCard";
import Context from "../context/Context";
// import { mutate, useSWRInfinite } from "swr";
// import useOnScreen from "../hooks/useOnScreen";
import { useRequest } from "../hooks/useRequest";
import "../components/home/Home.scss";

//const PAGE_SIZE = 21;
const Home = () => {
  // const [page, setPage] = useState(21);
  // const [apiOffset, setApiOffset] = useState(0);
  // const { data: result, error } = useRequest("/pokemon");
  // if (error) return <p>Something went wrong.</p>;
  // if (!result) return <p>Loading...</p>;
  const ref = useRef(null);
  const context = useContext(Context);
  let generation = context.generation;
  // console.log(generation);
  // let offset = 1;
  let apiOffset;
  let apiLimit;
  switch (generation) {
    case 1:
      apiOffset = 0;
      apiLimit = 151;
      break;
    case 2:
      apiOffset = 151;
      apiLimit = 100;
      break;
    case 3:
      apiOffset = 251;
      apiLimit = 135;
      break;
    case 4:
      apiOffset = 387;
      apiLimit = 107;
      break;
    case 5:
      apiOffset = 494;
      apiLimit = 155;
      break;
    case 6:
      apiOffset = 649;
      apiLimit = 72;
      break;
    case 7:
      apiOffset = 721;
      apiLimit = 81;
      break;
    case 8:
      apiOffset = 809;
      apiLimit = 81;
      break;
    default:
      apiOffset = 0;
      apiLimit = 151;
      break;
  }

  const { data, error } = useRequest(
    "/pokemon",
    `?offset=${apiOffset}&limit=${apiLimit}`
  );
  // const { data, error, size, setSize, mutate } = useSWRInfinite(
  //   (index) => {
  // console.log("apiOffset");
  // console.log(apiOffset);
  // console.log("index");
  // console.log(index);
  // console.log("PAGE_SIZE");
  // console.log(PAGE_SIZE);
  // return `https://pokeapi.co/api/v2/pokemon/?offset=${
  //   generation > 1 ? apiOffset * (index + 1) : apiOffset * index
  // }&limit=${PAGE_SIZE}`;
  //     return `https://pokeapi.co/api/v2/pokemon/?offset=${
  //       page * index
  //     }&limit=${page}`;
  //   },
  //   { persistSize: true }
  // );

  // const isVisible = useOnScreen(ref, "200px");
  // const nextDataUrl = data ? data[data.length - 1].next : null;
  // if (data && nextDataUrl) {
  //   let nextDataParams = new URLSearchParams(nextDataUrl).get("offset");
  // }
  if (error) console.log(error);
  if (!data) return null;
  //const result = data ? [].concat(...data) : [];
  //const newResult = data ? [].concat(...data[data.length - 1].results) : [];
  // const isLoadingInitialData = !data && !error;
  // const isLoadingMore =
  //   isLoadingInitialData ||
  //   (size > 0 && data && typeof data[size - 1] === "undefined");
  // const isEmpty = data?.[0]?.length === 0;
  // const isReachingEnd =
  //   isEmpty || (data && data[data.length - 1]?.length < page);

  // console.log(`size: ${size}`);
  // const searchSubmit = (term) => {
  //   console.log(term);
  // };
  // useEffect(() => {
  //   if (isVisible && !isReachingEnd) {
  //     setSize(size + 1);
  //   }
  // }, [isVisible]); // eslint-disable-line
  // const onGenClick = () => {
  //   setSize(1);
  //   mutate();
  // };

  // console.log("data");
  // console.log(data);
  // console.log("newResult");
  // console.log(newResult);
  return (
    <>
      <Header />
      <div className="container-md home-container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gx-0 g-md-3">
          {/* {data.map((r) =>
            r.results.map((pokemon) => (
              <PokemonCard key={pokemon.name} pokemon={pokemon} />
            ))
          )} */}
          {data.results.map((pokemon) => (
            <PokemonCard key={pokemon.name} pokemon={pokemon} />
          ))}
        </div>
        {/* {nextDataUrl && nextDataUrl} */}
        {/* <div className="row gx-0 gx-lg-3 justify-content-center">
          
          <div className="col" ref={ref}>
            <button
              className="d-block w-100 btn py-4"
              disabled={isLoadingMore || isReachingEnd}
              onClick={() => setSize(size + 1)}
            >
              {isLoadingMore
                ? "Loading"
                : isReachingEnd
                ? "No More Pokémon"
                : "Load More Pokémon"}
            </button>
          </div>
        </div> */}
      </div>
      <Footer />
    </>
  );
};

export default Home;
