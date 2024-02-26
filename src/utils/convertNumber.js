const convertNumber = (inputValue) => {
  if (typeof inputValue === "string" && inputValue.trim() === "0") {
    // console.log("Here123");
    return 0;
  }
  return typeof inputValue === "string" ? parseInt(inputValue, 10) : inputValue;
};

export default convertNumber;
