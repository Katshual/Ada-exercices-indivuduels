function askName() {
    const userName=prompt("Bonjour, quel est ton nom?")
    let userAnswer=`Bonjour, ${userName}!`
    document.body.innerHTML +=`<h2> ${userAnswer}!</h2>`
}

function askBirthYear () {
    const userBirthYear=prompt("Quelle est ton année de naissance?")
    let currentYear = new Date().getFullYear(); // Utilisation correcte de Date
    let userAge = currentYear - userBirthYear;
    document.body.innerHTML +=`<h3>Tu as ${userAge} ans!</h3>`    
}
askName()
askBirthYear()