    function createUser(firstName, lastName, age) {
    const user = {
        firstName: firstName,
        lastName: lastName,
        age: age,
        /* getBirthYear : createUser.commonMethods.getBirthYear */
    };

    return user;
    }
    /* createUser.commonMethods = {
    getBirthYear: function () {
        return new Date().getFullYear() - this.age;
    },
    }; */
    // yeh karne ki jarurat nhi kyuki 
    // ab entry hogi prototypes ki 

const user1 = createUser("Akash", "Singh", 23);
const user2 = createUser("Mayur", "ukey", 21);

function sayHi(){
    console.log(this)
    return 'Hello'
}