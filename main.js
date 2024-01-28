const array = [1, 2, 3, 4, 5, 6, 7];
console.log(array);
const removeElement = function(arr, element){
   let index = arr.indexOf(element)
   arr.splice(index, 1)
}
removeElement(array, 5)
console.log(array);