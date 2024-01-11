if (localStorage.getItem('previousCats') === null)
    localStorage.setItem('previousCats', []);

getLink();

async function getLink() {
    fetch(Math.floor(Math.random() * 100) == 0 ? 'https://api.thedogapi.com/v1/images/search' : 'https://api.thecatapi.com/v1/images/search')
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            document.getElementById('mainCat').src = json[0].url;
            const cats = localStorage.getItem('previousCats').split(',');
            while (cats.length > 10 || cats[0] === '') cats.pop();
            cats.unshift(json[0].url);
            localStorage.setItem('previousCats', cats);
        });
}

function showPrevious() {
    const previousDiv = document.getElementById('previousContainer');
    window.scrollTo(0, 0);
    previousDiv.scrollLeft = 0;
    removeAllChildren(previousDiv);
    const images = localStorage.getItem('previousCats').split(',');
    for (let i = 1; i < images.length; i++) {
        let image = document.createElement('img');
        image.src = images[i];

        image.addEventListener('click', (e) => {
            window.open(e.target.src);
        });

        previousDiv.appendChild(image);
    }
}

document.getElementById('mainCat').addEventListener('click', () => {
    document.getElementById('mainCat').style.cursor = 'wait';
    getLink();
});

document.getElementById('mainCat').addEventListener('load', () => {
    document.getElementById('mainCat').style.cursor = 'pointer';
    document.body.style.cursor = 'default';
    showPrevious();
});

function removeAllChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

localStorage.getItem('jefhuie') ?? 'yes';
