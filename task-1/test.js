

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
