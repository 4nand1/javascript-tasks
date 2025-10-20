const messageBox = document.getElementById("messageBox");
const buttons = document.querySelectorAll(".buttons button");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    if (btn.id === "candy") {
      messageBox.textContent = "🍬 Таны чихрийн захиалга баталгаажлаа! laitainbe";
    } 
    else if (btn.id === "cake") {
      messageBox.textContent = "🎂 Таны бялуугийн захиалгыг хүлээж авлаа! bitgii dawraad bgaraii";
    } 
    else if (btn.id === "icecream") {
      messageBox.textContent = "🍦 Зайрмаг удалгүй ирнэ! uhsendee zairmag iddin";
    }
  });
});

