const formElement = document.getElementById("form")
const booksTable = document.getElementById("books-table")

let editRowId

formElement.addEventListener("submit", (event) => {
    event.preventDefault()

    const title = formElement.elements['book-title'].value
    const author = formElement.elements['book-author'].value
    const year = formElement.elements['book-year'].value
    const genre = formElement.elements['book-genre'].value

    if (editRowId) {
        const row = document.getElementById(editRowId)

        row.cells[0].innerText = formElement.elements['book-title'].value
        row.cells[1].innerText = formElement.elements['book-author'].value
        row.cells[2].innerText = formElement.elements['book-year'].value
        row.cells[3].innerText = formElement.elements['book-genre'].value

        const addBook = document.getElementById("add-book")
        addBook.classList.toggle("edit-btn")
        addBook.innerText = "Add Book"

        editRowId = null
    } else {
        const rowId = 'row-' + Date.now()
        const row = document.createElement("tr")
        row.id = rowId


        row.innerHTML =
            `
        <td>${title}</td>
        <td>${author}</td>
        <td>${year}</td>
        <td>${genre}</td>
        <td>
            <button onclick="editRow('${rowId}')">Edit</button>
            <button onclick="deleteRow('${rowId}')">Delete</button>
        </td>
        `
        booksTable.appendChild(row)
    }
    
    formElement.reset()
})

function deleteRow(rowId) {
    document.getElementById(rowId).remove()
}

function editRow(rowId) {
    const row = document.getElementById(rowId)

    const cells = row.querySelectorAll('td')
    console.log(cells);

    formElement.elements['book-title'].value = cells[0].innerText
    formElement.elements['book-author'].value = cells[1].innerText
    formElement.elements['book-year'].value = cells[2].innerText
    formElement.elements['book-genre'].value = cells[3].innerText

    editRowId = rowId

    const addBook = document.getElementById("add-book")
    addBook.classList.toggle("edit-btn")
    addBook.innerText = "Update Book"

}