/*
  Create a function that takes in an array of
  numbers and return another array of all of
  the even numbers in the array.

  example.
    var arr = [1, 2, 3, 4, 5]

    console.log(evenArr(arr))

    > [2, 4]
*/

// create an array to have even numbers
// loop or iterate through the array
// condition to check if the value is even
// and if it is even, then push it to the even array
// return the even array

var arr = [1, 3, 4, 6, 7, 8, 1]

function evenArr(arr) {
  var evenArray = []

  arr.map((num) => {
    // Modulas (%) - remainder number form division
    if (num % 2 == 0) {
      evenArray.push(num)
    }
  })

  return evenArray
}

console.log( evenArr(arr) );