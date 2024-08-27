function getLatinCharacterList(text) {
    console.log (text.split(""));
    return text.toUpperCase().split("");
    
}
console.log(getLatinCharacterList("Hello World"))
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
console.log (latinToMorse.A)
const translateLatinCharacter=getLatinCharacterList().map(function(element){
    console.log(latinToMorse[element])
    return latinToMorse[element];
})
console.log(translateLatinCharacter(A))

