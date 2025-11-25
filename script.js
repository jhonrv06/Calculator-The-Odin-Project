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
    if(value != "="){
        values.push(value)
    }
}

function validateSings(data){
    
    const ALLSINGS = ["+","*","-","/"]
    const EXISTSING = ALLSINGS.includes(data);

    if(EXISTSING){
        operator += 1;
    }else if(data == "="){
        return true
    }
    saveValue(data)
   return (operator == 2) ? true: false
}

function generateCalculation(data){
    
    if(data){
        
        let value = calculateValues(values)
        calculateValues(values);
        removSpans();
        displayOnScreem(calculateValues(values))
        resetData()
        saveValue(value)
        //el ultimo signo ingresado lo debo gurdar junto con el valor devuelto
        //devolver values a 0
    }
   
}



function calculateValues(objet){
    let ind;
    let sing;
    let longArray = objet.length;

    objet.forEach((element, index) => {
        if(Number.isNaN(Number(element))){


            sing = element;
            ind = index;
        }
    })
    let cutArray = objet.slice(ind+1, longArray);

    let value1 = parseInt(objet.join(""))
    //al calular el valor me devulve 2 signos, el problema es que me devuleve el ultimo indice del mas
    let value2 = parseInt(cutArray.join(""))
    console.log(ind)
    return validateOperation(value1,sing,value2)

}

function resetData(){
    values = [];
    operator = 0;
}

function removSpans(){
    const SPANS = document.querySelectorAll("span");

    SPANS.forEach(element => {
        element.remove();
    });
    
}


function displayOnScreem(data){
    const SPAN = document.createElement("span");
    SPAN.textContent = data;
    
    DISPPLAY.appendChild(SPAN);
}

function getEvents(element){
    element.addEventListener("click", (e) =>{
            const VALUEELEMENT = e.target.value;
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

