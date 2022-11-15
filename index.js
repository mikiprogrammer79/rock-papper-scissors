//Create variables
let playerChoice = "rock"
let machineChoice = "paper"
let playerPoints = 0
let machinePoints = 0
let comment = document.getElementById("comment")
let isAlive = true 
let rockBtn = document.getElementById("rock-btn")
let paperBtn = document.getElementById("paper-btn")
let scissorsBtn = document.getElementById("scissors-btn")


//Rules of the game
function rules() {
    if (playerChoice == "rock" && machineChoice == "paper") {
        comment.textContent = "Machine win! Paper cover the rock"
        machinePoints += 1
    }else if (playerChoice == "rock" && machineChoice == "scissors") {
        comment.textContent = "You win! Rock smashes scissors"
        playerPoints += 1
    }else if (playerChoice == "rock" && machineChoice == "rock") {
        comment.textContent = "Try again!"
    }else if (playerChoice == "paper" && machineChoice == "rock") {
        comment.textContent = "You win! Paper cover the rock"
        playerPoints += 1
    }else if (playerChoice == "paper" && machineChoice == "paper") {
        comment.textContent = "Try again!"
    }else if (playerChoice == "paper" && machineChoice == "scissors") {
        comment.textContent = "Machine win! Scissors cut paper"
        machinePoints += 1
    }else if (playerChoice == "scissors" && machineChoice == "rock") {
        comment.textContent = "Machine win! Rock smashes scissors"
        machinePoints += 1
    }else if (playerChoice == "scissors" && machineChoice == "paper") {
        comment.textContent = "You win! Scissors cut paper"
        playerPoints += 1
    }else if (playerChoice == "scissors" && machineChoice == "scissors") {
        comment.textContent = "Try again!"
    }
}

//Invoking JS functions on clicked buttons:
//Rock button
rockBtn.addEventListener("click", function() {
    playerChoice = "rock"
    rules();
})

//Paper button
paperBtn.addEventListener("click", function() {
    playerChoice = "paper"
    rules();
})

//Scissors button
scissorsBtn.addEventListener("click", function () {
    playerChoice = "scissors"
    rules();
})