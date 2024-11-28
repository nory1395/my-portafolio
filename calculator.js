function mostrarResultado(resultado){
    document.getElementById("resultado").value=resultado;
}

function suma(){
    let elementnum1= document.getElementById("num1").value;
    let elementnum2= document.getElementById("num2").value;
   mostrarResultado(+elementnum1+ +elementnum2);
}
function resta(){
    let elementnum1= document.getElementById("num1").value;
    let elementnum2= document.getElementById("num2").value;
   mostrarResultado(+elementnum1+ -elementnum2);
}
function multiplicacion(){
    let elementnum1= document.getElementById("num1").value;
    let elementnum2= document.getElementById("num2").value;
   mostrarResultado(+elementnum1* +elementnum2);
}
function division(){
    let elementnum1= document.getElementById("num1").value;
    let elementnum2= document.getElementById("num2").value;
   mostrarResultado(+elementnum1 / +elementnum2);
}
function raiz(){
    let elementnum1= document.getElementById("num1").value;
    let elementnum2= document.getElementById("num2").value;
   mostrarResultado(Math.sqrt(elementnum1));
}

function potencia(){
    let elementnum1= document.getElementById("num1").value;
    let elementnum2= document.getElementById("num2").value;
    mostrarResultado(Math.pow(elementnum1,elementnum2));
}
function absoluto(){
    let elementnum1= document.getElementById("num1").value;
    mostrarResultado(Math.abs(elementnum1));

}

function random(){
    let minimo= document.getElementById("num1").value;
    let maximo= document.getElementById("num2").value;
mostrarResultado(Math.random() * (+maximo + - minimo)+ +minimo);

}

function round(){
    mostrarResultado(Math.round(resultado.value));
}

function floor(){
    mostrarResultado(Math.floor(resultado.value));
}
function ceil(){
    mostrarResultado(Math.ceil(resultado.value));
}