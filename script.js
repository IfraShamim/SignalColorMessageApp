function showMessage(){
    const color = document.getElementById('color').value;
    let para = document.getElementById('para');
    if(color === 'red'){
       para.innerHTML = `Must Stop.`;
       para.style.color = 'red';
    }
    else if(color === 'yellow'){
        para.innerHTML = `Ready To Move.`;
       para.style.color = 'gold';
     }
     else if(color === 'green'){
        para.innerHTML = `Move Now.`;
       para.style.color = 'green';
     }
     
}