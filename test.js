// const value = document.getElementsById("value");
// const minus = document.getElementsById("minus");
// const plus = document.getElementsById("plus");

// let count = 0;

// plus.addEventListener("click", () => {
//   count++;
//   value.textContent = count;
// });

// minus.addEventListener("click", () => {
//   count--;
//   value.textContent = count;
// });

const value = document.getElementsByClassName("value");
const minus = document.getElementsByClassName("minus");
const plus = document.getElementsByClassName("plus");

let count = 0;

plus[0].addEventListener("click", () => {
  count++;
  value[0].textContent = count;
});

minus[0].addEventListener("click", () => {
  count--;
  value[0].textContent = count;
});
