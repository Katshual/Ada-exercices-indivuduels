// Live-code
// On doit trouver si une string a que des char. unique


// let string = "What if you cannot use additional";
let string = "aze rty Y";

function hasUniqueChar(string) {

    // suppression des espaces
    string = string.replaceAll(" ", "");

    // mutation en array pour itérer
    let charArray = string.split("");

    // Futur stockage des chars. non unique et le reste
    let nonUniqueChars = [];
    let others = [];

    for (let i = 0; i < charArray.length; i++) {

        if (!others.includes(charArray[i])) {
            others.push(charArray[i])
        } else {
            nonUniqueChars.push(charArray[i])
        }
    }

    if (nonUniqueChars.length != 0) {

        // tri pour les uniques
        let cleanArray = nonUniqueChars
            .filter((el, i) => nonUniqueChars.indexOf(el) === i);


        console.log("Il y a des doublons", cleanArray)
    } else {
        console.log("Pas de doublon")
    }
}
hasUniqueChar(string);