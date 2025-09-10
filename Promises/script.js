const resolveBtn = document.getElementById('resolve-btn')
const rejectBtn = document.getElementById('reject-btn')

const p = new Promise((resolve , reject) => {
    
    resolveBtn.addEventListener('click' , () => {
        resolve('Promise Resolved') 
    })

    rejectBtn.addEventListener('click', () => {
        reject('Promise Rejected')
       
    })
})

console.log(p.then((data) => {
    console.log(data)
    return 15
})).then((data) => {
    console.log(data)
})

