const DISPPLAY = document.querySelector("#calculator__display");
const BUTTONS = document.querySelectorAll(".buttons");
let values = []
let sings = 0;

function validateOperation(value1,sing,value2){
    return (sing == "+") ? value1+value2:
    (sing == "-")? value1-value2:
    (sing == "/")? value1/value2:
    value1 * value2;
}

//debo evaluar si hay un signo y un punto

function saveValue(value){
    if(value != "="){
        values.push(value)
    }
}

function disableElement(accion){
    accion.forEach( element =>{
        if(element.value == "."){
            element.disabled = returnAccion();
        }
    })
}

function returnSings(objet){
//Return any sing selecte for the users
    objet.forEach(element =>{
        if(Number.isNaN(Number(element))){
            sings = element;
             
        }
    })

    return sings
   
}

function returnAccion(){
//return true or false if the sing is a button
    if(returnSings(values) == "."){
        return true
    }
    return false
}

function deleteLastValue(objet){
    objet.pop()
    let result = values.join("")
    return result
}

function validateDoubleSings(objet){
    let count = 0;
    objet.forEach(element =>{
        if(Number.isNaN(Number(element)) && element != "."){
            count += 1;
        }
    })

    return count
}

function resetWhenEmpty(objet){
    if(objet.length == 0){
        removSpans()
    }
}

function controler(data){

    if(data == "<" || data =="Backspace"){
        removSpans()
        displayOnScreem(deleteLastValue(values))
        return
    }

    if(data == "CLEAR"){
        resetData();
        removSpans();
        displayOnScreem(0);
        return
    }
    console.log(values)
    resetWhenEmpty(values);
    saveValue(data);
    disableElement(BUTTONS);
    displayOnScreem(data);

    if(data == "="){
        return true
    }

    if(validateDoubleSings(values) == 2){
        return (validateDoubleSings(values) == 2) ? true: false
    }
 
}

function generateCalculation(data, sing){
    
    if(data){
        console.log(values)
        let value = calculateValues(values)
        calculateValues(values);
        removSpans();
        displayOnScreem(calculateValues(values));
        resetData();
        saveValue(value);
        saveValue(sing);
        displayOnScreem(sing)
    }
   
}

function calculateValues(objet){

    if(validateDoubleSings(objet) == 2){
        objet.pop()
    }
    
    let ind;
    let sing;
    let longArray = objet.length;

    objet.forEach((element, index) => {
        if(Number.isNaN(Number(element)) && element != "."){
            sing = element;
            ind = index;
        }
    })
    let cutArray = objet.slice(ind+1, longArray);

    let value1 = parseFloat(objet.join("")) || 0
    let value2 = parseFloat(cutArray.join("")) || 0

   
    return validateOperation(value1,sing,value2)

}

function resetData(){
    values = [];
}

function removSpans(){
    const SPANS = document.querySelectorAll("span");

    SPANS.forEach(element => {
        element.remove();
    });
    
}

function displayOnScreem(data){
    let clasSpan = "number";
    let displayData = `${data}`;
    let allSing =["+", "-", "*", ".", "/"];

    if (allSing.includes(data)){
        clasSpan = "sing";
        displayData = ` ${data} `;
    }
    
    //evaluar si hay un signo contrue y si es true cambiar el nombre de la clase
    if (data != "="){
        const SPAN = document.createElement("span");
        SPAN.textContent = displayData;
        SPAN.classList.add(clasSpan)
        DISPPLAY.appendChild(SPAN);
    }
    
}

function getEvents(element){
    element.addEventListener("click", (e) =>{
            const VALUEELEMENT = e.target.name;

            generateCalculation(controler(VALUEELEMENT), VALUEELEMENT)
            
        } )
}8


    document.addEventListener("keydown", (e) =>{
            const VALUEELEMENT = e.key;

            //debo crear una funcion que me evalue la tecla presionada y me devuelva true si es correcta
           
           generateCalculation(controler(VALUEELEMENT), VALUEELEMENT)
            
        } )


function getElement(elementHtml){
    elementHtml.forEach(element =>{
        getEvents(element)
    } )
}

displayOnScreem(0)
getElement(BUTTONS)

