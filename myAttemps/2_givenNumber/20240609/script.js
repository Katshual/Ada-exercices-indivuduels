
    
function askNumber() {
    let givenNumber=prompt('Hello there! Give me a number')
    return Number(givenNumber);
    }

function didIWin(givenNumber) {
    const targetNumber=22;
    if (givenNumber===targetNumber) {
        alert ('true!');
    
    } else   {
        alert(`false!`);
    }
    
}


function gamePlay(){
    let givenNumber;
    didIWin(givenNumber);
    while (givenNumber!==22) {
        let givenNumber=askNumber();
        didIWin(givenNumber);
    }
    
}
gamePlay()