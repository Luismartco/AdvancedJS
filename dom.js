//Crear titulo desde Js
const title = document.createElement('h1')
title.innerText = 'Confia y veras :3'

document.body.append(title)

//Crear boton desde Js
const button = document.createElement('button')
button.innerText = 'Click'

    //Event handlers: Interacciones
button.addEventListener('click', function(){
    alert('Titulo cambiado ciela💋💋💋')
    title.innerText = 'Quien vive confiado muere traicionado, pescabicho👿'
})

document.body.append(button)