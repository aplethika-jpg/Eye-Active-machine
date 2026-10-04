const status = document.getElementById("status");

const messages = [
  "EYE ACTIVE",
  "BLINK DETECTED",
  "MONITORING EYE ACTIVITY"
];

let index = 0;

setInterval(() => {
  index = (index + 1) % messages.length;
  status.textContent = messages[index];
}, 1800);
