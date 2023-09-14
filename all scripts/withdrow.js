document.getElementById('withdrow-button').addEventListener('click',function(){
    const newwithdrowamount= getInputValueByid('withdrow-field');
    const currentwithdrowtotal= getElementvaluebyId('withdrow');
    const newwithdrowtotal=newwithdrowamount+currentwithdrowtotal;
    setElementValuebyId('withdrow', newwithdrowtotal);
    const previousbalancetotal=getElementvaluebyId('balance-element');
    const newbalancetotal=previousbalancetotal-newwithdrowamount;
    setElementValuebyId('balance-element', newbalancetotal);
})