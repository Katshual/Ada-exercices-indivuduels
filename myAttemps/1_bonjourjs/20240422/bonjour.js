let askName=prompt("Bonjour, quel est ton nom?", "");
let userName=`Bonjour ${askName}`;
console.log(userName)
document.body.innerHTML +="<h2>"+userName+"</h2>";