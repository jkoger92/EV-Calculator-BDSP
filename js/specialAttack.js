//counter variable
const counter = document.getElementById('specialAttackCounter')

//Special Attack variables
const roseliaBtn = document.getElementById('roselia')
const budewBtn = document.getElementById('budew')
const golduckBtn = document.getElementById('golduck')

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

//Special attack button functions
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
golduckBtn.addEventListener('click', () => {
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
