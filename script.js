function updateUTCTime() {
  const timeElement = document.getElementById("current-time");
  const now = new Date();
  timeElement.textContent = now.toUTCString().split(" ")[4];
}

updateUTCTime();
setInterval(updateUTCTime, 1000);
