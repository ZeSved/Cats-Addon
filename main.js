async function getLink() {
    fetch('https://api.thecatapi.com/v1/images/search').then(response => {
        return response.json()
    }).then(json => {
        document.getElementById('mainImage').src = json[0].url
    })
}

document.getElementById('mainImage').addEventListener('click', () => {getLink()})

getLink();