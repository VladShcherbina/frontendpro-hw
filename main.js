let firstElem = document.querySelector('.blok')
let newElem = document.createElement('div')
newElem.textContent = 'InputFocus'

document.querySelector('#myInput').addEventListener('focus', () => {
    firstElem.appendChild(newElem)
})



document.querySelector('#myInput').addEventListener('blur', () => {
    firstElem.appendChild(newElem).remove()
})



