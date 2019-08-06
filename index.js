// console.clear();
console.log("This is going to be fun! :)");
const swap = (str, first, second) => {
  const a = str.split("");
  a[first] = str[second];
  a[second] = str[first];
  return a.join("");
};

const getCombinations = str => {
  // str = str.replace(/[^0-9]/g, "");
  str = str.replace(/\D/g, "");
  const combo = [
    str,
    swap(str, 0, 1),
    swap(str, 0, 2),
    swap(swap(str, 0, 2), 0, 1),
    swap(swap(str, 2, 0), 1, 2),
    swap(str, 1, 2)
  ];
  return combo.join();
};
console.log(getCombinations("326"));
console.log(getCombinations("A 3B2 C6D"));
