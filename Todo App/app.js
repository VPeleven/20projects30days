let form = document.getElementById('form')
let input = document.getElementById('input')
let todos = document.getElementById('todos')

 form.addEventListener("submit", (e)=> {
     e.preventDefault()
        addTodo()
})



let addTodo =  () => {
    
    let todo = document.createElement('li')
    todo.innerText = input.value;
    todos.appendChild(todo)

    input.value = ''

    todo.addEventListener('click', () => {
        todo.classList.add('completed')
    })

    todo.addEventListener('contextmenu', (e)=> {
        e.preventDefault()
        todo.remove()
    })
}