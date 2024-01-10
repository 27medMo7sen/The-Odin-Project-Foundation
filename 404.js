function myForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]); // This is when the callback function gets called, or executed
  }
}

// You would call it like this:
const myArry = [2, 3, 4, 2];
myForEach(myArry, (item) => {
  console.log(item + 2);
})
