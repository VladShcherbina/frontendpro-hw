const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const getRandom = (max, min) => Math.floor(
    Math.random () * (max - min + 1) + min
)

function generateKey (length, characters) {
    let min = 0;
    let max = characters.length -1
    let key = ''
    
    for(let i = 0; i < length; i++ ){
     let randomNumber = getRandom(max, min);
     let randomCharacters = characters[randomNumber]
     key += randomCharacters
    }
    return key
}

const key = generateKey (15,characters);

console.log(key)