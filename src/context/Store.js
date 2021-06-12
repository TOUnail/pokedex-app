import Context from "./Context";

const Store = ({ children }) => {
  const setGen = (generation) => {
    console.log(generation);
  };
  const value = {
    generation: "ultra-sun-ultra-moon",
    setGen: (generation) => setGen(generation),
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
export default Store;
