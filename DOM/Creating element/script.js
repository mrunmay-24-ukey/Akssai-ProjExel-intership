const container = document.querySelector('.container')
const h1 = document.querySelector('h1')
/* const pokemonImage = document.querySelector('img') */

/* for(let i = 0 ; i<=100 ; i++){
    const newImg = pokemonImage.cloneNode()
    newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
    container.appendChild(newImg)
} */

/* const paragraph = document.createElement('p')
paragraph.innerText = 'Hello'
container.appendChild(paragraph)
 */



for(let i = 1 ; i<= 900 ; i++){
    const img = document.createElement('img')
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
    container.appendChild(img)
}