class Product {
    constructor(name, price, category, isInStock) {
        this.id = generateShortId()
        this.name = name
        this.price = price
        this.category = category
        this.isInStock = isInStock
    }
}

const generateShortId = () => {
    const head = Date.now().toString(36);
    const tail = Math.random().toString(36).substring(2, 9);
    return head + tail;
};

console.log(generateShortId());


const laptop = new Product("Laptop", 1200, "Electronics")
const phone = new Product("Phone", 800, "Electronics")
const monitor = new Product("Monitor", 500, "Electronics")

class User {
    constructor(name, email) {
        this.name = name
        this.email = email
        this.cart = []
    }

    addToCart(product) {
        this.cart.push(product)
        console.log(`${product.name} added to cart`);
        renderCart()
    }

    removeFromCart(id) {
        this.cart = this.cart.filter(p => p.id !== id)
        console.log(this.cart);
        
        renderCart()
    }

    showCart() {
        if (this.cart.length === 0) {
            console.log("Nemate dodadeno produkti vo koshnicata");
        } else {
            console.log("Cart items:");
            this.cart.forEach(p => {
                console.log(`${p.name} - ${p.price}`);
            })
        }
    }

    goToCheckout() {
        let sum = 0
        this.cart.forEach(p => {
            sum += p.price
        })
        console.log(`Vasata suma za plakjanje iznesuva ${sum}`);
        return sum
    }

    clearCart() {
        this.cart = []
    }
}

const user = new User("Ognen", "ognen@gmail.com")

const products = [laptop, phone, monitor]

const productsContainer = document.getElementById("products")
const cartContainer = document.getElementById("cart")

function renderProducts() {
    productsContainer.innerHTML = products.map(p =>
        `<div style="border: 1px solid black; padding: 10px; margin: 5px;">
            <h3>${p.name}</h3>
            <p>${p.price}</p>
            <button onclick="user.addToCart(new Product('${p.name}', ${p.price}))">Add to cart</button>
        </div>  
        `).join("")
}

function renderCart() {
    console.log('render cart: ' + user.cart.length);
    console.log(cartContainer);

    console.log(user.cart);

    cartContainer.innerHTML = ""
    user.cart.forEach(p => {
        cartContainer.innerHTML += `
        <div style="border: 1px solid black; padding: 10px; margin: 5px;">
            <h3>${p.name}</h3>
            <p>${p.price}</p>
            <button onclick="user.removeFromCart('${p.id}')">Remove from cart</button>
        </div> `
    })

    console.log(cartContainer.innerHTML);

}

const checkoutBtn = document.getElementById("checkout-btn")
checkoutBtn.addEventListener('click', () => {
    document.getElementById("total").innerHTML = user.goToCheckout()
})

renderProducts()

// user.addToCart(laptop)
// user.addToCart(phone)

user.showCart()

user.goToCheckout()

user.clearCart()

user.showCart()