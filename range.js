const range = function (number) {
  let sub = -1;
  const array = Array(number).fill(0);
  return array.map((num) => num + (sub += 1));
};
