const categoriesDiv = document.querySelector('#categories')
const fruitsP = document.querySelector('#fruits')
const carsP = document.querySelector('#cars')
const computersP = document.querySelector('#computers')
const tovarUl = document.querySelector('#tovar')
const infoUl = document.querySelector('#info')



const fruits = [{
    name: 'Apple',
    info: 'Green'
}, {
    name: 'Banana',
    info: 'Yellow'
}, {
    name: 'Orange',
    info: 'Orange'
}]


const cars = [{
    name: 'BMW',
    info: 'Black'
}, {
    name: 'Audi',
    info: 'Grey'
}, {
    name: 'Toyota',
    info: 'Yellow'
}]


const computers = [{
    name: 'Mac',
    info: 'Grey'
}, {
    name: 'Samsung',
    info: 'Black'
}, {
    name: 'Lenovo',
    info: 'Grey'
}]




fruitsP.addEventListener('click', () => {
    tovarUl.innerHTML = ''
    fruits.forEach((el) => {
       const liItem = document.createElement('li')
       liItem.textContent = el.name
       tovarUl.appendChild(liItem)
       liItem.addEventListener('click',(event) => {
        const carrentFruit = event.target.textContent
        const newFruits = fruits.filter((elem) => {
           return elem.name === carrentFruit
        })
        newFruits.forEach((el) => {
            infoUl.innerHTML = ''
            const liItem2 = document.createElement('li')
            liItem2.textContent = el.info
            infoUl.appendChild(liItem2)
            const buyBtn = document.createElement('button')
            buyBtn.textContent = 'Купити'
            infoUl.appendChild(buyBtn)
            buyBtn.addEventListener('click', () => {
                alert('Ви купили товар')
                infoUl.innerHTML = ''
                tovarUl.innerHTML = ''
            })
        })
       })
})
   
})
carsP.addEventListener('click', () => {
    tovarUl.innerHTML = ''
    cars.forEach((el) => {
       const liItem = document.createElement('li')
       liItem.textContent = el.name
       tovarUl.appendChild(liItem)
       liItem.addEventListener('click',(event) => {
        const carrentFruit = event.target.textContent
        const newCars = cars.filter((elem) => {
           return elem.name === carrentFruit
        })
        newCars.forEach((el) => {
            infoUl.innerHTML = ''
            const liItem2 = document.createElement('li')
            liItem2.textContent = el.info
            infoUl.appendChild(liItem2)
            const buyBtn = document.createElement('button')
            buyBtn.textContent = 'Купити'
            infoUl.appendChild(buyBtn)
            buyBtn.addEventListener('click', () => {
                alert('Ви купили товар')
                infoUl.innerHTML = ''
                tovarUl.innerHTML = ''
            })
        })
       })
})

})

computersP.addEventListener('click', () => {
    tovarUl.innerHTML = ''
    computers.forEach((el) => {
       const liItem = document.createElement('li')
       liItem.textContent = el.name
       tovarUl.appendChild(liItem)
       liItem.addEventListener('click',(event) => {
        const carrentFruit = event.target.textContent
        const newComputers = computers.filter((elem) => {
           return elem.name === carrentFruit
        })
        newComputers.forEach((el) => {
            infoUl.innerHTML = ''
            const liItem2 = document.createElement('li')
            liItem2.textContent = el.info
            infoUl.appendChild(liItem2)
            const buyBtn = document.createElement('button')
            buyBtn.textContent = 'Купити'
            infoUl.appendChild(buyBtn)
            buyBtn.addEventListener('click', () => {
                alert('Ви купили товар')
                infoUl.innerHTML = ''
                tovarUl.innerHTML = ''
            })
        })
       })
})

})




