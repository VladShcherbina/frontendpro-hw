let sign = prompt('Введіть арифметичну дію')
let number1 = +prompt('Введіть перше число')
let number2 = +prompt('Введіть друге число')

let result;

switch(sign) {
    case '+':
        result = number1 + number2
        break
    case '-':
        result = number1 - number2
        break
    case '*':
        result = number1 * number2
        break
    case '/':
        if(number2 === 0) {
        result = 'Помилка : ділення на нуль'
        } else{
            result = number1 / number2
        }
        break
    default:
        result = 'Ви ввели не арифметичну дію!'
}

if(typeof result === 'number') {
    alert(`${number1} ${sign} ${number2} = ${result} `)
} else {
    alert(result)
}