let givenNumber=Number(prompt("Hello, there! Give me a number: "));
function didIWin(givenNumber) {
    console.log(givenNumber)
    if (givenNumber<22) {
        alert ("Try a bigger one");
        return "Go on!"
        
    } else if (givenNumber>22){
        alert ("Try a smaller number");
        return "Don't give up!"

    } else {
        alert ("Congrats! you've found the correct number")
        return "You're a winner!"
    }
    
}

document.getElementById("solution").innerHTML=didIWin(givenNumber)