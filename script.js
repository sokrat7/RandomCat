const button = document.querySelector('.btn');
const image = document.querySelector('.img');
const url = 'https://cataas.com/cat/cute/says/Meow?json=true';

async function fetchHandler() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(response);

        image.src = data.url;
    } catch (error) {
        console.log(error);
    }
};

button.addEventListener('click', () => {
    fetchHandler();
});