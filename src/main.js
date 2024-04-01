import { searchPhoto } from "./js/pixabay-api.js";
import { showErrorMessage, renderImage } from "./js/render-functions.js";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const formEl = document.querySelector('form');
const images = document.querySelector('.list');
const loader = document.querySelector('.loader');

function showLoad() {
    loader.style.display = "block";
}

function hideLoad() {
    loader.style.display = "none";
}

hideLoad();


formEl.addEventListener('submit', function (event) {
    event.preventDefault();
    images.innerHTML = "";
    showLoad();
    const value = document.querySelector("#value");
    const query = value.value.trim();

    if (!query) {
        showErrorMessage();
        hideLoad();
        return;
    }

    searchPhoto(query).then(arrayImg => {
        if (arrayImg.length === 0) {
            throw new Error("No images found");
        }

        renderImage(images, arrayImg);

        new SimpleLightbox('.list li a', {
            captionDelay: 300,
            captions: true,
            captionsData: "alt",
            captionClass: "color-style",

        }).refresh();
    }).catch(() => {
        showErrorMessage();
    }).finally(() => {
        hideLoad();

    });
    formEl.reset();
});


