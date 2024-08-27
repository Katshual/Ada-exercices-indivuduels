/*Étape 1

Faire une fonction qui prend en paramètre le nombre d'allumettes 
à enlever du reste.Pour rappel, une nom de fonction doit décrire 
clairement ce que fait celle-ci.*/


function pickMatches(number) {
 if (number>0 && number<7){
    return(`Vous enlevez ${number} alumettes`)
 } else {
    console.log("Le nombre d'allumettes que vous voulez prendre n'est pas autorisé")
 }
    
}  

pickMatches(2)

/*Étape 2

Demander a l'utilisateur combien d'allumettes il souhaite retirer 
tant qu’il y a des allumettes dans le tas. Pour rappel, on a 
50 allumettes au départ.*/

