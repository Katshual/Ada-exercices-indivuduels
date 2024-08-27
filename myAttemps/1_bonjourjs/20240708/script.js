function askName(){
    let questionName= prompt(`Hello, what's your name, bro?`);
    let answerName=`Hi, ${ questionName}!`;
    document.body.innerHTML+=`<h2> ${answerName} </h2>`;
}
function askbirthYear() {
    let questionBirthYear=parseInt(prompt(`What's your birth year?`));
let currentYear=new Date().getFullYear()
let answerBirthYear=`Wow! You're ${ currentYear- questionBirthYear}`
document.body.innerHTML+=`<h3>${answerBirthYear}</h3>` 
}
askName()
askbirthYear()


