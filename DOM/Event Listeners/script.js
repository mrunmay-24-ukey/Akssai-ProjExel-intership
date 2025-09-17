const container = document.querySelector('.container')
const addButton = document.querySelector('.addBtn')

let count = container.children.length

addButton.addEventListener('click' , () => {
    count++
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerText = count
    container.append(card)
})