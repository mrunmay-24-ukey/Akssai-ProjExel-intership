const green = document.querySelector('.green')
const pink = document.querySelector('.pink')
const blue = document.querySelector('.blue')



green.addEventListener('click' , (e) => {
    
    console.log('Green Clicked')
})
pink.addEventListener('click' , (e) => {
    
    console.log('pink Clicked')
})
blue.addEventListener('click' , (e) => {
    
    console.log('blue Clicked')
})

/* document.addEventListener('click' , (e) => {
    e.stopPropagation()
    console.log('Document clicked')
} ) */

/* window.addEventListener('click' , (e) => {
    e.stopPropagation()
    console.log('window clicked')
}) */

const red = document.querySelector('.red')
const yellow = document.querySelector('.yellow')
const purple = document.querySelector('.purple')


red.addEventListener('click' , () => {
    console.log('Red clicked')
} )

yellow.addEventListener('click' , () => {
    console.log('yellow clicked')
})

purple.addEventListener('click' , () => {
    console.log('purple clicked')
})



