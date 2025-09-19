class createUser {

    constructor(firstName , lastName , age){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

  sayHi() {
    return +"Hello" + this.firstName + this.lastName;
  }
  getBirthYear() {
    return new Date().getFullYear() - this.age;
  }
}

const user1 = new createUser("Akash", "Singh", 23);
const user2 = new createUser("Mayur", "ukey", 21);
