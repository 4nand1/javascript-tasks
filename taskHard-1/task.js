var stage = document.getElementById("stage");
var startB = document.getElementById("start");
var resetB = document.getElementById("reset");
var msg = document.getElementById("msg");
var lastEl = document.getElementById("last");

var state = "idle";
var startTime = 0;
var timerId = null;

function setStage(newState, text) {
  state = newState;
  stage.className = "stage " + newState;
  if (text !== undefined) {
    stage.textContent = text;
  }
}

function startTrial() {
  clearTimeout(timerId);
  setStage("wait", "Wait For Green");
  msg.textContent = "Click when the screen turns GREEN.";

  var delay = 800 + Math.random() * 2200;

  timerId = setTimeout(function () {
    startTime = Date.now();
    setStage("ready", "CLICK!");
  }, delay);
}

function falseStart() {
  clearTimeout(timerId);
  setStage("idle", "Too early 😅");
  msg.textContent = "Press Start again.";
}

function hit() {
  var ms = Date.now() - startTime;
  lastEl.textContent = ms;
  setStage("idle", ms + " ms");
  msg.textContent = "Press Start to try again.";
}

function handlePress() {
  if (state === "waiting") {
    falseStart();
  } else if (state === "ready") {
    hit();
  }
}

startB.addEventListener("click", function () {
  if (state !== "waiting") {
    startTrial();
  }
});

resetB.addEventListener("click", function () {
  clearTimeout(timerId);
  lastEl.textContent = "–";
  setStage("idle", "Press Start");
  msg.textContent = "Press Start, wait, then click when GREEN.";
});

stage.addEventListener("click", handlePress);

stage.addEventListener("keydown", function (e) {
  if (e.code === "Space" || e.code === "Enter") {
    handlePress();
  }
});
stage.tabIndex = 0;

setStage("idle", "Press Start");
stage.focus();
