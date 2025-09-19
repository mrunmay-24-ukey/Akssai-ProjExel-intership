const nameElement = document.querySelector('.name-tag')
const nameInput = document.querySelector('.name-input')

nameElement.innerText = localStorage.name


nameInput.addEventListener('input' , (e) => {
    localStorage.setItem('name' , e.target.value)
    nameElement.innerText = e.target.value
})


const user = {
    name:'Hello',
    game : 'Silksong'
}