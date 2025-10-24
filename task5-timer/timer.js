// const hour = document.getElementById("Hour");
// const minute = document.getElementById("Minute");
// const second = document.getElementById("Second");

// const startBtn = document.querySelector(".startbtn");
// const stopBtn = document.querySelector(".stopbtn");
// const resetBtn = document.querySelector(".resetbtn");

// let sec = 0;
// let timer = null;

// function updateDisplay() {
//   const hrs = Math.floor(sec / 3600);
//   const mins = Math.floor((sec % 3600) / 60);
//   const secs = sec % 60;

//   hour.textContent = hrs.toString().padStart(2, "0");
//   minute.textContent = mins.toString().padStart(2, "0");
//   second.textContent = secs.toString().padStart(2, "0");
// }

// startBtn.addEventListener("click", () => {
//   if (timer) return;

//   timer = setInterval(() => {
//     sec++;
//     updateDisplay();
//   }, 900);
// });

// stopBtn.addEventListener("click", () => {
//   clearInterval(timer);
//   timer = null;
// });

// resetBtn.addEventListener("click", () => {
//   clearInterval(timer);
//   timer = null;
//   sec = 0;
//   updateDisplay();
// });

// ====== ELEMENTS ======
const hourEl = document.getElementById("Hour");
const minEl = document.getElementById("Minute");
const secEl = document.getElementById("Second");

const startBtn = document.querySelector(".startbtn");
const stopBtn = document.querySelector(".stopbtn");
const resetBtn = document.querySelector(".resetbtn");

// ====== STATE ======
let isRunning = false;
let intervalId = null;
let startMs = 0; // Старт дарсан мөчийн timestamp
let carryMs = 0; // Түр зогсоосон хүртэлх хуримтлагдсан хугацаа (ms)

// Туслах функцууд
const pad2 = (n) => String(n).padStart(2, "0");

function render(ms) {
  const totalSec = Math.floor(ms / 1000);
  const h = Math.floor(totalSec / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = totalSec % 60;

  hourEl.textContent = pad2(h);
  minEl.textContent = pad2(m);
  secEl.textContent = pad2(s);
}

function tick() {
  const elapsed = Date.now() - startMs + carryMs; // яг хугацааг тооцно
  render(elapsed);
}

// ====== BUTTON HANDLERS ======
startBtn.addEventListener("click", () => {
  if (isRunning) return; // давхар асаахаас сэргийлэх
  isRunning = true;
  startMs = Date.now();
  intervalId = setInterval(tick, 200); // жаахан давтамжтайгаар тооцоолж, хэлтрэлийг багасгана
});

stopBtn.addEventListener("click", () => {
  if (!isRunning) return;
  isRunning = false;
  clearInterval(intervalId);
  carryMs += Date.now() - startMs; // явсан хугацааг хадгална
});

resetBtn.addEventListener("click", () => {
  isRunning = false;
  clearInterval(intervalId);
  startMs = 0;
  carryMs = 0;
  render(0); // 00:00:00 болгоно
});

// Анхны төлөв
render(0);
