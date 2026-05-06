console.log("Hello world!")

// promenlivi ili variables

// deklariranje na promenliva
// let name

// deklariranje i inicijaliziranje na promenliva
let firstName = "Ognen"
console.log(firstName)

firstName = "Petko"
console.log(firstName)

// Basic Data Types in Javascript

// string - text ("Ognen", "test")
let ime = 'Ognen'
let text = "Hello, how are you?"

//  number (123, -89332, 123.3)
let num = 78

const pi = 3.14159

// TypeError: Assignment to constant variable.
// pi = 54123.12

console.log(pi);

// boolean (true/false)
let vrneSneg = true

let test
console.log(test);

test = "testirame promenlivi"
console.log(test);

// Dynamically typed language (javascript, python, ruby)
// Statically typed languages (c, c++, c#, java, rust, go)

let studentName = "John"
let studentAge = "22"
let studentAverage = 8.67

// konkateniranje na stringovi
console.log("Studentot " + studentName + " ima " + studentAge + " godini. " + "Ima prosek: " + studentAverage + ".")
// interpolacija
console.log(`Studentot ${studentName} ima ${studentAge} godini. Ima prosek: ${studentAverage}.`)

let a = 5
let b = 16

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

// modul operator - ostatok pri delenje
console.log(b % a);


let x = 81297

console.log(x % 2);


let age = 17

// Uslovi - conditionals
if (age >= 18) {
    console.log(`Korisnikot ima ${age} godini. Uslovot e zadovolen.`);
} else {
    console.log(`Bidejki korisnikot ima ${age} godini. Uslovot NE e zadovolen.`);
}

x = 9
let y = 3

// Comparing operators - operatori za sporedba
// >
// >=
// <
// <=
// ==

console.log("Ostatok pri delenje e: " + x % 2);

if (x % y == 0) {
    console.log(`${x} e deliv so ${y}`);
} else {
    console.log(`${x} NE e deliv so ${y}`);
}

let vozrast = 61
let pol = "zensko"

if (vozrast >= 64 && pol == "masko") {
    console.log(`Licnosta moze da zema penzija, ima ${vozrast} godini, pol: ${pol}`);
} else if (vozrast >= 62 && pol == "zensko") {
    console.log(`Licnosta moze da zema penzija, ima ${vozrast} godini, pol: ${pol}`);
} else {
    console.log(`Uslovite za penzija ne se ispolneti, licnosta ima ${vozrast} godini`);
}

let prosek = 7.5
let popolnetiMesta = 120

if (prosek > 8 || popolnetiMesta < 100) {
    console.log(`Studentot moze da zema stipendija`);
} else {
    console.log(`Studentot ne moze da zema stipendija`);
}

// FizzBuzz

// Dokolku e deliv so 3, printaj Fizz
// Dokolku e deliv so 5, printaj Buzz
// Dokolku e deliv so 3 i 5 printaj FizzBuzz

let broj = 4

if (broj % 3 == 0 && broj % 5 == 0) {
    console.log("FizzBuzz");
} else if (broj % 3 == 0) {
    console.log(`Fizz`)
} else if (broj % 5 == 0) {
    console.log(`Buzz`);
} else {
    console.log(`Vnesovte broj: ${broj}, ne e deliv so 3 i 5`);
}

// if (broj % 3 == 0 && broj % 5 == 0) {
//     console.log("FizzBuzz");
// }

// if (broj % 3 == 0) {
//     console.log(`Fizz`)
// }

// if (broj % 5 == 0) {
//     console.log(`Buzz`);
// }

// Switch statement

const day = new Date().getDay()
console.log(day);

// if (day == 0) {
//     console.log();
// } else if (day == 1) {

// } else if (day == 2) {

// } ...

// alternativa so switch
switch (day) {
    case 0:
        console.log("Nedela");
        break;
    case 1:
        console.log("Ponedelnik");
        break;
    case 2:
        console.log("Vtornik");
        break;
    case 3:
        console.log("Sreda");
        break;
    case 4:
        console.log("Cetvrtok");
        break;
    case 5:
        console.log("Petok");
        break;
    case 6:
        console.log("Sabota");
        break;
    default:
        console.log(`Vnesovte nevaliden den ${day}`);
        break;
}

// 5 if/else flows 
// 1 switch
// x broj deliv so y
// broj dali e paren ili neparen
// ispecati zbir,razlika,proizvod na 2 broja so promenlivi
// procitajte za funkcii https://www.w3schools.com/js/js_function_intro.asp