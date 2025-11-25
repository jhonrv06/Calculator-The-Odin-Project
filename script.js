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
   
   return (operator == 2) ? true: false
}

function generateCalculation(data){
    
    if(data){
        
        let value = calculateValue(values)
        calculateValue(values);
        removSpans();
        displayOnScreem(calculateValue(values))
        resetData()
        saveValue(value)
        //devolver values a 0
    }
   
}



function calculateValue(objet){
    

    objet.forEach(element => {

        //console.log(Number(element))
        
        if(Number.isNaN(Number(element))){
            
            console.log(element)
            
        }
    })

    
    /*
    let longArray = objet.length;

    let value1 = parseInt(objet.join(""));
    let evaluate = value1.toString().length
    let cutvalue2 = objet.slice(evaluate+1, longArray);
    //ejecitar un metodo qu eme traiga la posicion del signo
    //debo modificar el algoritmo ya que cuando el valor ingredo en el array es de dos digitos este me hace el objer.slice como si hubieran dos numeros en ela rray separados que se unieron
    let value2 = parseInt(cutvalue2.join(""));
    let sing = objet.slice(evaluate, evaluate+1);

    console.log("value1 es " + value1)
    console.log("value2 es " + value2)*/

    //return validateOperation(value1,sing[0],value2)

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

