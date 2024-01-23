//*************** QUESTION ***************/

/* Write a function call same, which  accepts two arrays. The function should resutrn true if every value in the array has it's corresponding value squared in the second array. The frequency of value must be the same. */
//*************** EXAMPLE ***************/
/**
 * same([1,2,3], [4,1,9]) => ture
 * same([1,2,3], [1,9]) => false
 * same([1,2,3], [4,4,1]) => false (must be same frequency)
 */

//*************** SOLUTION'S ***************/

//****** BRUTE FORCE *******/

//! TIME_COMPLEXITY = O(N^2)
//! SPACE_COMPLEXITY = O(1)
const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  for (let val of arr1) {
    let correctIndex = arr2.indexOf(val ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }

  return true;
};

console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2, 3], [1, 9]));
console.log(same([1, 2, 3], [4, 1, 4]));

//****** FREQUENCY COUNTER PATTERN *******/

//! TIME_COMPLEXITY = O(N)
//! SPACE_COMPLEXITY = O(N)
const same2 = (arr1, arr2) => {
  // Check if they are of equal length.
  if (arr1.length !== arr2.length) return false;

  // Create to object to maintaine there counts.
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  // Populate the frequecy counter.
  // How does the "OR" works?
  // OR will return the oprand1 if its truthy value.
  //And if oprand1 is falsy value it reutrn the oparand2.
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  // Check if the key exist or not
  // And if it does check if the frequency is same of not.
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
};

console.log(same2([1, 2, 3], [4, 1, 9]));
console.log(same2([1, 2, 3], [1, 9]));
console.log(same2([1, 2, 3], [4, 1, 4]));
console.log(same2[(1, 2, 3, 2)], [9, 1, 4, 4]);



