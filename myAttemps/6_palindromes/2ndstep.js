let date = "28/02/2024"

//const isValidDate = (date) => {
function validDate(date){
    let dateArray = date.split ("/");
     let day = parseInt(dateArray[0]);
     let month = parseInt(dateArray[1]);
     let  year = parseInt(dateArray[2]);
     if (isValidYear(year) == true && isValidMonth(month) == true && isValidDay(month,day)){
      return true
  } else {
      return false
  }
   }
   console.log(validDate(date))
  

function isValidYear(year) {
      if (year> 999 && year <= 9999){
      return true 
   } return false 

  }
  //console.log(isValidYear(year))



function isValidMonth(month) {

    if (month> 0 && month <= 12){
      return true 

   } return false 

  }
  //console.log(isValidMonth(month))

function isValidDay(month, day) {
  if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
    if (day > 0 && day <= 31) {
      return true
    } 
  }else if (month == 4 || month == 6 || month == 9 || month == 11) {
      if (day > 0 && day <= 30){
        return true
    } 
  }else if (month == 2) {
      if (day > 0 && day <= 28) {
        return true
      } return false

    }
  }
//console.log(isValidDay(month,day))



 //étape 2
 function isPalindrome(date) {
  if (validDate(date) == true) {
    let dateArray = date.split("/")
    let yearReversed = dateArray[2].split("").reverse().join("")
    let ddMMJoined = dateArray.slice(0,2).join("")
    if (ddMMJoined == yearReversed) {
    return true
    }
  }
 return "date is not valid"
}

//étape 3
