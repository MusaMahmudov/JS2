function dublicate(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i !== j) {
        if (array[i] === array[j]) {
          return array[i];
        }
      }
    }
  }
  return "no dublicate";
}
console.log(dublicate([2, 1, 4, 4, 6]));

function HighValue(array) {
  let Max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > Max) {
      Max = array[i];
    }
  }

  return Max;
}

console.log(HighValue([1, 2, 3, 230, 5, 6, 9, -1230, 290123]));

function double(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= 2;
  }
  return array;
}
console.log(double([1, 2, 3, 4, 3, 2, 4, 5]));
