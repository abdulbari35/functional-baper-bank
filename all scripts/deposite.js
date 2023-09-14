document.getElementById('deposite-button').addEventListener('click',function(){
    const newdepositeAmount= getInputValueByid('deposite-field');
    const previousdepositetotal=getElementvaluebyId('deposite');
    const currentdepositetotal=newdepositeAmount+previousdepositetotal;
    setElementValuebyId('deposite', currentdepositetotal);

    const previousbalancetotal= getElementvaluebyId('balance-element');
    const newbalancetotal=newdepositeAmount+previousbalancetotal;
    setElementValuebyId('balance-element',newbalancetotal);

})