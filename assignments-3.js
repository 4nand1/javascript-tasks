// 1. Count Occurrences
// Problem: Count how many times a number appears in an array
// const arr = [1, 4, 45, 32, 4, 5, -3, 4, -6];
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] == arr[j]) {
//       count++;
//     }
//   }
// }
// console.log(count);

// 2. Check if Number Exists
// Problem: Return true if a number exists in the array
// const arr = [1, 4, 45, 32, 4, 5, -3, 4, -6];

// function numberExists(num) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === num) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(numberExists(32));

// 3. Find Second Largest
// Problem: Find the second largest number in an array
// const arr = [1, 4, 45, 453, 4, 5, -3, 4, -6];

// let max = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// let max2 = arr[0];

// for (let j = 0; j < arr.length; j++) {
//   if (arr[j] < max) {
//     if (arr[j] > max2) {
//       max2 = arr[j];
//     }
//   }
// }
// console.log(max2);

// 4. Rotate Array
// Problem: Rotate array right by k positions
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ];
// const k = 2;

// let result = [];

// for (let i = k; i < arr.length; i++) {
//     result.push(arr[i])
// }
// for (let j = 0; j < k; j++) {
//     result.push(arr[j])
// }
// console.log(result);

//      2.
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// const k = 4;

// let result = [];

// for (let i = arr.length - k; i < arr.length; i++) {
//   result.push(arr[i]);
// }

// for (let j = 0; j < arr.length - k; j++) {
//   result.push(arr[j]);
// }

// console.log(result);



// 5. Remove Duplicates (preserve order)
// Problem: Remove duplicate numbers while keeping first occurrence

const arr = [1, 4, 45, 453, 4, 5, -3, 4, -6];
let result = [];

for (let i = 0; i < arr.length; i++) {
    result = true 

   for (let j = 0; j < k; j++)
}