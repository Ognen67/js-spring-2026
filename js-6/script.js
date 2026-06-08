const showsContainer = document.getElementById("shows-container")

let allShows = []
let favorites = JSON.parse(localStorage.getItem("favorites")) || []
console.log(favorites);

let onFavorites = false

const currentUser = JSON.parse(localStorage.getItem("currentUser"))
if(!currentUser) {
    window.location.href = "login.html"
}

document.getElementById("user-greeting").innerText = `Hello ${currentUser.username}`

async function getShows() {
    const response = await fetch("https://api.tvmaze.com/shows")
    const shows = await response.json()

    console.log(shows);

    return shows
}

function showAll() {
    onFavorites = false
    populateShows(allShows)
}

function logout() {
    localStorage.removeItem("currentUser")
    window.location.href = "login.html"
}

function showFavorites() {
    onFavorites = true
    const favoriteShows = allShows.filter(show => favorites.includes(show.id))
    console.log(favoriteShows);
    
    populateShows(favoriteShows)
}

function searchShows() {
    const searchInputValue = document.getElementById("search-input").value.toLowerCase().trim()

    let filteredShows = allShows
    if(onFavorites === true) {
        console.log(onFavorites);
        
        filteredShows = filteredShows.filter(show => favorites.includes(show.id))
    }

    filteredShows = filteredShows.filter(show => show.name.toLowerCase().includes(searchInputValue))
    
    populateShows(filteredShows)
}

function populateShows(shows) {
    showsContainer.innerHTML = ''
    shows.forEach(show => {

        let rating = ""
        for (let i = 0; i < show.rating.average; i++) {
            rating += `<i class="fa fa-star"></i>`
        }
        // showsContainer.innerHTML +=
        //     `<div class="show">
        //         <img src="${show.image.medium}" />
        //         <div class="show-inner">
        //             <div class="show-content">
        //                 <div class="rating">
        //                     ${rating}
        //                 </div>
        //                 <h2>${show.name}</h2>
        //             </div>
        //             <div class="show-footer">
        //                 ${show.officialSite ? `<a href="${show.officialSite}">Official Site</a>` : ''}
        //                 <a href="show.html?id=${show.id}">Learn More</a>
        //             </div>
        //         </div>
        //     </div>`

        const showDivElement = document.createElement("div")
        showDivElement.classList.add("show")

        // showDivElement.addEventListener("click", () => {
        //     alert(show.name + " clicked")
        //     console.log("clicked");
        // })

        const showImage = document.createElement("img")
        showImage.src = show.image.medium

        const showInnerDiv = document.createElement("div")
        showInnerDiv.classList.add("show-inner")
        const showContentDiv = document.createElement("div")
        showContentDiv.classList.add("show-content")

        const ratingDiv = document.createElement("div")
        ratingDiv.classList.add("rating")
        ratingDiv.innerHTML = rating

        const showName = document.createElement("h2")
        showName.innerText = show.name

        showContentDiv.appendChild(ratingDiv)
        showContentDiv.appendChild(showName)

        const showFooterDiv = document.createElement("div")
        showFooterDiv.classList.add("show-footer")

        if (show.officialSite) {
            const officialSiteLink = document.createElement("a")
            officialSiteLink.href = show.officialSite
            officialSiteLink.innerText = "Official Site"
            showFooterDiv.appendChild(officialSiteLink)
        }

        const learnMoreLink = document.createElement("a")
        learnMoreLink.href = `show.html?id=${show.id}`
        learnMoreLink.innerText = "Learn More"
        showFooterDiv.appendChild(learnMoreLink)

        showInnerDiv.appendChild(showContentDiv)
        showInnerDiv.appendChild(showFooterDiv)

        showDivElement.appendChild(showImage)
        showDivElement.appendChild(showInnerDiv)

        const favoriteIcon = document.createElement("i")
        favoriteIcon.classList.add("fa", "fa-bookmark", "fav-icon")

        favoriteIcon.addEventListener("click", () => {
            if (favorites.includes(show.id)) {
                favorites = favorites.filter(f => f !== show.id)
                favoriteIcon.classList.remove("is-fav")
            } else {
                favorites.push(show.id)
                favoriteIcon.classList.add("is-fav")
            }

            localStorage.setItem("favorites", JSON.stringify(favorites))
        })

        if (favorites.includes(show.id)) {
            favoriteIcon.classList.add("is-fav")
        }

        showDivElement.appendChild(favoriteIcon)

        showsContainer.appendChild(showDivElement)
    })
}

getShows().then(shows => {
    allShows = shows
    populateShows(allShows)
})