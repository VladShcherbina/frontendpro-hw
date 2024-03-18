const categoriesDiv = document.querySelector('#categories')
const fruitsP = document.querySelector('#fruits')
const carsP = document.querySelector('#cars')
const computersP = document.querySelector('#computers')
const tovarUl = document.querySelector('#tovar')
const infoUl = document.querySelector('#info')
const listInfo = document.querySelector('#listInfo')
const listBnt = document.querySelector('#listBnt')
const myInputPib = document.querySelector('#myInputPib')
const myInputCity = document.querySelector('#myInputCity')
const myInputNovaPochta = document.querySelector('#myInputNovaPochta')
const myInputQuantity = document.querySelector('#myInputQuantity')
const myInputComment = document.querySelector('#myInputComment')
const infoBuy = document.querySelector('#infoBuy')
const checkBox = document.querySelector('#checkBox')
const radioButtons = document.querySelectorAll('input[name="payment"]');



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
                listInfo.style.visibility = 'visible'
                listBnt.addEventListener('click', infoBuyFn)
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
                listInfo.style.visibility = 'visible'
                listBnt.addEventListener('click', infoBuyFn)
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
                listInfo.style.visibility = 'visible'
                listBnt.addEventListener('click', infoBuyFn)
            })
        })
       })
})

})
    function infoBuyFn() {
                    const pib = document.createElement('p')
                    const city = document.createElement('p')
                    const novaPochta = document.createElement('p')
                    const quantity = document.createElement('p')
                    const comment = document.createElement('p')
                    const payment = document.createElement('p')
                    const okeyBtn = document.createElement('button')
                    
                    if(myInputPib.value === '' || myInputCity.value === '') {
                        alert("Заповніть обов'язкове поле")
                    } else{
                        // radioButtons.forEach((el) => {
                        //     el.addEventListener('change', () => {
                        //         if (el.checked) {
                        //             payment.textContent =`Оплата: ${el.value}`
                        //             infoBuy.appendChild(payment)
                        //         }
                        //     });
                        // })
                        // payment.textContent = `Cпосіб оплати: ${radioButtons.input.value}`
                        pib.textContent = `${myInputPib.value}, Дякуємо за замовлення`
                        city.textContent =`Місто: ${myInputCity.value}`
                        novaPochta.textContent =`Відділення нової почти номер: ${myInputNovaPochta.value}`
                        quantity.textContent =`Кількість товару: ${myInputQuantity.value} `
                        comment.textContent =`Наш менеджер зв'яжеться з вами найблищим часом`
                        okeyBtn.textContent = 'Все вірно'
                        infoBuy.appendChild(pib)
                        infoBuy.appendChild(city)
                        infoBuy.appendChild(novaPochta)
                        infoBuy.appendChild(quantity)
                        infoBuy.appendChild(payment)
                        infoBuy.appendChild(comment)
                        infoBuy.appendChild(okeyBtn)
                        
                       
                        
                        
                        okeyBtn.addEventListener('click', () => {
                            infoUl.innerHTML = ''
                            tovarUl.innerHTML = ''
                            document.body.innerHTML = 'Все чудово, очікуйте на дзвінок!'
                        })
                    }
                    
}