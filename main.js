// let string1 = prompt('Введіть першу строку')
// let string2 = prompt('Введіть другу строку')
// let string3 = prompt('Введіть третю строку')

// alert(`${string1 + " " + string2 + " " + string3}`)


// function splitAndReverseNumber(number) {
//     if (number < 10000 || number > 99999) {
//         return console.log("Введене число не є п'ятизначним."); 
//     }
//     let digits = number.toString().split('').join(' ');
//     console.log(digits);
// }
// splitAndReverseNumber(12345);

// let number = 43254;

// let myFn = function(number1) {
//     let numberLength = number1.toString().length;
//     let strNumber = number1.toString();
//     let result = '';

//     for(let i = 0; i < numberLength; i++) {
//         result += `${Math.floor(strNumber / Math.pow(10, numberLength - i - 1))} `
//         strNumber = strNumber.slice(1, strNumber.length);
//     }
    
//     return result.trim();    
// }
// console.log(myFn(number))
