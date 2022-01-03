// Codigo del cuadrado

function perimetroCuadrado(lado){
    return lado * 4;
} 

perimetroCuadrado(4);

function areaCuadrado(lado){
    return lado * lado;
} 

// Codigo del triangulo

function perimetroTriangulo(lado1,lado2,base){
    const perimetro = lado1 + lado2 + base;
    return perimetro
    // return lado1 + lado2 + base;
}

function areaTriangulo(base,altura){
    return (base*altura)/2;
}

function validarAlutraTriangulo(lado1,lado2){
    if(lado1 == lado2){
        return true;
    }else{
        return false;
    }
}

function calcularAltura(lado,base){
    const ladoCuadrado = lado * lado;
    const baseMitad = base/2;
    const baseCuadrado = baseMitad*baseMitad;
    const restaCuadrados = ladoCuadrado - baseCuadrado;
    return Math.sqrt(restaCuadrados);
}

// codigo triangulo

function diametroCirculo(radio){
    return radio*2;
}

const PI = Math.PI;

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro*PI;
}

function areaCirculo(radio){
    return (radio*radio)*PI;
}


// AQUI INTERACTUAMOS CON EL HTML

// CUADRADO
const resultadoCuadrado = document.getElementById('resultado1');

function calcularPerimetroCuadrado(){
    const lado = document.getElementById('inputCuadrado');
    const valueLado = lado.value;

    const perimetro = perimetroCuadrado(valueLado);
    resultadoCuadrado.innerHTML = "el perimetro del cuadrado es: "+perimetro;
}

function calcularAreaCuadrado() {
    const lado = document.getElementById('inputCuadrado');
    const valueLado = lado.value;

    const area = areaCuadrado(valueLado);
    resultadoCuadrado.innerHTML = "el area del cuadrado es: "+area;
 
}

// TRINGULO
const resultadoTriangulo = document.getElementById('resultado2');

function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById('inputLado1');
    const valueLado1 =Number(lado1.value);
    const lado2 = document.getElementById('inputLado2');
    const valueLado2 = Number(lado2.value);
    const base = document.getElementById('inputBase');
    const valueBase = Number(base.value);
    

    const perimetro = perimetroTriangulo(valueLado1,valueLado2,valueBase);
    resultadoTriangulo.innerHTML = "el perimetro del triangulo es : "+perimetro;
}

function calcularAreaTriangulo() {
    const base = document.getElementById('inputBase');
    const valueBase = base.value;
    const altura = document.getElementById('inputAltura');
    const valuealtura = altura.value;

    const area = areaTriangulo(valueBase, valuealtura);
    resultadoTriangulo.innerHTML = "el area del cuadrado es: " + area;
    
}

function calcularAlturaTriangulo(){
    const lado1 = document.getElementById('inputLado1');
    const valueLado1 =Number(lado1.value);
    const lado2 = document.getElementById('inputLado2');
    const valueLado2 = Number(lado2.value);
    const base = document.getElementById('inputBase');
    const valueBase = base.value;
    
    if(validarAlutraTriangulo(valueLado1,valueLado2)){
        const altura  = calcularAltura(valueLado1,valueBase);
        resultadoTriangulo.innerHTML = "la altura del triangulo es: "+altura;
    }
    else{
        resultadoTriangulo.innerHTML = "Error, no se trata de un triangulo isosceles";
    }
}


// CIRCULO
const resultadoCirculo = document.getElementById('resultado3');

function calcularPerimetroCirculo(){
    const radio = document.getElementById('inputRadio');
    const valueRadio = radio.value;

    const perimetro = perimetroCirculo(valueRadio);
    resultadoCirculo.innerHTML = "el perimetro de circulo es: "+perimetro;
}

function calcularAreaCirculo(){
    const radio = document.getElementById('inputRadio');
    const valueRadio = radio.value;

    const area = areaCirculo(valueRadio);
    resultadoCirculo.innerHTML = "el area del circulo es: "+area;
}

console.log(Math.sqrt(2));
