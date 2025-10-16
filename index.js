// 2.Өгөгдсөн тоо 1-ээс 100-н хооронд байвал "include" , байхгүй бол "exclude" гэж хэвлэнэ үү .
//  function onetohundred(a) {
//   if (a >= 1 && a <= 100) {
//     return "include";
//   } else {
//     return "exclude";
//   }
// }
// const result = onetohundred(250);
// console.log(result);

// 3.3 тооноос хамгийн ихийг нь олж хэвлэнэ үү
// function maxOfThree(a, b, c) {
//   if (a >= b && a >= c) {
//     return a;
//   } else if (b >= a && b >= c) {
//     return b;
//   } else {
//     return c;
//   }
// }
// const result = maxOfThree(10, 2, 7);
// console.log(result);

// 4.Өгөгдсөн жил нь Олимпийн жил мөн бишийг шалгаад хэвлэнэ үү
// function isOlympicYear(year) {
//   if (year % 4 === 0) {
//     return "olimp boln";
//   } else {
//     return "olimp bolohgui";
//   }
// }
// const result = isOlympicYear(2025);
// console.log(result);

// 5.Өгөгдсөн сурагчийн дүнг A , B , C , D , F бүлэгт ангилж хэвлэнэ үү .
//     90-100, A
//     70-89, B
//    60-69, C
//     50-59, D
//     0-49, F
// function yourgrade(precent) {
//   if (precent >= 90 && precent <= 100) {
//     console.log("A");
//    } else if ( precent >= 70 && precent <= 89) {
//     console.log("B");
//    } else if ( precent >= 60 && precent <= 69) {
//     console.log("C");
//    } else if ( precent >= 50 && precent <= 59) {
//      console.log("D");
//    } else if ( precent >= 0 && precent <= 49) {
//      console.log("F");
//    }
//   }
//   const precent = yourgrade(35);

//  8.Цаг агаарын температур болон "sunny" эсвэл "rainy" гэж өгөгдөх ба бороотой бол "Don't forget your umbrella!" , нартай бол температур нь 30-аас их бол "It's a hot day!" , 20-30 градус бол "It's a warm day" , 20-оос бага бол "It's a bit cool today" гэж хэвлэнэ үү .
//    for example : weather = "sunny" temperature = 25 / It's a warm day.
// function HowisTheWeather(weather, T) {
//   if (weather=== "rainy") {
//    console.log("Don't forget your umbrella!")
//   } else if (weather==="sunny") {
//  if (T>=30) {
//   console.log("it's a hot day");
//  } else if (T>=20 && T<=29) {
//    console.log("it's a warm day");
//   } else if (T <=19) {
//     console.log("t's a bit cool today" )
//   }
//   }
// }
//   let weather,
//   T = HowisTheWeather("sunny", 43);

// 9. Өгөгдсөн насыг шалгаад 18-аас дээш бол "You are old enough to drive", 18-аас доош бол 18 хүрэхэд дутуу байгаа жилтэй нь хамт "You are left with 3 years to drive" гэж хэвлэнэ үү.
// function HowOldAreU( Age) {
//   if  (Age )
// }

// const arr = [235, 23, 5 ,36, 7547]

// let max= arr[0]

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//   console.arr[i]; {
//  max = arr[i]
//   }
// }
// }
//  console.log(max)

//  const arr = [235, 24355, 5, 36, 7547];

// let max = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// console.log( max);

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




// Object

// const product = {
//     name: "Macbook",
//     price: 1899,
//     description: "new chip",
//     origin: {
//         country: "USA,California",
//     }
// }
// console.log(product)


// function a(num) {
//     return num + 1
// }

// function fun(get) {
//     return get(5);
// }






// const arr = [1, 3, 4, 6];
// const result = arr.map((item) => {
//     return item * item;
// });
// console.log(result);


// function isBigEnough(value) {
//   return value >= 10;
// }

// const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// console.log(isBigEnough(value))


// 1. Reverse a string
// Input: “hello”
// Output: “"olleh"

// const str = "hello";

// const reverseString = (str) => {
//     return str.split("").reverse().join("");
// };

// console.log(reverseString(str));




// 2. Check if a string is a palindrome
// Result: "madam" → true, "hello" → false

// function real(str) {
//   let reversed = str.split('').reverse().join('');

//   return str === reversed;
// }

// console.log(real("hello")); 
 


// 3. Count vowels in a string
// Result: "education" → 5

// function countVowels(str) {
//   let count = 0;
//   let vowels = "aeiouy";

//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(countVowels("education")); 
// console.log(countVowels("hello")); 
// console.log(countVowels("sky")); 
// console.log(countVowels("everything"))







// 4. Find the longest word in a sentence

// Result: "I love programming" → "programming"



// 5. Count character occurrences

// Result: "hello" → { h:1, e:1, l:2, o:1 }






// const birthday = new Date("2007-07-31");
// const today = new Date();

// let years = today.getFullYear() - birthday.getFullYear();
// let months = today.getMonth() - birthday.getMonth();

// if (months < 0) {
//   years--;
//   months += 12;
// }


// console.log(`${years} ${months}`);


