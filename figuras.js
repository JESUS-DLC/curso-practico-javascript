
// Codigo del cuadrado
console.group("CUADRADO");

const ladoCuadrado = 5;

console.log('los lados del cuadrado miden '+ladoCuadrado  +"cm");

const perimetroCuadrado = ladoCuadrado * 4;

console.log('el perimetro del cuadrado es: ' +perimetroCuadrado  +"cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log('el area del cuadrado es: '+areaCuadrado  +"cm^2");

console.groupEnd();

// Codigo del triangulo
console.group('TRIANGULO');

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log('los lados del trinagulo miden '+ladoTriangulo1 +"cm, "+ladoTriangulo2+"cm, " +baseTriangulo +"cm"  );

const alturaTriangulo = 5.5;

console.log('la altura del triangulo es: '+ alturaTriangulo  +"cm");

const perimetroTriangulo = ladoTriangulo1+ladoTriangulo2+baseTriangulo;

console.log('el perimetro del triangulo es: '+ perimetroTriangulo +"cm");

const areaTriangulo = (baseTriangulo*alturaTriangulo)/2;

console.log('el area del triangulo es: '+ areaTriangulo +"cm^2");

console.groupEnd();

// codigo triangulo
console.group('CIRCULO');

const radioCirculo = 4;

console.log('el radio del circulo es: '+radioCirculo+"cm");

const diametroCirculo = 8;

console.log('el diametro del circulo es: '+diametroCirculo+"cm");

const PI = Math.PI;

console.log('PI es: '+PI);

const perimetroCirculo = diametroCirculo*PI;

console.log('el perimetro del circulo es: '+perimetroCirculo+"cm");

const areaCirculo = (radioCirculo*radioCirculo)*PI;

console.log('el area del circulo es: ' +areaCirculo+"cm^2");

console.groupEnd(); 