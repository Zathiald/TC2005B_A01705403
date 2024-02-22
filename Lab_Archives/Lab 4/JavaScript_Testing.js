console.log("hola");
console.info("Esta es una info");
console.warn("Esta es una advertencia");
console.error("Esto es un error");
console.assert(1==1);

// 1. Tabla de cuadrados y cubos
let num = prompt("Por favor, introduce un numero");
document.write("<table class='table is-bordered is-striped is-narrow is-hoverable is-fullwidth'><tr><th><i>Numero</i></th><th><i>Cuadrado</i></th><th><i>Cubo</i></th></tr>");
for(let i = 1; i <= num; i++){
    document.write("<tr><td><i>" + i + "</i></td><td>" + "<i>" + i*i + "</td><td></i>" + "<i>" + i*i*i + "</i></td></tr>");
}
document.write("</table>");

// 2. Suma de números aleatorios
let num1 = Math.floor(Math.random() * 100);
let num2 = Math.floor(Math.random() * 100);
let start = new Date();
let userAnswer = prompt("¿Cuanto es " + num1 + " + " + num2 + "?");
let end = new Date();
let timeTaken = (end - start) / 1000;
if(userAnswer == num1 + num2){
    alert("Correcto! Te tomo " + timeTaken + " segundos.");
} else {
    alert("Incorrecto. Te tomo " + timeTaken + " segundos.");
}

// 3. Contador
function contador(arr){
    let negativos = arr.filter(x => x < 0).length;
    let ceros = arr.filter(x => x === 0).length;
    let positivos = arr.filter(x => x > 0).length;
    return "Numero de negativos: " + negativos + "\nNumero de ceros:" + ceros + "\nNumero de positivos:" + positivos;
}

var arreglo=[-5,-4,-3,-2,-1,0,1,2,3,4,5];
var result = contador(arreglo);

console.log("Pregunta 3")
console.log(arreglo);
console.log(result);



// 4. Promedios
function promedios(arr){
    var result = arr.map(x => x.reduce((a, b) => a + b, 0) / x.length)
    return "El promedio es: " + result + "\n";
}


var arreglo2=[[1,2,3],[4,5,6],[7,8,9]];
var result2= promedios(arreglo2);

console.log("Pregunta 4")
console.log(arreglo2);
console.log(result2);


// 5. Inverso
function inverso(num){
    var reverse = parseInt(num.toString().split('').reverse().join(''))
    return "El numero al reves es: " + reverse;
}

var numero=12345;
var result3=inverso(numero);


console.log("Pregunta 5")
console.log(numero);
console.log(result3);

//6.Calcular Factorial
class FactorialCalculator {
    constructor(number) {
        this.number = number;
    }

    validateNumber() {
        if (this.number < 0) {
            return false;
        }
        return true;
    }

    calculateFactorial() {
        let result = 1;
        for (let i = 2; i <= this.number; i++) {
            result *= i;
        }
        return result;
    }
}

function calcularFactorial() {
    let number = document.getElementById('number').value;
    let calculator = new FactorialCalculator(number);
    if (calculator.validateNumber()) {
        let result = calculator.calculateFactorial();
        document.getElementById('result').innerHTML = "<p class='subtitle is-5'><em> El factorial de " + number  + " es " + result + "</p></em>" ;
    } else {
        document.getElementById('result').innerHTML = "<p class='subtitle is-5'><em>Por favor, ingresa un numero entero no negativo.</p></em>";
    }
}


document.write("<h3 class='title is-3 has-text-centered is-four-fifths'><em> Problema 6</em></h3>");
document.write("<p class='subtitle is-5'><em>El calculo del factorial de un numero es el producto de todos los numeros enteros positivos desde 1 hasta ese numero, por ejemplo el factorial de 5 es 1*2*3*4*5=120</p></em>");
document.write("<input type='number' id='number' class='box' placeholder='Ingresa un numero'>");
document.write("<button class='button is-dark' onclick='calcularFactorial()'> Calcular Factorial</button>");
document.write("<p id='result'></p>");








