// 1. Өгөгдсөн массивын гишүүдийн нийлбэрийг ол
// const arr = [235, 24355, 5, 36, 7547];

// let sum = arr[0]

// for (let i = 1; i < arr.length; i++) {
//    sum+=arr[i]
// }
// console.log(sum);

// 2. Өгөгдсөн массивын 0-ээс их элементүүдийн нийлбэрийг ол.
// const arr = [65334, 24355, 5, 36, 7547, -456, -6543, -5643];

// let sum= arr[0];

// for (let i = 1; i < arr.length; i++)
//   if (arr[i] > 0) {
//     sum+=arr[i]
//   }

//   console.log(sum);

// 3. Өгөгдсөн массивын хамгийн бага элементийг ол.
// const arr = [65334, 24355, 5, 36, 7547, -456, -6543, -5643];

// let min= arr[0];

//  for (let i = 1; i < arr.length; i++) {
//   if (arr[i] < min) {
//       min = arr[i]
//        }
//  }
//   console.log(min) ;

// 4. Өгөгдсөн массивын хамгийн их элемент хэд дэх нь вэ? Хэрэв хамгийн их элементийн тоо 1-ээс олон бол бага дугаарыг нь хэвлэнэ.
// const arr = [564,3455, 24355, 5, 36, 7547,24355];

// let maxindex= 0;

//  for (let i = 0; i < arr.length; i++) {
//    if (arr[i] >= arr[maxindex])
//   maxindex = i

//  }
//   console.log(maxindex)

// 5. Өгөгдсөн Массивийн элэментүүдийг эсрэг дарааллаар буцаа
// const arr = [564, 3455, 24355, 5, 36, 7547, 24355];
// const reversed = [];

// for (let i = arr.length - 1; i >= 0; i--) {
//   reversed.push(arr[i]);
// }

// console.log(reversed);

// 6. Хөрш элэментүүдээсээ их буюу орой элэментүүдийн тоог буцаа
// const arr = [564, 3455, 24355, 5, 23556, 7547, 24565, 3455, 5];

// let neighbors = 0;

// for (let i = 1; i < arr.length - 1; i++) {
//   if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
//     neighbors++;
//   }
// }
// console.log(neighbors)




// 7. Өгөгдсөн массивийн бүх хосыг хэвлэ
// const arr = [564, 3455, 24355, 5, 36, 7547, 24355, 3455, 5];
// const duplicates = [];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i+1; j < arr.length; j++) {
//     if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
//       duplicates.push(arr[i]);
//       console.log(` ${arr[i]}(${i}, ${j})`);
//     }
//   }
// }

// 7.2) Өгөгдсөн массивийн бүх хосыг хэвлэ
// const arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i+1; j < arr.length; j++) {
//     console.log(arr[i], arr[j]);
//   }
// }

// 8. Массив болон тоо өгөгдөв. Нийлбэр нь өгөгдсөн тоотой тэнцүү байдаг хосын тоог ол
// const arr = [564, 3455, 24355, 5, 36, 7547, 24355, 3455, 5];
// const target = 27810;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] + arr[j] === target) {
//       console.log(arr[i], arr[j]);
//     }
//   }
// }

// 9. Өгөгдсөн 2 массивийн огтлолцлыг ол
// const arr = [564, 3455, 24355, 5, 36, 7547, 24355, 3455, 5];
// const arr2 = [564, 364, 5474, 36, 3546, 5];
// let arr3 = [];
// let arr3Index = 0;

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr2.length; j++) {
//     if (arr[i] === arr2[j]) {
//       let isInArr3 = false;

//       for (let z = 0; z < arr3.length; z++) {
//         if (arr[i] === arr3[z]) isInArr3 = true;
//       }

//       if (!isInArr3) {
//         arr3.push(arr[i]);
//       }
//     }
//   }
// }
// console.log(arr3);

// 10. Өгөгдсөн массивийн сөрөг тоонуудыг зүүн талд нь байрлуул
// const arr = [1, 4, 45, 32, -2, 5, -3, -5, -6];
// let result = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < 0) {
//     result.push(arr[i]);
//   }
// }

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] >= 0) {
//     result.push(arr[i]);
//   }
// }

// console.log(result);



// 11. Дараалсан тоонуудаас бүрдэх массив өгөгдөх байсан боловч 1 тоо нь дутуу байв. Тэр тоог ол
// const arr = [1, 2, 3, 4, 6, 7, 8];
// const n = arr.length + 1; 
// const totalSum = (n * (n + 1)) / 2;
// let actualSum = 0;
// for (let i = 0; i < arr.length; i++) {
//   actualSum += arr[i];
// }
// const missingNumber = totalSum - actualSum;
// console.log(missingNumber);