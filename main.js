
const imageArray = ['1.png', '2.png', '3.png', '4.png', '5.png'];
imageIndex = 0

const myImage = document.querySelector('#imgId')
const firstBtn = document.querySelector('#firstBtn')
const secondBtn = document.querySelector('#secondBtn')

firstBtn.addEventListener('click', () => {
    if(imageIndex > 0) {
        imageIndex--
        myImage.src = './image/' + imageArray[imageIndex]
    }
    if(imageIndex === 0){
        firstBtn.style.visibility = 'hidden'
    }
    if(imageIndex < imageArray.length - 1) {
        secondBtn.style.visibility = 'visible'
    }
    })
    
secondBtn.addEventListener('click', () => {
    if(imageIndex < imageArray.length - 1) {
        imageIndex++
        myImage.src = './image/' + imageArray[imageIndex]
        }
    if(imageIndex === imageArray.length - 1){
        secondBtn.style.visibility = 'hidden'
        }
    if(imageIndex > 0) {
        firstBtn.style.visibility = 'visible'
    }
    })
    

