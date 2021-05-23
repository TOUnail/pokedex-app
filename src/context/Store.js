import Context from "./Context";

const Store = ({ children }) => {
  const value = {
    generation: "ultra-sun-ultra-moon",
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
export default Store;
