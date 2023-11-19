function getInput(value){
    var userInput=value
    var display = document.getElementsByClassName('display');
    var currentValue= display[0].innerText;


    if (userInput==='del'){
        deletelastdigit(display[0]);
        return
    }
    if (currentValue=== '0' && isOperator(userInput)){
        display[0].innerText= currentValue + userInput;
        return
    }
    if (userInput==='.' && currentValue.includes('.')){
        return
    }
    if(currentValue.slice(-1)==='.' && isOperator(userInput)){
        return
    }
    if (currentValue==='' && userInput==='0'){
        display[0].innerText=userInput
        return;
    }
    if (currentValue==='0' && !isOperator(userInput) && userInput !='.'){
        display[0].innerText=userInput;
        return;
    }
    if (currentValue='' && isOperator(userInput)){
        return;
    }

    if(currentValue.length < 12){
        if(currentValue==='0' && isOperator(userInput)){
            return;
        }
        else if(isOperator(userInput)&& isOperator(currentValue.slice(-1))){
            display[0].innerText=currentValue.slice(0,-1)+ userInput
            return;
        }
        else if(isOperator(userInput) && currentValue.length>0 && !isOperator(currentValue.slice(-1))){
            display[0].innerText += userInput
            return
        }
        else{
            display[0].innerText += userInput
        }
    }
}
function isOperator(value){
    return value==='+'|| value==='-' || value ==='*' || value ==='/';
}

function deletelastdigit(){
    var display=document.getElementsByClassName('display')
    var currentDisplayDigit=display[0].innerText
    var newCurrentValue=currentDisplayDigit.slice(0,-1)
    if (newCurrentValue==="" || newCurrentValue==="-"){
        display[0].innerText='0'
    }
    else if(newCurrentValue==="Error"){
        display[0].innerText='0'
    }
    else{
        display[0].innerText=newCurrentValue;
    }
}
function appendDecimal(){
    var display=document.getElementsByClassName('display')
    var currentlastDigit=display[0].innerText
    if (!currentlastDigit.includes('.')){
        display[0].innerText='.'
    }
}
function ResetAll(value){
    var display=document.getElementsByClassName('display')
    display[0].innerText=value
}
function result(){
    var display=document.getElementsByClassName('display')
    var expression=display[0].innerText
    var correctedExpression=expression.replace(/x/g,'*');

    try{
        var result=eval(correctedExpression)
        if(typeof result=='number'&& isFinite(result)){
            var formatResult=parseFloat(result.toPrecision(12))
            display[0].innerText=formatResult;
        }
        else{
            display[0].innerText="Error";
        }
    }
    catch(error){
        display[0].innerText="Error";
    }
}