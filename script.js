/*
console.log('llegandooooooooossss')
// Tipo de dato: string

let string1 = 'Hola, mundo'

sdfsdfsdfasdfasdf

let string2 = "JavaScript es genial"
let string3 = `${string1} feliz :)`
let string4 = string1 + ' ' + string2

document.querySelector('#header').innerHTML = string4
//console.log(string1)
//console.log(string2)
//console.log(string3)   
//console.log(string4)

let frase = 'JavaScript es Extremadamente Genial'
console.log(frase.length)
// a continuacion se imprime la frase en minusculas, mayusculas y un substring
console.log(frase.toLowerCase())
console.log(frase.toUpperCase())
console.log(frase.substring(0, 10))


const numero = Math.random() * 100;
console.log('Numero random= ', Math.round(numero))


function esPrimo (num) {
    if (num <= 3) 
        return true;

    for (let i = 2; i < num ; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

const numEval = 105;
let primos = [];

for (let i = 1; i <= numEval; i++) {
    if (esPrimo(i)) {
        primos.push(i);
    }
}

console.log(`Números primos entre 1 y ${numEval}: ${primos}`);


const numEval = 60;
let pares = [];
let cantPares = 1;

if (numEval < 10) {
    console.log('El número debe ser mayor a 10');
} else {
    for (le| i > 1; i--) {
        if (i % 2 === 0 && cantPares < 6) {
            pares.push(i);
            cantPares++;  
        }
    }
}
console.log(`Números pares desde ${numEval} hasta 2: ${pares}`);


function fibonacci(numEval) {
    const sequence = [0, 1];
    // sequence = [0, 1, 1, 2, 3];
    while (numEval) {
        const indice1 = sequence[sequence.length - 1];
        const indice2 = sequence[sequence.length - 2];

        console.log('indice1', indice1);
        console.log('indice2', indice2);
        console.log('sequence antes', sequence);
        console.log('sequence.length', sequence.length);
        let result = indice1 + indice2;

        console.log('result', result);
        if (result > numEval) 
            break;

        sequence.push(result);
        console.log('sequence despues', sequence);
    }
    return sequence;
}

const numEval = prompt('Ingrese un número para evaluar la serie Fibonacci:');

const result = fibonacci(numEval);
console.log(result);



const numsEval = []
numsEval[0] = prompt('Ingrese el primer número:'); // 6
numsEval[1] = prompt('Ingrese el segundo número:'); // 8
numsEval[2] = prompt('Ingrese el tercer número:'); // 5
// 6 5 9
console.log('numsEval=', numsEval);

if (numsEval[0] > numsEval[1] && numsEval[0] > numsEval[2]) {
    console.log(`El número mayor es: ${numsEval[0]}`);
} else if (numsEval[1] > numsEval[0] && numsEval[1] > numsEval[2]) {
    console.log(`El número mayor es: ${numsEval[1]}`);
} else if (numsEval[2] > numsEval[0] && numsEval[2] > numsEval[1]) {
    console.log(`El número mayor es: ${numsEval[2]}`);
} else {
    console.log('Hay números iguales, por favor ingrese números diferentes');
}

const numEval = prompt('Ingrese un número para imprimir:');
let sumPares = 0;
let sumImpares = 0;

for (let i = 1; i <= numEval; i++) {
    console.log(i);
    if (i % 2 === 0) {
        sumPares = sumPares + i;
    } else {
        sumImpares = sumImpares + i;
    }
}

const numInicial = prompt('Ingrese el numero inicial:');
const numEval = prompt('Ingrese el numero de elementos del array:');
let nums = [];
for(let i = 1; i <= numEval; i++) {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    nums.push(randomNum);
}
let numsResult = [];
for (let i = 0; i < nums.length; i++) {
    if (nums[i] > numInicial)
        numsResult.push(nums[i]);
}

console.log('Números generados:', nums);
console.log('longitud array nums=', nums.length);
console.log('Números numInicial:', numInicial);
console.log('Números resultado:', numsResult);


const edad = prompt('Ingrese el la edad:');
function categoriaEdad(edad) {

    if (edad > 55) return 'adulto mayor';

    if (edad >= 18) return 'adulto';
    
    if (edad > 12) return 'joven';

    return 'niño';
}
const categoria = categoriaEdad(edad);

let subsidio = categoria === 'niño' || categoria === 'adulto mayor' ? 'si' : 'no';

console.log(`La categoría de la persona es: ${categoria} y tiene subsidio: ${subsidio}`);

const canasta = ['leche', 'pan', 'huevos', 'carne', 'verduras'];

canasta.forEach( (item, key) => { console.log('item=', item, ' key=', key) } );

const copiaCanasta = canasta.map( (item) => {
        if (item !== 'pan') {
            return `nuevo item ${item}` 
        } 
    }
);
const copiaCanasta2 = canasta.filter( (item) =>  item !== 'pan' );

console.log('copiaCanasta2=', copiaCanasta2);

function calcularDescuento(price, descountPercentage) {
    const descuento = (price * descountPercentage) / 100;
    return price - descuento;
}
const precio = 100;
const descuento = 20;
const precioFinal = calcularDescuento(precio, descuento);

console.log('precio=', precio);
console.log('descuento=', descuento);
console.log('precioFinal=', precioFinal);


const greting = (name) => {
    return `Hola 1, ${name}`
};

const newGreting = (name) => `Hola 2, ${name}`;

const resultFun1 = greting('Juan');
const resultFun2 = newGreting('Pedro');

console.log('resultFun1=', resultFun1);
console.log('resultFun2=', resultFun2); 
// Methods that iterate over an array.
// Methods that DO NOT modify the original array (Immutability).

// filter()

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evenNumbers = numbers.filter(number => number % 2 === 0)

console.log(numbers)
console.log(evenNumbers)

// reduce() Â· case 1

const numbersReduce = [1, 2, 3, 4, 5]
const sum = numbersReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

console.log(numbersReduce)
console.log(sum)

// reduce() Â· case 2

const words = ['apple', 'banana', 'hello', 'bye', 'banana', 'bye', 'bye']

const wordFrecuency = words.reduce((accumulator, currentValue) => {
  if (accumulator[currentValue]) {
    accumulator[currentValue]++
  } else {
    accumulator[currentValue] = 1
  }
  return accumulator
}, {})

console.log(wordFrecuency)

// Exercise: Passing Grade Average

const grades = [85, 92, 60, 78, 95, 66, 88, 50, 94]

const passingGrades = grades.filter(grade => grade >= 70)

const averagePassingGrade = passingGrades.reduce((sum, grade) => sum + grade, 0) / passingGrades.length

console.log('Original Grades: ', grades)
console.log('Passing Grades: ', passingGrades)
console.log('Average Passing Grade: ', averagePassingGrade)
*/
console.log(new Date());
const fecha = new Date('1986-02-15');
console.log('fecha=', fecha);
console.log('Año=', fecha.getFullYear());
