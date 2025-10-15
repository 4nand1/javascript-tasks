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
// console.log(real(""));


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

// (2)
// function countVowels(str) {
//   const vowels = "aeiou";

//   const array = str.split("");
//   const filteredArr = array.filter((el) => vowels.includes(el));
//   return filteredArr.length;
// }
// console.log(countVowels("education"));



// 4. Find the longest word in a sentence

// Result: "I love programming" → "programming"

// function findLongestWord(str) {
//   let words = str.split(" ");

//   let longest = words[0];

//   for (let i = 1; i < words.length; i++) {
//     if (words[i].length > longest.length) {
//       longest = words[i];
//     }
//   }

//   return longest;
// }

// console.log(findLongestWord("I love programming"));
// console.log(findLongestWord("JavaScript is awesome"));

// (2)

// const findLongestWord = (sentence) => {
//     return sentence.split(" ").sort((a,))
// }

// 5. Count character occurrences

// Result: "hello" → { h:1, e:1, l:2, o:1 }

function countCharacters(str) {
  let result = {};  

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
          
    if (result[char]) {           
      result[char]++;
    } else {
      result[char] = 1;
    }
  }

  return result;
}

console.log(countCharacters(""));

// (2)

// const countOccurrence = (word) => {
//     const count = {};
// }


//  (random)
// //  B. Bat
//  hint: to toLowerCase(), toUpperCase()

// const name = { firstName: "bAT", lastName: "bold" };

// let firstLetter = name.lastName[0].toUpperCase();
// let firstName = name.firstName[0].toUpperCase() + name.firstName.slice(1);

// let result = `${firstLetter}. ${firstName}`;
// console.log(result); 



