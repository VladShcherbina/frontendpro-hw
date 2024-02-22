const SMILES_KEY = 'smiles'

const smiles = [
    {
        smileIkon: '😀',
        voteCount: '0',
    },{
        smileIkon: '😆',
        voteCount: '0',
    },{
        smileIkon: '🙂',
        voteCount: '0',
    },{
        smileIkon: '😉',
        voteCount: '0',
    },{
        smileIkon: '🥰',
        voteCount: '0',
    },
]

const appDiv = document.querySelector('#app')

const createDiv = () => document.createElement('div')

const localSmile = JSON.parse(localStorage.getItem(SMILES_KEY)) || smiles

localSmile.forEach((smile) => {
    const wrapper = createDiv()
    const smileIkonDiv = createDiv()
    const voteCountDiv = createDiv()
    wrapper.classList.add('wrapperDiv')
    smileIkonDiv.classList.add('smileDiv')
    smileIkonDiv.textContent = `${smile.smileIkon}`
    voteCountDiv.textContent = `${smile.voteCount}`

    wrapper.appendChild(smileIkonDiv)
    wrapper.appendChild(voteCountDiv)
    appDiv.appendChild(wrapper)
    smileIkonDiv.addEventListener('click', () => {
        voteCountDiv.textContent++
        smile.voteCount++

        localStorage.setItem(SMILES_KEY, JSON.stringify(smiles))
    })
})
