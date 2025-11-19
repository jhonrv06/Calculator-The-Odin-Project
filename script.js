const DISPPLAY = document.querySelector("#calculator__display");
const BUTTONS = document.querySelectorAll(".buttons");
let values = []

function saveValue(value){
    let resultArray = values.push(value)
}

function calculateOtion(){
    
}

function calculateValue(objet){

}


function displayOnScreem(data){
    const SPAN = document.createElement("span");
    SPAN.textContent = data;

    //aqui debo llamar un funcion que me evalue si ya hay un sigo cuando el valor recibido sea un signo
    DISPPLAY.appendChild(SPAN);

}

function getEvents(element){
    element.addEventListener("click", (e) =>{
            const VALUEELEMENT = e.target.value;

            saveValue(VALUEELEMENT)
           displayOnScreem(VALUEELEMENT)
        } )
}

function getElement(elementHtml){
    elementHtml.forEach(element =>{
        getEvents(element)
    } )
}




getElement(BUTTONS)

