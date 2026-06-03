const formElement = document.getElementById("form")
const booksTable = document.getElementById("books-table")

let darkMode = JSON.parse(localStorage.getItem("dark-mode"))

if (darkMode === true) {
    document.body.classList.add("dark")
} else {
    document.body.classList.remove("dark")
}

function toggleDarkMode() {
    const isDark = document.body.classList.toggle("dark")
    localStorage.setItem("dark-mode", isDark)
}

let books = JSON.parse(localStorage.getItem("books"))
console.log(books);

if (books === null) {
    books = []
    localStorage.setItem("books", "[]")
}

function renderBooks() {
    const tableBody = booksTable.querySelector("tbody")
    tableBody.innerHTML = ""
    books.forEach(book => {
        const row = document.createElement("tr")

        row.innerHTML =
            `
            <td>${book.bookTitle}</td>
            <td>${book.bookAuthor}</td>
            <td>${book.bookYear}</td>
            <td>${book.bookGenre}</td>
            <td>
                <button onclick="editRow('${book.id}')">Edit</button>
                <button onclick="deleteRow('${book.id}')">Delete</button>
            </td>
        `

        tableBody.appendChild(row)
    })
}

renderBooks()

let editBookId

formElement.addEventListener("submit", (event) => {
    event.preventDefault()

    const title = formElement.elements['book-title'].value
    const author = formElement.elements['book-author'].value
    const year = formElement.elements['book-year'].value
    const genre = formElement.elements['book-genre'].value

    if (editBookId) {
        const book = books.find(book => book.id === editBookId)

        book.bookTitle = formElement.elements['book-title'].value
        book.bookAuthor = formElement.elements['book-author'].value
        book.bookYear = formElement.elements['book-year'].value
        book.bookGenre = formElement.elements['book-genre'].value

        localStorageSetItem("books", books)
        renderBooks()

        // update submit button
        const addBook = document.getElementById("add-book")
        addBook.classList.remove("edit-btn")
        addBook.innerText = "Add Book"

        // exit edit mode
        editBookId = null
    } else {
        const bookId = 'book-' + Date.now()

        const newBook = {
            id: bookId,
            bookTitle: title,
            bookAuthor: author,
            bookYear: year,
            bookGenre: genre
        }

        books.push(newBook)

        localStorageSetItem("books", books)
        renderBooks()
    }

    formElement.reset()
})

function localStorageSetItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}


function deleteRow(bookId) {
    books = books.filter(book => book.id !== bookId)

    localStorageSetItem("books", books)
    renderBooks()
}

function editRow(bookId) {
    const book = books.find(book => book.id === bookId)

    formElement.elements['book-title'].value = book.bookTitle
    formElement.elements['book-author'].value = book.bookAuthor
    formElement.elements['book-year'].value = book.bookYear
    formElement.elements['book-genre'].value = book.bookGenre

    editBookId = bookId

    const addBook = document.getElementById("add-book")
    addBook.classList.add("edit-btn")
    addBook.innerText = "Update Book"
}