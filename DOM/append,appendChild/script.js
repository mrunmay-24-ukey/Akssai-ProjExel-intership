const container = document.querySelector('.container')
const card = document.querySelector('.card')
const h1 = document.querySelector('h1')

// append -> add something to the end
/* container.append(h1) */

/* container.appendChild(h1.cloneNode(true)) */


container.appendChild(card.cloneNode(true))


for(let i = 2 ; i <= 100 ; i++){
    const newCard = card.cloneNode()
    newCard.innerText = i
    container.appendChild(newCard)
} 

// appendChild vs append
// apend ka use kar ke string bhi add kar sakte 
container.append('hello')
// but appendChild se nhi kar sakte 
//TypeError: Failed to execute 'appendChild' on 'Node'

// agar karna hi hai appendChild use kar ke to sabse pehle textNode create karna padega

const textNode = document.createTextNode('Hello world')
container.appendChild(textNode)

// 2nd difference 
// append use kar ke multiple elements bhi append kar sakte 
container.append('Hello' , h1 , 'World')