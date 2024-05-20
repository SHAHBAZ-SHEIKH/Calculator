
var inputResult = document.getElementById("inputResult")
function setnumber(num){
    var lastVal = inputResult.value.slice(inputResult.value.length -1);
    console.log(lastVal)
    var myOperator = ["+","-","*","/"]
    if(myOperator.indexOf(lastVal) !==-1 && myOperator.indexOf(num) !== -1){
        inputResult.value = inputResult.value.slice(0,-1) + num
        console.log(inputResult.value)
    }
    else{
        inputResult.value +=num
    }
    
}

function clc(){
    document.getElementById("inputResult").value = ''
}

function del(){
    var getValue = document.getElementById("inputResult")
    getValue.value = getValue.value.slice(0,-1)
}

function getresult(){
    var getValue = document.getElementById("inputResult")
    getValue.value = eval(getValue.value)
}