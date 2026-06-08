// const book1 = {
//     name: "1984",
//     author:"George Orwell",
//     pages: 328
// }

// const book2 = {
//     title: "1984",
//     author:"George Orwell",
//     pages: 328,
//     genre: "saadsas"
// }


// const books = [book1, book2]

// books.forEach(book => {
//     console.log(book.title);
// })

class Book {
    constructor(title, author, pages) {
        this.title = title
        this.author = author
        this.pages = pages
    }
}

console.log(Book);


const book1 = new Book("1984", "George Orwell", 328)

// console.log(book1);

class Student {
    constructor(name, surname, avg, city) {
        this.name = name
        this.surname = surname
        this.avg = avg
        this.city = city
    }
    print() {
        console.log(`Studentot so ime ${this.name}, i prezime ${this.surname} ima prosek ${this.avg} i moze da aplicira za stipenidja`);
    }
    isEligibleForStipend() {
        return this.avg >= 8
    }
}

const student1 = new Student("Ana", "Petrova", 9.2, "Skopje")
const student2 = new Student("Marko", "Ristoov", 7.5, "Bitola")
const student3 = new Student("Sara", "Joveva", 8.8, "Ohrid")
const student4 = new Student("Luka", "Dimov", 6.1, "Skopje")
const student5 = new Student("Ema", "Nikolova", 9.8, "Struga")

const students = [
    student1, student2, student3, student4, student5
]

console.log(students);

students.forEach(student => {
    if(student.isEligibleForStipend()) {
        student.print()
    }
})




///

// const students = [
//     {
//         name: "Ана",
//         surname: "Петрова",
//         avg: 9.2,
//         city: "Скопје",
//         print: function () {
//             console.log(`Studentot so ime ${this.name}, i prezime ${this.surname} ima prosek ${this.avg} i moze da aplicira za stipenidja`);
//         }
//     },
//     {
//         name: "Марко", surname: "Ристов", avg: 7.5, city: "Битола", print: function () {
//             console.log(`Studentot so ime ${this.name}, i prezime ${this.surname} ima prosek ${this.avg} i moze da aplicira za stipenidja`);
//         }
//     },
//     {
//         name: "Сара", surname: "Јовева", avg: 8.8, city: "Охрид", print: function () {
//             console.log(`Studentot so ime ${this.name}, i prezime ${this.surname} ima prosek ${this.avg} i moze da aplicira za stipenidja`);
//         }
//     },
//     {
//         name: "Лука", surname: "Димов", avg: 6.1, city: "Скопје", print: function () {
//             console.log(`Studentot so ime ${this.name}, i prezime ${this.surname} ima prosek ${this.avg} i moze da aplicira za stipenidja`);
//         }
//     },
//     {
//         name: "Ема", surname: "Николова", avg: 9.8, city: "Струга", print: function () {
//             console.log(`Studentot so ime ${this.name}, i prezime ${this.surname} ima prosek ${this.avg} i moze da aplicira za stipenidja`);
//         }
//     },
// ]