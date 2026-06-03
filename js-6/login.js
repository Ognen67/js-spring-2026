const loginForm = document.getElementById("login-form")
const users = JSON.parse(localStorage.getItem("users")) || []

loginForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const usernameValue = loginForm.elements['username'].value
    const passwordValue = loginForm.elements['password'].value

    console.log(usernameValue, passwordValue);

    const user = users.find(user => user.username === usernameValue)
    if (!user) {
        alert(`Korisnik so username: ${usernameValue} ne postoi`)
    } else {
        if (user.password === passwordValue) {
            console.log("uspesno se logiravte");

            localStorage.setItem("currentUser", JSON.stringify(user))
            window.location.href = "index.html"
        }
    }
})