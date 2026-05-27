const showsContainer = document.getElementById("shows-container")

async function getShows() {
    const response = await fetch("https://api.tvmaze.com/shows")
    const shows = await response.json()

    console.log(shows);

    return shows
}

function populateShows(shows) {
    shows.forEach(show => {

        let rating = ""
        for (let i = 0; i < show.rating.average; i++) {
            rating += `<i class="fa fa-star"></i>`
        }
        showsContainer.innerHTML +=
            `<div class="show">
                <img src="${show.image.medium}" />
                <div class="show-inner">
                 <div class="show-content">
                    <div class="rating">
                       ${rating}
                    </div>
                    <h2 >${show.name}</h2>
                </div>
                <div class="show-footer">
                    ${show.officialSite ? `<a href="${show.officialSite}">Official Site</a>` : ''}
                    <a href="show.html?id=${show.id}">Learn More</a>
                </div>
                </div>
            </div>`
    })
}

getShows().then(shows => populateShows(shows))