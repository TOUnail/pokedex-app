import { useState } from "react";
import Context from "./Context";

const Store = ({ children }) => {
  const [generation, setGeneration] = useState(1);
  const setGen = (generation) => {
    // console.log(generation);
    setGeneration(generation);
  };
  const value = {
    generation: generation,
    setGen: (generation) => setGen(generation),
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
export default Store;
