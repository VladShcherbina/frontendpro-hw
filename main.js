const todo_wrapper = document.querySelector('#todo_list') 
const add_todo = document.querySelector('#add_todo')
const todo_input = document.querySelector('#todo_input') 
const todo_list = JSON.parse(localStorage.getItem('todo_list')) ? 
     JSON.parse(localStorage.getItem('todo_list')) : []
updateTodoList()


function updateTodoList() {
    todo_wrapper.innerHTML = '';
    localStorage.setItem('todo_list', JSON.stringify(todo_list))
    
    todo_list.forEach((todo) => {
        const temp_todo = document.createElement('div');
        temp_todo.textContent = todo.title;
        temp_todo.classList.add('todo');
        
        todo_wrapper.appendChild(temp_todo)

        temp_todo.addEventListener('click', () => {
            console.log(temp_todo.style.textDecoration === 'line-through')
            if (temp_todo.style.textDecoration === 'line-through') {
                temp_todo.style.textDecoration = 'none'
            } else {
                temp_todo.style.textDecoration = 'line-through'
                todo.complete === true
            }
        })
    })
}

add_todo.addEventListener('click', () => {
    if(todo_input.value) {
        todo_list.push({
            title: todo_input.value,
            complete: false,
        })
    }

    updateTodoList()
})


