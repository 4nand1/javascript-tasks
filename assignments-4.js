// 1.1–100 хүртэлх бүх 3 болон 5-д хуваагддаг тоог хэвлэх

// let i = 1;

// while (i <= 100) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(i);
//   }
//   i++;
// }


// 2.Өгөгдсөн тооны цифрүүдийн нийлбэрийг ол

// let num = 2452435;
// let sum = 0;

// while (num > 0) {
//   sum += num % 10;  
//   num = Math.floor(num / 10); 
// }

// console.log(sum);

// 3.Өгөгдсөн цагийг 24 цагийн форматаас 12 цагийн AM/PM форматаар хөрвүүлэх функц бич

let hour = 10;
let period = ""; 

switch (true) {
  case hour === 0:
    hour = 12;
    period = "AM";
    break;

  case hour < 12:
    period = "AM";
    break;

  case hour === 12:
    period = "PM";
    break;

  default:
    hour = hour - 12;
    period = "PM";
    break;
}

console.log(`${hour} ${period}`);

// (2)

// let hour = 17;
// let period = hour >= 12 ? "PM" : "AM"; 
// hour = hour % 12 || 12;

// console.log(hour + " " + period);


// 4.Өгөгдсөн өдрийг шалгаж, зөвхөн амралтын өдөр эсвэл ажлын өдөр болохыг хэвлэнэ үү.

let day = 2;


switch (day) {
    case 1:
        console.log("NOOOOO");
        break;
       
         case 2:
        console.log("tayred");
        break;

         case 3:
        console.log("NOT GOOD");
        break;

         case 4:
        console.log("AHH TWO DAYS");
        break;

         case 5:
        console.log("LETS GO PARTY TONIGHT!!!!!");
        break;

         case 6:
        console.log("FINALLY");
        break;

         case 7:
        console.log("AHHHH SHTTTTT");
        break;

        default:
        period = "Invalid day"; 
}


