function updateTime() {
  document.getElementById('current-time').textContent =
    new Date().toLocaleTimeString()
}
setInterval(updateTime, 1000)

function changeColor(color) {
  document.body.style.backgroundColor = color
}
