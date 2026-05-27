
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


function renderPosts(posts) {
    const postsContainer = document.getElementById("posts")

    // posts.forEach(post => {
    //     postsContainer.innerHTML +=
    //         `
    //     <div class="post">
    //         <h3>${post.title}</h3>
    //         <p>${post.body}</p>
    //     </div>
    //     `
    // })

    postsContainer.innerHTML = posts.map(post =>
        `<div class="post ${post.id % 2 === 0 ? 'even' : ''}">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            ${post.id % 2 !== 0 ?
            '<img class="absolute" src="https://media.istockphoto.com/id/1167494424/vector/red-vector-sticker-on-sale-now.jpg?s=612x612&w=0&k=20&c=QMIXi66bOM4XiYEIamBp76tgAjhBNjWuINh67C91VO8="/>' : ''}
        </div>`).join("")

        
   const allPosts = Array.from(document.getElementsByClassName("post"))
   

   allPosts.forEach(post => {
    console.log(post);
    post.style = "border: 3px solid black"

    // post.className += " test"
    // post.classList.add("test")
    post.classList.toggle("even")
    console.log(post.classList);

    post.addEventListener('click', () => {
        // alert("Post clicked")
        post.classList.toggle("even")
    })
    
   })
   
}

getPosts()

// DOM - Document object model
const titleEl = document.getElementById("title")
titleEl.innerHTML = "<span>New title</span>"

// document.getElementsByClassName()
// document.getElementsByName()
// document.getElementsByTagName()
document.querySelector(".title")
const query = document.querySelectorAll("#posts")
console.log("query: ", query);



// Free public api kako sto e "https://jsonplaceholder.typicode.com/posts"
// Fetch + Display na HTML page + Conditional Style
// Free APIs github below:
// https://github.com/public-apis/public-apis