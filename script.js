const DISPPLAY = document.querySelector("#calculator__display");
const BUTTONS = document.querySelectorAll(".buttons");
let values = []
let operator = 0;

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

function validateSings(data){
    
    const ALLSINGS = ["+","*","-","/"]
    const EXISTSING = ALLSINGS.includes(data);

    if(EXISTSING){
        operator += 1;
    }else if(data == "="){
        return true
    }
    console.log(operator)
   return (operator == 2) ? true: false
}

function generateCalculation(data){
    
    if(data){
        calculateValue(values)
    }
    console.log(data)
}



function calculateValue(objet){
    let longArray = objet.length;

    let value1 = parseInt(objet.join(""));
    let evaluate = value1.toString().length
    let cutvalue2 = objet.slice(evaluate+1, longArray);
    let value2 = parseInt(cutvalue2.join(""));
    let sing = objet.slice(evaluate, evaluate+1);
    
    console.log(validateOperation(value1,sing[0],value2)) 

}


function displayOnScreem(data){
    const SPAN = document.createElement("span");
    SPAN.textContent = data;
    
    DISPPLAY.appendChild(SPAN);
}

function getEvents(element){
    element.addEventListener("click", (e) =>{
            const VALUEELEMENT = e.target.value;

            //aqui debo llamar una funcion que me evalue si ya hay un sigo cuando el valor recibido sea un signo
            saveValue(VALUEELEMENT)
            displayOnScreem(VALUEELEMENT)
            generateCalculation(validateSings(VALUEELEMENT))
        } )
}

function getElement(elementHtml){
    elementHtml.forEach(element =>{
        getEvents(element)
    } )
}


getElement(BUTTONS)

