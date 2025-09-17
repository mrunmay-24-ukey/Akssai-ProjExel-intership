const container = document.querySelector('.container')


for(let i = 1 ; i<=900 ; i++){
    const imgContainer = document.createElement('div')
    imgContainer.classList.add('img-container')

    const newImage = document.createElement('img')
    newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`

    const paragraph = document.createElement('p')
    paragraph.innerText = i

    /* imgContainer.append(newImage , paragraph)

    /* const myHTML = `<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png'/>
    <p>${i}</p>
    ` */
    /* imgContainer.innerHTML = myHTML */

    imgContainer.append(newImage , paragraph)
    container.append(imgContainer)
}

// removing elements
const myImg = document.querySelector("body > div.container > div:nth-child(3)")
myImg.remove()