/* Escuchamos cuando se carga el documento */
window.addEventListener("load", ()=>{
/* Creamos 2 const y guardamos los elementos que necesitamos */
    const display = document.querySelector(".calculator-display");
    const keypadButtons = document.getElementsByClassName("keypad-button");
/* En esta constante convertimos el HTMLCollection a Array */
    const keypadButtonArrays = Array.from(keypadButtons);

/* iteramos por nuestro Array de botones */
    keypadButtonArrays.forEach( (button) => {

        /*A cada boton le vamos a agregar un EventListener  */
        button.addEventListener("click", ()=>{
            // console.log(button.innerHTML);
            calculadora(button, display);
        });
    });
});

function calculadora(button, display){

    switch(button.innerHTML){   
        case "C":
            borrar(display);
            break;
        
        case "=":
            calcular(display);
            break;

        default:
            actualizar(display, button);
            break;
    }
}

function calcular (display){
    display.innerHTML = eval(display.innerHTML) /* Toma el string, resuelve y guardarlo en el innerHTML del display*/

}

function actualizar(display, button){
    if(display.innerHTML == 0 ){
        display.innerHTML = "";
    }

    display.innerHTML += button.innerHTML;
}

function borrar(display){
    display.innerHTML = 0;
}