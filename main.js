const dogBaseUrl = "https://dog.ceo/api/breeds";
const catApiUrl = "https://api.thecatapi.com/v1/images/search";

let dogRandomImg = document.querySelector('#random-dog');
let catRandomImg = document.querySelector('#random-cat');
let dogBrowse = document.querySelector('#dog-browser');
let catBrowse = document.querySelector('#cat-browser');

function fetchRandomDog(){
    fetch(`${dogBaseUrl}/image/random`)
    .then((res) => res.json())
    .then((data) => {
        dogRandomImg.src = data.message;
    });
}

function fetchRandomCat(){
    fetch(catApiUrl)
    .then((res) => res.json())
    .then((data) => {
        catRandomImg.src = data[0].url;
    });
}

dogBrowse.addEventListener('click', fetchRandomDog);
catBrowse.addEventListener('click', fetchRandomCat);

fetchRandomDog();
fetchRandomCat();
