// Funcion
async function showdata() {
    //Espera la promesa
    const json = await getData();
    console.log(json)
}

// Promesa que se ejecuta de primero
function getData(){
    return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => json);
}

showdata();