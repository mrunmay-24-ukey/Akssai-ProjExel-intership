const user1 = {
  firstName: "anurag",
  age: 24,

  getAgeYear() {
    return new Date().getFullYear() - user.age;
  },
};

const user2 = {
  firstName: "akash",
  age: 20,

  getAgeYear() {
    return new Date().getFullYear() - user.age;
  },
};

function createUser(firstName , age) {
  const user = {
    firstName : firstName,
    age : age
  };

  return user;
}


