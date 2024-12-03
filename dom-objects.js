const user1 = {
    name: 'Michell',
    age: 32 
}

function printInfo(user1){
    return '</h1> Hola ' + user1.name + ', tu edad es: ' + user1.age +' años. </h1>'
}

document.body.innerHTML = printInfo(user1)