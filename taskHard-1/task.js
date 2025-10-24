const stage = document.getElementById("stage");
const startB = document.getElementById("start");
const resetB = document.getElementById("reset");
const lastEl = document.getElementById("last");

let state = "idle"; // 'idle' | 'waiting' | 'ready'
let startTime = 0;
let timerId = null;

function setStage(newState, text) {
  state = newState;
  stage.className = "stage " + newState;
  if (text !== undefined) stage.textContent = text;
}

function startTrial() {
  clearTimeout(timerId);
  setStage("waiting", "Wait For Green");
  startB.disabled = true;

  const delay = 800 + Math.random() * 2200;
  timerId = setTimeout(() => {
    startTime = Date.now();
    setStage("ready", "CLICK!");
  }, delay);
}

function falseStart() {
  clearTimeout(timerId);
  setStage("idle", "Too early 😅");
  startB.disabled = false;
}

function hit() {
  if (state !== "ready" || !startTime) return;
  const ms = Date.now() - startTime;
  lastEl.textContent = ms;
  setStage("idle", ms + " ms");
  startB.disabled = false;
}

function handlePress() {
  if (state === "waiting") return falseStart();
  if (state === "ready") return hit();
}

startB.addEventListener("click", () => {
  if (state !== "waiting") startTrial();
});

resetB.addEventListener("click", () => {
  clearTimeout(timerId);
  lastEl.textContent = "–";
  setStage("idle", "Press Start");
  startB.disabled = false;
});

stage.addEventListener("click", handlePress);

setStage("idle", "Press Start");
