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
    console.log(values)
}

function calculateOtion(){
    
}



function calculateValue(){
    let data = ['5', '8', '6', '+', '4', '7', '1']

    let longArray = data.length;

    let value1 = parseInt(data.join(""));
    let evaluate = value1.toString().length
    let cutvalue2 = data.slice(evaluate+1, longArray);
    let value2 = parseInt(cutvalue2.join(""));
    let sing = data.slice(evaluate, evaluate+1);
    
    console.log(validateOperation(value1,sing[0],value2)) 

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

