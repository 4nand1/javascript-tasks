const boxes = document.querySelectorAll(".box");

for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", () => {
    if (boxes[i].style.backgroundColor === "aqua") {
      boxes[i].style.backgroundColor = "red";
    } else {
      boxes[i].style.backgroundColor = "aqua";
    }
  });
}
