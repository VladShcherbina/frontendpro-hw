//Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).

// let str = ''
// for(let i = 20; i <= 30; i = i + 0.5) {
//    str += i + ' '
// }
// console.log(str)



//Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.

// for(let i = 10; i <= 100; i = i + 10){
//     let x = 27
//     console.log(`${i} * ${x} = ${i * x}`)
// }




//Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

// const myFn = function(n) {
//     for(let i = 1; i <= 100; i++){
//         if(i*i < n) {
//             console.log(i)
//         } else {}
//     }
// }
// myFn(50)




//Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

const myFn = function(x) {
    if(x % x === 0 && x % 1 === x) {
        console.log('Це просте число')
    } else {
        console.log('Це не просте число')
    }
}

myFn(10)


// function isPrime(number) {
//     if (number <= 1) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// // Пример использования
// var givenNumber = 25; // Замените на ваше число для проверки
// var result = isPrime(givenNumber);

// if (result) {
//     console.log(givenNumber + " - простое число.");
// } else {
//     console.log(givenNumber + " - не является простым числом.");
// }







//Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
// function myFn(num) {
//     while (num % 3 == 0) {
//       num /= 3;
//     }
//     console.log(num == 1);
//   }
  
// myFn(3)
