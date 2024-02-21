const smiles = [
    {
        smileIkon: '😀',
        voteCount: '0'
    },{
        smileIkon: '😆',
        voteCount: '0'
    },{
        smileIkon: '🙂',
        voteCount: '0'
    },{
        smileIkon: '😉',
        voteCount: '0'
    },{
        smileIkon: '🥰',
        voteCount: '0'
    },
]
const appDiv = document.querySelector('#app')

const createDiv = () => document.createElement('div')

smiles.forEach((smile) => {
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
    })
})