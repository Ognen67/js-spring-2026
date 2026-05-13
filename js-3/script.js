const students = [
    {
        name: "Ана",
        surname: "Петрова",
        avg: 9.2,
        city: "Скопје",
        print: function () {
            console.log(`Studentot so ime ${this.name}, i prezime ${this.surname} ima prosek ${this.avg} i moze da aplicira za stipenidja`);
        }
    },
    {
        name: "Марко", surname: "Ристов", avg: 7.5, city: "Битола", print: function () {
            console.log(`Studentot so ime ${this.name}, i prezime ${this.surname} ima prosek ${this.avg} i moze da aplicira za stipenidja`);
        }
    },
    {
        name: "Сара", surname: "Јовева", avg: 8.8, city: "Охрид", print: function () {
            console.log(`Studentot so ime ${this.name}, i prezime ${this.surname} ima prosek ${this.avg} i moze da aplicira za stipenidja`);
        }
    },
    {
        name: "Лука", surname: "Димов", avg: 6.1, city: "Скопје", print: function () {
            console.log(`Studentot so ime ${this.name}, i prezime ${this.surname} ima prosek ${this.avg} i moze da aplicira za stipenidja`);
        }
    },
    {
        name: "Ема", surname: "Николова", avg: 9.8, city: "Струга", print: function () {
            console.log(`Studentot so ime ${this.name}, i prezime ${this.surname} ima prosek ${this.avg} i moze da aplicira za stipenidja`);
        }
    },
]

console.log(students);

// function logStudent(student) {
//     console.log(`Studentot so ime ${student.name}, i prezime ${student.surname} ima prosek ${student.avg} i moze da aplicira za stipenidja`);
// }

for (let i = 0; i < students.length; i++) {
    if (students[i].avg >= 8) {
        // console.log(students[i]);
        // logStudent(students[i])
        // console.log(`Studentot so ime ${students[i].name}, i prezime ${students[i].surname} ima prosek ${students[i].avg} i moze da aplicira za stipenidja`);

        students[i].print()
    }
}

let avgSum = 0
for (let i = 0; i < students.length; i++) {
    // console.log(students[i].avg);
    console.log("-----");
    // 0
    // avgSum = avgSum + students[i].avg 
    avgSum += students[i].avg

    console.log(avgSum);
}

let prosekNaSite = (avgSum / students.length).toFixed(2)

console.log(prosekNaSite);

// for of
for (let student of students) {
    student.print()
}

students.forEach(function (student) {
    student.print()
})

students.forEach(student => student.print())

let broj = 0
avgSum = 0

while (broj < students.length) {
    avgSum += students[broj].avg

    broj++
}
console.log((avgSum / 5).toFixed(2));

let y = 2
do {
    console.log(y);
    y++
} while (y < 5)


console.log("----------------------");

let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length);

// fruits.length = 2

// console.log(fruits);

console.log(fruits.toString());

// console.log(fruits.at(2));
console.log(fruits[2]);


console.log(fruits.join(" * "));


const poppedFruit = fruits.pop()
console.log(fruits);
console.log("Izbrishan bese " + poppedFruit);

let newLength = fruits.push("Kiwi", "Mango")

console.log(fruits);
console.log(newLength);

const shiftedFruit = fruits.shift();
console.log(shiftedFruit);
console.log(fruits);


newLength = fruits.unshift("Lemon")
console.log(fruits);
console.log(newLength);

// delete fruits[1]
console.log(fruits);

// fruits.forEach(fruit => console.log((fruit)))

const concatArr = ["test", "test2"]
const concatArr2 = ["1", "2"]
const concatedArrays = fruits.concat(concatArr, concatArr2)

console.log(concatedArrays);

const nestedArray = [[1, 2], [3, [7, 8], [3, 4, [2, 5]], 4], [5, 6]]
console.log(nestedArray);

const flatArr = nestedArray.flat(9999999)
console.log(flatArr);


fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3)

console.log(citrus);
console.log(fruits);

const splicedFruits = fruits.splice(2, 1, "Kiwi")

console.log(splicedFruits);
console.log(fruits);

fruits.forEach(function (fruit) {
    console.log(fruit);
})

fruits.forEach(fruit => {
    console.log(fruit);
})

const numbers = [1, 2, 3, 4, 5]


// const doubledNumbers = numbers.map(number => {
//     return number * 2
// })

const doubledNumbers = numbers.map(number => number * number)

console.log(doubledNumbers);

// const highAvg = students.filter(s => {
//     return s.avg > 8
// })

const highAvg = students.filter(s => s.avg > 8)
highAvg.forEach(student => student.print())

const topStudent = students.find(s => s.avg > 9.5)
console.log(topStudent);


// console.log(highAvg);

let sumAvg = students.reduce((acc, s) => acc + s.avg, 0)
console.log((sumAvg/students.length).toFixed(1));

// - Анализа на низа градови
// - Подреди по популација
// - Кои се трите најнаселени градови
// - Сите градови што почнуваат на А и имаат над милион жители
// - Просек од вкупен број на жители од сите градови