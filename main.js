const catApiUrl = "https://api.thecatapi.com/v1/images/search";
const dogApiUrl = "https://dog.ceo/api/breeds/image/random";

const topImage = document.getElementById('top-image');
const bottomImage = document.getElementById('bottom-image');
const dogBrowserBtn = document.getElementById('dog-browser');
const catBrowserBtn = document.getElementById('cat-browser');

dogBrowserBtn.addEventListener('click', fetchRandomDogImage);
catBrowserBtn.addEventListener('click', fetchRandomCatImage);

function fetchRandomDogImage() {
    fetch(dogApiUrl)
        .then(response => response.json())
        .then(data => {
            const imageUrl = data.message;
            bottomImage.src = imageUrl;
        })
        .catch(error => console.error('Error fetching dog image:', error));
}

function fetchRandomCatImage() {
    fetch(catApiUrl)
        .then(response => response.json())
        .then(data => {
            const imageUrl = data[0].url;
            topImage.src = imageUrl;
        })
        .catch(error => console.error('Error fetching cat image:', error));
}
