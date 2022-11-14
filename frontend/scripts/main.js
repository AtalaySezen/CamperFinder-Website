//Loader Function
const myPreloader = document.querySelector('.preloader');

document.addEventListener('DOMContentLoaded',() => {
    setTimeout(() => {
        myPreloader.style.display = 'none';
    }, 100);
}
)