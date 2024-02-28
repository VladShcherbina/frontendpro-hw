let heightArr = +prompt('Задайте довжину масиву')

if(heightArr > 0) {
    const newArr = []

for(let i = 0; i < heightArr; i++) {
    let elemArr = +prompt("Задайте наповнення масиву")
    newArr.push(elemArr)
    
    }
console.log(newArr)

function compareNumbers(a, b) {
    return a - b;
    }
newArr.sort(compareNumbers)
console.log(newArr)

newArr.splice(1 , 3)
console.log(newArr)
}






