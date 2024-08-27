// Étape 1

// Dans un fichier JavaScript, commencez par écrire une fonction getLatinCharacterList. 
// Cette fonction va prendre en paramètre du texte et retourner un tableau contenant 
// chaque caractère.

// Tester la fonction en lui donnant une chaine de caractères “Hello, world”, 
// et assurez-vous qu’elle renvoie bien 
// ["H", "e", "l", "l", "o", ",", " ", "w", "o", "r", "l", "d"]


function getLatinCharacterList(text){
    return text.split("")

}
console.log(getLatinCharacterList("Hello World"))

// Étape 2

// À votre fichier, ajouter le dictionnaire en annexe 1. Il vous permettra d’établir 
// une table de correspondance entre les caractères alphabets latin et l’alphabet morse.

// Créer une fonction translateLatinCharacter qui prend un paramètre un caractère 
// et renvoie sa correspondance en morse.

// Tester la fonction en lui donnant en paramètre “A”, et assurez-vous 
// qu’elle renvoie bien .-.

const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
}
const translateLatinCharacter=()=> {
    ;
        return latinToMorse;
 	  }


console.log(latinToMorse['Z'])
translateLatinCharacter
