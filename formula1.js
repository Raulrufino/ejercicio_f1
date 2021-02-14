// mover el coche con el control de cursores

/* document.addEventListener('keydown', evento => {
    console.log(evento.key)
    console.log(evento.code)
    console.log(evento.keycode)
  
  
})  */
 

//FUNCIONES/VARIABLES
 let x=0, y=0
const formula = document.getElementById('formula'),
        up = () => formula.style.transform = `translate(${x}%,${y -=5}%)`
        down = () => formula.style.transform = `translate(${x}%,${y +=5}%)`
        right = () => formula.style.transform = `translate(${x += 5}%,${y}%)`
        left = () => formula.style.transform = `translate(${x -= 5}%,${y}%)` 


//mover el coche
 document.addEventListener('keydown', evento =>{
    switch (evento.key) {
        case 'ArrowUp':
            up()
            break;
        case 'ArrowDown':
            down()
            break;
        case 'ArrowRight':
            right()
            break;
        case 'ArrowLeft':
            left()
            break;
    
    }
})

