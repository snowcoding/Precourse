// Do not change any of the function names

function invokeCallback(cb) {
  // invoke cb
  cb();
}

function sumArray(numbers, cb) {
  // sum up all of the integers in the numbers array
  // pass the result to cb
  // no return is necessary
  cb(numbers.reduce( (acc,curr) => acc + curr));

}

function forEach(arr, cb) {
  // iterate over arr and pass its values to cb one by one
  // hint: you will be invoking cb multiple times (once for each value in the array)

  arr.map(el => cb(el));

}

function map(arr, cb) {
  // create a new array
  // iterate over each value in arr, pass it to cb, then place the value returned from cb into the new arr
  // the new array should be the same length as the array argument

  let newArr = [];
  newArr = arr.map(el => cb(el));
  return newArr;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  invokeCallback,
  sumArray,
  forEach,
  map,
};
