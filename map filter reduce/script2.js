// map , filter , reduce questions

// what is map()

const nums = [1,2,3,4,5]
const multiplyThree = nums.map((num) => num*3)
console.log(multiplyThree)


// filter 

const moreThanTwo = nums.filter((num) => {
    return num > 2
})
console.log(moreThanTwo)


// reduce 
//accumulator is the result of previous computation
const sum = nums.reduce((acc , curr , i , arr) => {
    return acc + curr
} , 0)

console.log(sum)



//question 1 :  map vs forEach
const arr = [2,3,5,1,9]
const mapResult = arr.map((el) => {
    return el + 2
})
console.log(mapResult)


    /* const foreachResult = arr.forEach((el) => {
        return el + 2
    })
    console.log(foreachResult) */


    // foreach original array pe changes karta hai , kuch return nhi karta 
    // basically mutaute kar deta hai original array 
const foreachResult = arr.forEach((el , i) => {
    arr[i] = el  + 4
})
console.log(arr)


// question : Return only name of student in Capital

const students = [
    {name : 'Piyush' , rollNumber : 21 , marks  :70},
    {name : 'Akash' , rollNumber : 100 , marks  :100},
    {name : 'Anurag' , rollNumber : 120 , marks :24},
    {name : 'Rohit' , rollNumber : 21 , marks :34}
]

/* let names = []
for(let i = 0 ; i < students.length ; i++){
    names.push(students[i].name.toUpperCase())
}
console.log(names) */

const names = students.map((student) => student.name.toUpperCase())
console.log(names)

// filter students based on marks more than 60
const filteredStudents = students.filter((student) => student.marks > 60)
console.log(filteredStudents) 


// sum of marks of all students 
const sumOfMarks = students.reduce((acc , curr) => {
    return acc + curr.marks
} , 0)

console.log(sumOfMarks)



// question : Return only names of students who scored more than 60
const result = students.filter((student) => student.marks > 60).map((student) => student.name)
console.log(result)



// question : return Total marks for student with the marks greater than 60 ,after 20 marks have been added to those who scored less than 60

const totalMarks = students.map((student) => {
    if(student.marks < 60){
        student.marks = student.marks +  20
    }
    return student
}).filter((student) => student.marks > 60).reduce((acc , curr) => {
    return acc + curr.marks
} , 0 )
console.log(totalMarks)