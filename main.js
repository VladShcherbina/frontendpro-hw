// Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

// const array = [2, 4, 'text', 6, 'text', 'text', 10];

// const myFn = function() {
//     let sum = 0
//     array.forEach(function(el){
//         if(typeof el === 'number') {
//             sum+=el
//         }
//     })
//     return sum
// }
// console.log(myFn())


// Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

// const x = +prompt('Введіть перше число')
// const znak = prompt('Введіть математичну операцію')
// const y = +prompt('Введіть друге число')


// function doMath(x, znak, y) {
//     if(znak === '+') {
//         return (x+y)
//     }
//     else if(znak === '-') {
//         return (x-y)
//     }
//     else if(znak === '*') {
//         return (x*y)
//     }
//     else if(znak === '/') {
//         return (x/y)
//     } else {
//         return ('Щось не так!')
//     }
// }

// console.log(doMath(x, znak, y))

//Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.

// const lengthArr1 = prompt('Довжина зовнішнього масиву')
// const lengthArr2 = prompt('Довжина внутрішнього масиву')
// const infoArr2 = prompt('Вміст внутрішнього масиву')

// const innerArr = []
// const array = []
// for(i=0; i < lengthArr2; i++) {
//     innerArr.push(infoArr2)
// }

// for(i = 0; i < lengthArr1; i++){
//     array.push(innerArr)
// }
// console.log(array)


//Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

const myFn = function(string , remove) {
    return string.split('').filter((el) => {
        return !remove.includes(el)
    }).join('')
}
console.log(myFn('Hello world' , ['l' , 'o']))

