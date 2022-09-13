const button = document.querySelector('.clickMe')
const image = document.querySelector('.hero')
button.addEventListener('click', (e) => {
    image.classList.remove('none');
})