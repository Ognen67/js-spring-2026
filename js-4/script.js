console.log(1);
console.log(2);
console.log(3);



// JSON

console.log("------");

console.log(1);
setTimeout(() => {
    console.log(2);
}, 2000)
console.log(3);


let count = 0
const interval = setInterval(() => {
    count++
    console.log("tick: " + count);

    if (count >= 1) {
        clearInterval(interval)
        console.log("Time's up!");
    }

}, 1000)

const numbers = [124, 621, 123, 9013, 12315, -1235, 64524]

numbers.map(x => x * 5).forEach(x => console.log(x))

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log("Nastana greshka: " + err))


let posts = []

async function getPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")

        if (!response.ok) {
            throw new Error("Failed to fetch posts: " + response.status)
        }

        posts = await response.json()
        
        renderPosts(posts)

    } catch (error) {
        console.log("Nastana greshka: " + error)
    }

}

getPosts()



