let numOrStr = prompt('input number or string');
console.log(numOrStr)



switch(true) {
    case numOrStr === null:
        console.log('ви скасували')
        break
    case numOrStr === '':
        console.log('Empty String')
        break
    case isNaN(Number(numOrStr)):
        console.log('number is Ba_NaN')
        break
    default:
        console.log('You entered: ' + numOrStr)
        break
}