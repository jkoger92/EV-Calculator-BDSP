const counter = document.getElementById('counter')
const roseliaBtn = document.getElementById('roselia')
const budewBtn = document.getElementById('budew')
const resetBtn = document.getElementById('reset')
const pokerusOnBtn = document.getElementById('pokerusOn')
const pokerusOffBtn = document.getElementById('pokerusOff')

let counterValue = 0
let pokerusActive = false

pokerusOffBtn.addEventListener('click', () => {
  pokerusActive = false
  pokerusOnBtn.style.background = ''
})
pokerusOnBtn.addEventListener('click', () => {
  pokerusActive = true
  pokerusOnBtn.style.backgroundColor = '#FF0000'
})
roseliaBtn.addEventListener('click', () => {
  if (pokerusActive == false) {
    counterValue += 2
    counter.innerHTML = counterValue
  }
  if (pokerusActive == true) {
    counterValue += 4
    counter.innerHTML = counterValue
  }
})
budewBtn.addEventListener('click', () => {
  if (pokerusActive == false) {
    counterValue += 1
    counter.innerHTML = counterValue
  }
  if (pokerusActive == true) {
    counterValue += 2
    counter.innerHTML = counterValue
  }
})
resetBtn.addEventListener('click', () => {
  counterValue = 0
  counter.innerHTML = counterValue
})
