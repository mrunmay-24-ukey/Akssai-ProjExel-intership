class createUser{
    #age
    constructor(firstName , lastName , age){
        this.firstName = firstName
        this.lastName = lastName
        this.#age = age
    }

    sayHi(){
        return this.firstName + " " + this.lastName
    }

    getBirthYear(){
        return new Date().getFullYear() - this.age
    }

    hi = 'Hello'
}

const user1 = new createUser('Mayur' , 'ukey' , 21)
const user2 = new createUser('Anurag' , 'Singh' , 23)

