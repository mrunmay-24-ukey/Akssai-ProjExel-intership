
// factory functions 
function createUser(firstName , lastName , age){
  const user = {
    firstName:firstName,
    lastName : lastName ,
    age : age,
    getAgeYear : function (){
      return new Date().getFullYear() - user.age
    }
  }
  return user
}

const user1 = createUser('Mayur' , 'ukey' , 21)
const user2 = createUser('Anurag' , 'Singh' , 23)
