const id = new URLSearchParams(window.location.search).get("id")
console.log(id);

async function getShowData(id) {
    const response = await fetch(`https://api.tvmaze.com/shows/${id}`)
    const show = await response.json()
    return show
}

async function getEpisodesForShow(id) {
    const response = await fetch(`https://api.tvmaze.com/shows/${id}/episodes`)
    const episodes = await response.json()
    return episodes
}

getShowData(id).then(show => {
    populateShow(show)
})

getEpisodesForShow(id).then(episodes => {
    populateEpisodes(episodes)
})

function populateShow(show) {
    const showContainer = document.getElementById("show")
    const showTitle = document.getElementById("show-title")
    showTitle.innerText = show.name

    showContainer.innerHTML = `
        <div class="show-content">
            <img src="${show.image.medium}" width="250" />
            <div> 
                <p>${show.summary}</p>
            </div>
        </div>
    `
}

function populateEpisodes(episodes) {
    const episodesContainer = document.getElementById("episodes")

    episodes.forEach(episode => {
        const episodeDiv = document.createElement("div")
        episodeDiv.classList.add("episode")

        episodeDiv.innerHTML += 
        `
        <img src=${episode.image.medium} width="200" />
        <p>${episode.summary}</p>
        `

        episodesContainer.appendChild(episodeDiv)
    })
}

const nextShowButton = document.getElementById("next-btn")
nextShowButton.addEventListener("click", () => {
    const splitUrl = window.location.href.split("id=")
    const url = splitUrl[0]

    console.log(splitUrl);

    window.location.href = splitUrl[0] + `id=${+id + 1}`
})