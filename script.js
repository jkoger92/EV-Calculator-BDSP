const counter = document.getElementById('counter')
const roseliaBtn = document.getElementById('roselia')
const budewBtn = document.getElementById('budew')
const resetBtn = document.getElementById('reset')

let counterValue = 0
roseliaBtn.addEventListener('click', function (event) {
  counterValue += 2
  counter.innerHTML = counterValue
})
budewBtn.addEventListener('click', function (event) {
  counterValue += 1
  counter.innerHTML = counterValue
})
resetBtn.addEventListener('click', function (event) {
  counterValue = 0
  counter.innerHTML = counterValue
})
