// Los objetos se guardan en variables que se representa en clave y valor
 const user = {
    // propiedades
    name: 'Sirgencio',
    lastmane: 'Cirpiano',
    age: 20,
    address: {
        country: 'Colombia',
        city: 'Medallo mor'
    },
    friends: ['Abelardo, Plutarco, Everlides, Juaco'],
    active: true,
    // metodos
    sendMail(){
        return 'sending email...';
    },
 };

// Ver toda la informacion del usuario
 console.log(user)

// Ver informacion especifica
 console.log(user.address.country)

 // Ver funcion
 console.log(user.sendMail())