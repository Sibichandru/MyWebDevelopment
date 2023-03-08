const squares = document.querySelectorAll('.square')

const moles = document.querySelector('.mole')

const timeLeft = document.querySelector('#time-left')

const score = document.querySelector('#score')

let result = 0
let currentTime=60
let timeId =null
let hitPosition
function randomSquares(){
    squares.forEach(square =>{
        square.classList.remove('mole')
    })
 
    let randomPosition =squares[Math.floor(Math.random()*squares.length)]
    // console.log(randomPosition)
    randomPosition.classList.add('mole')
    hitPosition = randomPosition.id
}

squares.forEach(square =>{
    square.addEventListener("mousedown",() =>{
        if(square.id == hitPosition)
        result++
        console.log(result)
        score.textContent = result
        hitPosition=null
    })
})

// randomSquares()
function moveMole(){
    timeId = setInterval(randomSquares, 1000)
}


moveMole()

function countdown(){
    currentTime--
    timeLeft.textContent = currentTime
    if(currentTime == 0){
        clearInterval(countDown)
        clearInterval(timeId)
        alert('TIME UP ! Final Score is ' + result )
    }
}
let countDown = setInterval(countdown,1000)
