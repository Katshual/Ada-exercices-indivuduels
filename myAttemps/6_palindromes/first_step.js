/*Créer une fonction isValidDate qui prend en paramètre une date en string et determine si elle est valide.
 Pour qu'une date soit valide, il faut qu'elle existe et qu'elle soit au format dd/mm/aaaa.
*/

function isValidDate(date){
    let dateArray = date.split("/")
    let year= dateArray[2]
    //if (year >= 999 && year <=9999) {
     //   return year
    //}
    let month = dateArray[1]
    if (month >=1 && month <=12) {
        return month
    }

    return "is not a valide month"
}
console.log(isValidDate("13/12/1899"))
