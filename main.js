const flexWrapper = document.querySelector('#flexWrapper')
const myInput = document.querySelector('#myInput')
const myPost = document.querySelector('#myPost')
const myComment = document.querySelector('#myComment')
const searchBtn = document.querySelector('#searchBtn')

const url = 'https://jsonplaceholder.typicode.com'

function getPost(postId) {

    const newPromise = new Promise((resolve, reject) => {
         fetch(url + '/posts/' + postId)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error))
    })

    newPromise
        .then(json => {
            if(json.id) {
                const title = document.createElement('h1')
                const body = document.createElement('p')
                title.textContent = json.title
                body.textContent = json.body
                myPost.appendChild(title)
                myPost.appendChild(body)
                const commentBtn = document.createElement('button')
                commentBtn.classList.add('searchBtn')
                myPost.appendChild(commentBtn)
                commentBtn.textContent = 'Find comment'
                commentBtn.addEventListener('click', () => {
                    myComment.innerHTML = ''
                    fetch(url + '/posts/' + postId + '/comments')
                    .then(response => response.json())
                    .then(json => {
                        renderComments(json)
                    })
                })
            } else {
                alert('Щось пішло не так')
            }
           
        })
 }



searchBtn.addEventListener('click', () => {
    myPost.innerHTML = ''
    if(myInput.value > 100 || myInput.value < 1){
        alert('Ви ввели невірне число')
    } else { 
        getPost(myInput.value)
    }
    
})

function renderComments(comments) {
    comments.forEach((el) => {
        const wrapperP = document.createElement('div')
        const commentsBody = document.createElement('p')
        const commentsEmail = document.createElement('p')
        const commentsId = document.createElement('p')
        const commentsName = document.createElement('p')
        const commentsPostId = document.createElement('p')
        commentsBody.textContent = `Body : ${el.body}`
        commentsEmail.textContent = `Email : ${el.email}`
        commentsId.textContent = `Id : ${el.id}`
        commentsName.textContent = `Name : ${el.name}`
        commentsPostId.textContent = `PostId : ${el.postId}`
        wrapperP.appendChild(commentsBody)
        wrapperP.appendChild(commentsEmail)
        wrapperP.appendChild(commentsId)
        wrapperP.appendChild(commentsName)
        wrapperP.appendChild(commentsPostId)
        myComment.appendChild(wrapperP)
        wrapperP.classList.add('pComments')
    })
    
}

