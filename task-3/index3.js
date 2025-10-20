const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const addBtn = document.getElementById("addBtn");
const result = document.getElementById("result");

addBtn.addEventListener("click", () => {
  const a = Number(num1.value);
  const b = Number(num2.value);

  const sum = a + b;
  result.textContent = `${sum}`;
});
