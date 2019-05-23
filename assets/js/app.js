wordToGuess = "mail"
const wordToGuessArray = wordToGuess.split("")
console.log(wordToGuessArray)
// get the number of characters
let lengthOfWordToGuess = wordToGuess.length
console.log(lengthOfWordToGuess)


let save = []
document.onkeyup = (event) => {
    let keyThatWasPressed = event.key;
    console.log(event.key)

    const result = wordToGuessArray.indexOf(keyThatWasPressed)
    console.log (result)

    // let save = []
if (result > -1) {
    // right guess
    console.log ("right")
    save [result] = keyThatWasPressed
    console.log ("right", save)  

    let notComplete = false
    wordToGuessArray.forEach((value, index) => {
        if (save[index]!==value) {
            notComplete = true
        }
    })
    console.log(notComplete)
    if (!notComplete) {
        console.log("you win!")
    }
}
else {
    //wrong
    console.log ("wrong")
}
}
const show_win = () => {
    document.getElementById("show_win").innerText = "Congrats!"
}