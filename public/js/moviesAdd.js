window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    let inputTitulo = document.querySelector('#titulo')
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    titulo.addEventListener('mouseover',()=>{
        titulo.classList.add('changeColor')
    })
    
    let estado = 0
    const arraySecreto = ['s','e','c','r','e','t','o']
    let secreto = ''
    
    inputTitulo.addEventListener('keyup',(e)=>{
        if(arraySecreto[estado] === e.key){
            secreto = secreto + e.key
            estado++
        } else {
            estado = 0
            secreto = ''
        }
        if(estado === 7 && secreto === 'secreto'){
            estado = 0
            secreto = ''

            alert('SECRETO MAGICO')
        }
    })

}