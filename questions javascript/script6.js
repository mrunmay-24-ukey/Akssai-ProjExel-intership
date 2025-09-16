let users = [
    {name : 'Anurag' , marks : 63 , rollNumber : 40},
    {name : 'Mayur' , marks : 75 , rollNumber : 50},
    {name : 'Rohit' , marks : 45 , rollNumber : 23},
    {name : 'Jayesh' , marks : 56 , rollNumber : 34}
]

// only names

const names = users.map((user) => {
    return user.name
})
console.log(names)

// those students names who have marks more than 60
const moreThanMarks = users.filter((user) => user.marks > 60).map((user) => user.name) 
console.log(moreThanMarks)

// sum of total marks of students whose marks are less that 60
const result = users.filter((user) => user.marks < 60).map((user) => user.marks).reduce((acc , curr) => acc + curr , 0)
console.log(result)