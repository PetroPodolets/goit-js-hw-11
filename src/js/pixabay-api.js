const KEY = "43158866-7219a8d3eb05541ec3ccbc26d";
const URL = "https://pixabay.com/api/";

export function searchPhoto(query) {
    return fetch(`${URL}?key=${KEY}&q=${query}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(data => data.hits);
}