const user = {
    username : 'Anurag',
    address : {
        city : 'Jabalpur',
        state : 'MP'
    }
}

for(const key in user){
    console.log(user[key])
}