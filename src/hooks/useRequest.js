import useSWR from "swr";

const baseUrl = "https://pokeapi.co/api/v2";

export const useRequest = (path, name) => {
  if (!path) {
    throw new Error("Path is required");
  }
  const url = name ? baseUrl + path + "/" + name : baseUrl + path;
  const { data, error } = useSWR(url);
  return { data, error };
};

export const useRequestFullUrl = (url) => {
  const { data, error } = useSWR(url);
  return { data, error };
};

export const useRequestFullInfo = (name) => {
  //TODO change name to pokemon number
  let nonGMaxName;
  if (name.includes("-gmax")) {
    nonGMaxName = name.replace("-gmax", "");
  }
  const { data: data1, error: error1 } = useSWR(
    `${baseUrl}/pokemon-species/${
      nonGMaxName !== undefined ? nonGMaxName : name
    }`
  );
  let defaultPokemon = data1?.varieties.find((variety) => variety.is_default);
  const { data: data2, error: error2 } = useSWR(
    () => defaultPokemon.pokemon.url
  );
  if (error1 || error2) console.log("Something went wrong");
  let result = {
    data: { ...data1, ...data2 },
    error: { ...error1, ...error2 },
  };
  if (!data2) return "...loading";
  return result;
};
