const radioButtons = document.querySelectorAll('input[name="sport"]');
const ageInput = document.querySelector('#age')
const placeInput = document.querySelector('#place')
const listBtn = document.querySelector('#listBnt')
const render = document.querySelector('#render')


listBtn.addEventListener('click' , () => {
    render.innerHTML = ''
    renderInfo()
})



function renderInfo() {
    const age = document.createElement('p')
    const place = document.createElement('p')
    const sport = document.createElement('p')
    
    place.textContent = placeInput.value
    age.textContent = `Твій вік: ${ageInput.value}`
    
    if(ageInput.value === '') {
        age.textContent = 'Шкода, що ти не вказав свій вік'
    } else {
        age.textContent = `Твій вік: ${ageInput.value}`
    }


    if(placeInput.value === '') {
        place.textContent = 'Шкода, що ти не вказав місто'
    }
     else {
        if(placeInput.value.toLowerCase() === 'київ') {
            place.textContent = 'Ти живеш в столиці України'
        } else if(placeInput.value.toLowerCase() === 'вашингтон') {
            place.textContent = 'Ти живеш в столиці Америки'
        } else if(placeInput.value.toLowerCase() === 'лондон') {
            place.textContent = 'Ти живеш в столиці Англії'
        } else {
            place.textContent = `Ти живеш у місті ${placeInput.value}`
        }
    }

    let sportType

        radioButtons.forEach(el => {
            if (el.checked && el.value === 'Бокс') {
                sportType = 'Круто! Хочеш бути, яу Усік?'
             } 
             if(el.checked && el.value === 'Футбол') {
                sportType = 'Круто! Хочеш бути, яу Мессі?'
             }
             if(el.checked && el.value === 'Теніс') {
                sportType = 'Круто! Хочеш бути, яу Полманс?'
             } 
        })
    sport.textContent = sportType
    render.appendChild(age)
    render.appendChild(place)
    render.appendChild(sport)
    
}