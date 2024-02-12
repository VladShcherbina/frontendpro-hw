const firstElem = document.querySelector('.block')
const newElem = document.createElement('div')
newElem.textContent = 'InputFocus'

const input = document.querySelector('#myInput')

input.addEventListener('focus', () => {
    firstElem.appendChild(newElem)
})

input.addEventListener('blur', () => {
    firstElem.appendChild(newElem).remove()
})



