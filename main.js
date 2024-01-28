// //Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] Знайти суму та кількість позитивних елементів.
// let myArr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
// console.log(myArr)

// let count = 0;
// let sum = 0;
// myArr.forEach(function(el){
//     if(el > 0) {
//         count++
//         sum +=el
//     }
// })
// console.log(count)
// console.log(sum)

//Знайти мінімальний елемент масиву та його порядковий номер.
// let myArr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
// console.log(myArr)

// const minElement = Math.min(...myArr)
// console.log(minElement)
// console.log(myArr.indexOf(-63))

//Знайти максимальний елемент масиву та його порядковий номер.
// let myArr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
// console.log(myArr)

// const minElement = Math.max(...myArr)
// console.log(minElement)
// console.log(myArr.indexOf(76))


//Визначити кількість негативних елементів.
// let myArr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
// console.log(myArr)

// let count = 0;
// myArr.forEach(function(el){
//     if(el < 0) {
//         count++
//     }
// })
// console.log(count)

//Знайти кількість непарних позитивних елементів.
//Знайти суму непарних позитивних елементів.

// let myArr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
// console.log(myArr)
// let sum = 0;
// let count = 0;
// myArr.forEach(function(el){
//     if(el % 2 !== 0 && el > 0){
//      count++
//      sum =+ el
//     }
// })
// console.log(count)
// console.log(sum)

//Знайти кількість парних позитивних елементів.
//Знайти суму парних позитивних елементів.
// let myArr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
// console.log(myArr)

// let count = 0;
// let sum = 0;
// myArr.forEach(function(el){
//     if(el % 2 === 0 && el > 0){
//      count++
//      sum += el
//     }
// })
// console.log(count)
// console.log(sum)


//Знайти добуток позитивних елементів.
// let myArr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
// console.log(myArr)
// let mult = 1;
// let count = 0;
// myArr.forEach(function(el){
//     if(el > 0){
//      count++
//      mult *= el
//     }
// })
// console.log(count)
// console.log(mult)

//Знайти найбільший серед елементів масиву, ост альні обнулити

let myArr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
console.log(myArr)

const maxElement = Math.max(...myArr)
console.log(maxElement)
console.log(myArr.indexOf(76))
let index = myArr.indexOf(76)

myArr.forEach(function(el, i, arr){
    if(index !== i){
        arr[i] = 0
    }
})

console.log(myArr)

