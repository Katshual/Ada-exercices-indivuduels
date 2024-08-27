let givenNumber 
givenNumber= parseInt(prompt("Give me a number"))

function askNumber(){
    let givenNumber = parseInt(prompt("Give me a number"))
return givenNumber
}

function didIWin(number) {
    if (number<22) {
        alert("plus grand")
    }
    else if (number>22) {
        alert("plus petit")

    } 
    else if (number == 22) {
        alert("you win=")
    }
}

function gamePlay() {
    let givenNumber = askNumber()
    didIWin(givenNumber)
}
gamePlay


