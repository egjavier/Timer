const p = document.querySelector('p')
const start = document.querySelector('#start')
const reset = document.querySelector('#reset')
const sec = document.querySelector('#sec')
const min = document.querySelector('#min')
const hr = document.querySelector('#hr')


let interval
let seconds
let minutes
let hours

    start.addEventListener('click', () => {
      start.style.backgroundColor = '#00235B50'
      start.style.boxShadow = 'none'
      start.disabled = true

      seconds = 0
      minutes = 0
      hours = 0

      interval = setInterval(() => {
        seconds += 1
        condition(seconds, sec)

        if (seconds === 59) {
          setTimeout (() => {
            minutes += 1;
            condition(minutes, min)
          }, 1000)
        }
  
        if (minutes === 59) {
          setTimeout (() => {
            hours += 1;
            condition(hours, hr)
          }, 1000)
        }
      }, 1000)
    })

    reset.addEventListener('click', () => {
      start.style.backgroundColor = '#00235B'
      reset.style.color = '#00235B50'
      setTimeout(() => {reset.style.color = '#00235B'}, 50)
      
      start.disabled = false
      
      clearInterval(interval)
        resetTimer (seconds, sec)
        resetTimer (minutes, min)
        resetTimer (hours, hr)
        console.log(hours, seconds, minutes)
    })

function condition(time, innerText) {
  if (time < 10) {
    innerText.textContent = `0${time}`
  }
  else if (time > 59) {
    seconds = 0
    innerText.textContent = `00`
  }
  else {
    innerText.textContent = time
  }
}

function resetTimer (time, text) {
  time = 0;
  text.textContent = `00`
}

