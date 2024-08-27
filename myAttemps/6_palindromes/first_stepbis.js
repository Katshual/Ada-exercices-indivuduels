// vérifier qu'une date est valide
let date="30/04/2024"
let dateArray=(date.split("/"))
console.log(dateArray)
let day=parseInt(dateArray[0])
let month= parseInt(dateArray[1])
let year= parseInt(dateArray[2])

console.log(typeof(day))

const isValidYear=(year)=> {
    if (year>999 && year <=9999) {
        return true
        } return false 
    }


console.log(isValidYear(1000))

const isValidMonth=(month)=>{
    if (month >0 && month<=12) {
        return true
    } return false
}
console.log(isValidMonth(3))

const isValidDay=(month, day)=>{
    if (month== 1 || month==3|| month==5|| month==7|| month==8|| month==10|| month==12){
      if (day>0 && day <=31){
        return true
      } 
    } else if (month==4 || month==6 || month==9 || month==11) {
        if (day>0 && day<=30) {
                return true
            } 
        } 
        else if (day>0 && day<=28) {
        return true
      } return false
    }


console.log(isValidDay(2,2))