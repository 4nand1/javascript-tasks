const ageInput = document.getElementById("ageInput");
const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");

checkBtn.addEventListener("click", () => {
  const age = Number(ageInput.value);

  if (age >= 18) {
    result.textContent = "🎉 ta arhi uuj bolohnee bayr hurgiye!";
    result.style.color = "green";
  } else if (age > 0) {
    result.textContent = "🚸 Та насанд хүрээгүй байна!";
    result.style.color = "red";
  } else {
    result.textContent = "⚠️ Зөв нас оруулна уу!";
    result.style.color = "orange";
  }
});
