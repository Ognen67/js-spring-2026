console.log("JS-2");

function greet() {
    console.log("Zdravo!");
}

greet()
greet()

function greetUser(ime) {
    console.log(`Zdravo ${ime}`);
}

greetUser("Ognen")
greetUser("Valentin")
greetUser("Nikola")

function fizzBuzz(broj) {
    if (broj % 3 == 0 && broj % 5 == 0) {
        console.log(`FizzBuzz`);
    } else if (broj % 3 == 0) {
        console.log(`Fizz`)
    } else if (broj % 5 == 0) {
        console.log(`Buzz`);
    } else {
        console.log(`Vnesovte broj: ${broj}, ne e deliv so 3 i 5`);
    }
}

fizzBuzz(15)
fizzBuzz(12)
fizzBuzz(92)
fizzBuzz(12424)
fizzBuzz(14215)
fizzBuzz(768689)


function add(a, b) {
    console.log(`Zbirot na ${a} i ${b} e: ${a + b}`);
}

// let zbir7 = add(2, 5)
// console.log(zbir7);
add(5332, 9123)
add(5635, -123)


function addReturn(a, b) {
    return a + b
}

let zbir = addReturn(12, 9)

console.log(zbir * zbir);

const novZbir = addReturn(zbir, 150)
console.log(`nov zbir: ${novZbir}`);

let c = addReturn(5332, 9123)

console.log(c);

let x = addReturn(c, 545)
console.log(x);


function celsiusToFahrenheit(c) {
    return (c * 9 / 5) + 32
}

console.log(celsiusToFahrenheit(25));

let f = celsiusToFahrenheit(25)
console.log(f);

// (32°F − 32) × 5/9 = 0°C

function fahrenheitToCelsius(f) {
    return (f - 32) * 5 / 9
}

function printFahrenheitToCelsius(f2, c2) {
    console.log(`${f2}°F e ednakvo na ${c2.toFixed(2)}°C`);
}

let f2 = 90
let c2 = fahrenheitToCelsius(f2)
printFahrenheitToCelsius(f2, c2)

let f3 = 120
let c3 = fahrenheitToCelsius(f3)
printFahrenheitToCelsius(f3, c3)


function feetToMeters(feet) {
    return feet * 0.3048
}

console.log(feetToMeters(50));
console.log(feetToMeters(1560));


const movie1 = {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    genre: "Sci-Fi",
    rating: 8.8
}

const movie2 = {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    genre: "Action",
    rating: 9.0
}

const movie3 = {
    title: "Titanic",
    director: "James Cameron",
    year: 1997,
    genre: "Romance",
    rating: 7.9
}

// const movie3 = {
//     title: "Titanic",
//     director: "James Cameron",
//     year: 1997,
//     genre: "Romance",
//     rating: 7.9,
//     baseImage: {
//         id: 71583,
//         fileName: "inception-image.jpg",
//         a: {
//             b: {
//                 d: "Test nested object"
//             }
//         },
//         e: {
//             c: "asdasd"
//         },
//         path: "https:\/\/www.imdb.com\/storage\/media\/inception-image.jpg"
//     },
// }

console.log("------------------");


console.log(movie1);

console.log(movie1.title);
console.log(movie1.director);
console.log(movie1.rating);

console.log("------------------");

// const allMovies = [movie4, movie5,movi6, movie7,movie1, movie2, movie3]
const favoriteMovies = [movie1, movie2, movie3]

console.log(favoriteMovies);

// console.log(movie3.baseImage.a.b.d);

// index od 0 do n-1 (n e dolzinata na nizata)
const numbers = [124, -12, 2436, 12124, 9834, 92, 5]

console.log(numbers);
console.log(numbers.length);

// console.log(numbers[0]);
// console.log(numbers[1]);

console.log("--------------");

// for ciklus
let sum = 0

for (let i = 0; i < numbers.length; i++) {
    // sum = sum + numbers[i]
    sum += numbers[i]
}

console.log(sum);

// - целзиус во фаренхајт
// - фаренхајт во целзиус
// - стапки во метри
// - креирај објект кој опишува книга
// - креирај објект кој опишува автомобил
// - креирај објект кој опишува студент
// - циклус за печатење на секој втор непарен број од 1 до 100
// - циклус за печатење на секој непарен број од 1 до 50
// - креирај низа од 5 елементи (градови)
// - креирај низа од 10 елементи (држави)
// - итерирај нзиа со помош на for
// - повикување на принт функција за објект внатре во for ciklus



