const DISPPLAY = document.querySelector("#calculator__display");
const BUTTONS = document.querySelectorAll(".buttons");
let values = []

function validateOperation(value1,sing,value2){
    return (sing == "+") ? value1+value2:
    (sing == "-")? value1-value2:
    (sing == "/")? value1/value2:
    value1 * value2;
}


function saveValue(value){
    let resultArray = values.push(value)

}

function calculateOtion(){
    
}



function calculateValue(){
    //let data = ["8","3","1","+","4","6"]
    let data = ["+"]
    let value1 = 8 + 7;
    
    let totalarr = Number(data.join(""));

    console.log(totalarr)

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


calculateValue()
getElement(BUTTONS)

