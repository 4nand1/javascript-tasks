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


// 4.2
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

// const arr = [1, 4, 45, 453, 4, 5, 45, -3, 4, -6, 4, 5];
// let result = [];

// for (let i = 0; i < arr.length; i++) {
//   let again = false;

//   for (let j = 0; j < result.length; j++) {
//     if (arr[i] === result[j]) {
//       again = true;
//       break;
//     }
//   }

//   if (!again) {
//     result.push(arr[i]);
//   }
// }

// console.log(result);



// 6. Factorial Sum
// Problem: Return sum of factorials of each number in array
// const arr = [1, 2, 3, 4, 5, 6];

// function factorial(n) {
//   let result = 1;
//   for (let i = 1; i <= n; i++) {
//     result *= i; 
//   }
//   return result;
// }

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   sum += factorial(arr[i]); 
// }

// console.log(sum);



// 7. Array Rotation Check
// Problem: Check if arr2 is rotation of arr1
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [3, 4, 5, 1, 2];

// let isRotation = false;

// if (arr1.length === arr2.length) {
//   for (let i = 0; i < arr1.length; i++) {
//     let rotated = [];

//     for (let j = i; j < arr1.length; j++) {
//       rotated.push(arr1[j]);
//     }

//     for (let k = 0; k < i; k++) {
//       rotated.push(arr1[k]);
//     }
//     let same = true;
//     for (let z = 0; z < arr1.length; z++) {
//       if (rotated[z] !== arr2[z]) {
//         same = false;
//         break;
//       }
//     }

//     if (same) {
//       isRotation = true;
//       break;
//     }
//   }
// }

// console.log(isRotation);



// 8. Merge Two Sorted Arrays
// Problem: Merge two sorted arrays into one sorted array

// const arr1 = [1, 3, 5, 7, 9];
// const arr2 = [2, 4, 6, 8, 10];

// let i = 0;
// let j = 0;
// let merged = [];

// for (; i < arr1.length && j < arr2.length; ) {
//   if (arr1[i] < arr2[j]) {
//     merged.push(arr1[i]);
//     i++;
//   } else {
//     merged.push(arr2[j]);
//     j++;
//   }
// }

// for (; i < arr1.length; i++) {
//   merged.push(arr1[i]);
// }

// for (; j < arr2.length; j++) {
//   merged.push(arr2[j]);
// }

// console.log(merged);


// 9. Diagonal Sum of Matrix
// Problem: Calculate sum of main diagonal in a square matrix
// const matrix = [
//   [1, 2, 3, 4, 4],
//   [4, 5, 6, 5, 6],
//   [7, 8, 9, 7, 7],
//   [5, 6, 7, 5, 9],
//   [6, 7, 6, 4, 7]
// ];

// let sum = 0;


// for (let i = 0; i < matrix.length; i++) {
//   sum += matrix[i][i]; 
// }

// console.log(sum);


//Өгөгдсөн өдрийг шалгаж, зөвхөн амралтын өдөр эсвэл ажлын өдөр болохыг хэвлэнэ үү.

function odorvvd(day) {
  switch (day) {
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
      console.log("weekdays");
      break;
    case "6":
    case "7":
      console.log("weekends");
      break;
    default:
      console.log("invalid");
  }
}
odorvvd("8");
 