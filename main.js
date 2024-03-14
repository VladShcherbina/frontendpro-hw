const wrapper = document.querySelector('#wrapper')
const getBnt = document.querySelector('#getBtn')

function getDate() {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19')
    .then(response => response.json())
    .then(json => {
        console.log(json)
        renderInfo(json)
    })
}

getBnt.addEventListener('click', () => {
    wrapper.innerHTML = ''
    getDate()
})

function renderInfo(el) {
        const infoXXX = document.createElement('p')
        const infoTemp = document.createElement('p')
        const infoPressure = document.createElement('p')
        const infoDescription = document.createElement('p')
        const infoHumidity = document.createElement('p')
        const infoSpeed = document.createElement('p')
        const infoDeg = document.createElement('p')
        infoXXX.textContent = `Сity : ${el.name}`
        infoTemp.textContent = `Temp : ${el.main.temp}`
        infoPressure.textContent = `Pressure : ${el.main.pressure}`
        infoDescription.textContent = `Description : ${el.weather[0].description}`
        infoHumidity.textContent = `Humidity : ${el.main.humidity}`
        infoSpeed.textContent = `Speed : ${el.wind.speed}`
        infoDeg.textContent = `Deg : ${el.wind.deg}`
        wrapper.appendChild(infoXXX)
        wrapper.appendChild(infoTemp)
        wrapper.appendChild(infoPressure)
        wrapper.appendChild(infoDescription)
        wrapper.appendChild(infoHumidity)
        wrapper.appendChild(infoSpeed)
        wrapper.appendChild(infoDeg)
    
}