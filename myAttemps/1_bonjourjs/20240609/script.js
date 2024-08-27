function askName() {
    let userName=prompt("Hello, what's your name?")
    let userAnswer=`Welcome ${userName}!`
    document.body.innerHTML+=`<h2>${userAnswer}</h2>`
}
function askBirthYear() {
    let userBirthYear=prompt(`What's your birth year?`)
    //let userBirthMonth=promt(`What is your birth month (from 1 to 12)?`)

    let userAge=new Date().getFullYear()-userBirthYear
    let userAgeAnswer=`You are ${userAge} years old!`
    document.body.innerHTML+= `<h3>${userAgeAnswer}</h3>`    
}
askName()
askBirthYear()

