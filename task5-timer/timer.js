// const hour = document.querySelector("#Hour");
// const minute = document.querySelector("#Minute");
// const second = document.querySelector("#Second");
// const start = document.querySelector(".startbtn");
// const stopbtn = document.querySelector(".st");

// let sec = 0;

// startbtn.addEventListener("click", () => {
//   const timer = setInterval(() => {
//     sec++;

//     second.textContent = sec % 60;
//     minute.textContent = Math.floor(sec / 60);
//     hour.textContent = sec;
//   }, 100);
// });

const hour = document.getElementById("Hour");
const minute = document.getElementById("Minute");
const second = document.getElementById("Second");

const startBtn = document.querySelector(".startbtn");
const stopBtn = document.querySelector(".stopbtn");
const resetBtn = document.querySelector(".resetbtn");

let sec = 0;
let timer = null;

function updateDisplay() {
  const hrs = Math.floor(sec / 3600);
  const mins = Math.floor((sec % 3600) / 60);
  const secs = sec % 60;

  hour.textContent = hrs.toString().padStart(2, "0");
  minute.textContent = mins.toString().padStart(2, "0");
  second.textContent = secs.toString().padStart(2, "0");
}

startBtn.addEventListener("click", () => {
  if (timer) return;

  timer = setInterval(() => {
    sec++;
    updateDisplay();
  }, 900);
});

stopBtn.addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
});

resetBtn.addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
  sec = 0;
  updateDisplay();
});
