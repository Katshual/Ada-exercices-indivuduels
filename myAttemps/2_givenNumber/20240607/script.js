function askNumber() {
    let givenNumber=prompt("Hi there! Give-me a number!")
    didIWin(Number(givenNumber))
}
function  didIWin(givenNumber) {
    const targerNumber=22
    if (givenNumber===22){
        alert ("Congrats, it's the good number!!!")
        
    } else if (givenNumber<22) {
        alert ("Go on, it's biger")
        
    } else if(givenNumber>22){
        alert ("Hold your horns, it's smaller!")
    }
    
}
askNumber()
didIWin()