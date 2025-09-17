const todoForm = document.getElementById("todoForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");


todoForm.addEventListener('submit' , (e) => {
    e.preventDefault()

    const taskText = taskInput.value.trim()

    if(taskText === '') return;

    const li = document.createElement('li')
    li.innerHTML = `<span>${taskText}</span>
    <button class='deleteBtn'>Delete</button>
    `
    taskList.appendChild(li)
    taskInput.value = ''
})

// event delegation
taskList.addEventListener('click' , (e) => {
    if(e.target.tagName === 'SPAN'){
        e.target.parentElement.classList.toggle('completed')
    }
    if(e.target.classList.contains('deleteBtn')){
        e.target.parentElement.remove()
    }
})