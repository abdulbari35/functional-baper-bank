function getInputValueByid(inputid){
    const inputField = document.getElementById(inputid)
    const inputFieldstring=inputField.value;
    const inputvalue= parseFloat(inputFieldstring);
    inputField.value='';
    return inputvalue;
}

function getElementvaluebyId(elementid){
    const element = document.getElementById(elementid);
    const elementvaluestring=element.innerText;
    const elementvalue=parseFloat(elementvaluestring);
    return elementvalue;
}


function setElementValuebyId(elementid,newvalue){
const textelement=document.getElementById(elementid);
textelement.innerText=newvalue;
}