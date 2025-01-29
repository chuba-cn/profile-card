function updateUTCTime() {
  const timeElement = document.getElementById("current-time");
  const now = new Date();
  timeElement.textContent = now.toISOString();
}

updateUTCTime();
setInterval(updateUTCTime, 1000);
