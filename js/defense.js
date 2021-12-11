//counter variable
const counter = document.getElementById('defenseCounter')

//Defense variable
const silcoonBtn = document.getElementById('silcoon')
const cascoonBtn = document.getElementById('cascoon')
const gravelerBtn = document.getElementById('graveler')

//Reset variable
const resetBtn = document.getElementById('reset')

//Pokerus variables
const pokerusOnBtn = document.getElementById('pokerusOn')
const pokerusOffBtn = document.getElementById('pokerusOff')

let counterValue = 0
let pokerusActive = false

//Pokerus button functions
pokerusOffBtn.addEventListener('click', () => {
  pokerusActive = false
  pokerusOnBtn.style.background = ''
})
pokerusOnBtn.addEventListener('click', () => {
  pokerusActive = true
  pokerusOnBtn.style.backgroundColor = '#FF0000'
})

//Defense button functions
silcoonBtn.addEventListener('click', () => {
  if (pokerusActive == false) {
    counterValue += 2
    counter.innerHTML = counterValue
  }
  if (pokerusActive == true) {
    counterValue += 4
    counter.innerHTML = counterValue
  }
})
cascoonBtn.addEventListener('click', () => {
  if (pokerusActive == false) {
    counterValue += 2
    counter.innerHTML = counterValue
  }
  if (pokerusActive == true) {
    counterValue += 4
    counter.innerHTML = counterValue
  }
})
gravelerBtn.addEventListener('click', () => {
  if (pokerusActive == false) {
    counterValue += 2
    counter.innerHTML = counterValue
  }
  if (pokerusActive == true) {
    counterValue += 4
    counter.innerHTML = counterValue
  }
})

//Reset button functions
resetBtn.addEventListener('click', () => {
  console.log('reset pressed')
  counterValue = 0
  counter.innerHTML = counterValue
})
