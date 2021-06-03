export const formatLocation = (location) => {
  let result;
  //let result = location.map((loc) => loc.replace(/-/g, " "));
  if (location.length < 1) {
    result = "N/A";
  } else {
    result = `<p class="text-capitalize mb-0">${location
      .map((loc) => loc.replace(/-/g, " ").replace(" area", ""))
      .join("</p><p class='text-capitalize mb-0'>")}</p>`;
    // console.log(result);
  }
  return result;
};
