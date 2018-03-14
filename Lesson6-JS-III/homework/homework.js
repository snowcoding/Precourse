// Do not change any of the function names

function returnFirst(arr) {
  // return the first item from the array
  return arr[0];
}

function returnLast(arr) {
  // return the last item of the array
  return arr[arr.length-1];
}

function getArrayLength(arr) {
  // return the length of the array
  return arr.length;
}

function incrementByOne(arr) {
  // arr is an array of integers  
  // increase each integer by one
  // return the array

  return arr.map(e => e+1);
}

function addItemToArray(arr, item) {
  // add the item to the end of the array
  // return the array
  arr.push(item);
  return arr;
}

function addItemToFront(arr, item) {
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
  arr.unshift(item);
  return arr;
}

function wordsToSentence(words) {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'

  //Manual Method (should be a way to use map/reduce/filter ? )
  let sentence = '';
  for (let i=0; i<words.length; i++){
    sentence += (i == 0) ? words[i] : ' ' + words[i];
  }
  return sentence;
}

function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false

  //Manual Method (should be a way to use map/reduce/filter ? )
  let itemFound = false;
  for (let i=0; i<arr.length;i++){
    if (arr[i] === item) itemFound = true;
  }
  return itemFound;

}

function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
  return numbers.reduce((acc,curr) => acc + curr);
}

function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
  let sum  = testScores.reduce((acc,curr) => acc + curr);
  return sum/testScores.length;
}

function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer

  //Manual Method (should be a way to use map/reduce/filter ? )
  let largest = 0;
  for (let i=0; i<numbers.length; i++){
    largest = (numbers[i] > largest) ? numbers[i] : largest;
  }
  return largest;
}

function multiplyArguments() {
  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it

  if (arguments.length === 0){
    return 0;
  }else if (arguments.length == 1){
    return arguments[0];
  }else{
    let prod = 1;
    for (let i=0; i<arguments.length; i++){
      prod *= arguments[i];
    }
    return prod;
  }
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  returnFirst,
  returnLast,
  getArrayLength,
  incrementByOne,
  addItemToArray,
  addItemToFront,
  wordsToSentence,
  contains,
  addNumbers,
  averageTestScore,
  largestNumber,
  multiplyArguments,
};
