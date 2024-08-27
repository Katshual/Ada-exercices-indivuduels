/*Etape 1
Conçu pour diminuer la barrière d’entrée
Créer une fonction decoupeChaine qui prend en paramètre une string 
et renvoie la même string dans laquelle les caractères successifs 
non identiques sont séparés par un espace.
Ex :
decoupeChaine("ab")     // renvoie "a b"
decoupeChaine("aabbca") // renvoie "aa bb c a"`
*/
function decoupeChaine(string){
 let chaineDecoupee=string.split("");
 return chaineDecoupee
}
console.log(decoupeChaine("mamma"))
console.log('Hello world')
/*Etape 2
Créer une fonction decritChaine, inspirée de decoupeChaine, qui prend 
en paramètre une string et renvoie une string qui décrit, 
tel qu'expliqué ci-dessus, les caractères qui constituent la chaîne 
en paramètre.
Ex:
decritChaine("ab")      // renvoie "1a1b"
decritChaine("aabbca")  // renvoie "2a2b1c1a"
*/

/*Etape 3
Créer une fonction suiteConway qui donne les n premiers termes 
de la suite qui commence par le caractère carac. n et carac 
sont passés en paramètres de la fonction.
Ex:
suiteConway('a', 3)  
a
1a
111a
suiteConway('1', 3)  
1
11
21
*/

/*Etape 4
Afficher la suite de Conway générée dans un navigateur. 
Utiliser un texte centré pour l'afficher sous forme de pyramide.*/