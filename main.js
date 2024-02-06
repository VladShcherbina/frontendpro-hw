const counter = function() {
    let num = 0;
    
    return function(x) {
        num += x;
        return num;
    }
}
const sum = counter();

console.log(sum(3))
console.log(sum(5))
console.log(sum(20))

