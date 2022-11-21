//Loader Function
const myPreloader = document.querySelector('.preloader');

document.addEventListener('DOMContentLoaded',() => {
    setTimeout(() => {
        myPreloader.style.display = 'none';
    }, 100);
}
)
//Emoji Console
const emoji = ['💩', '👯‍', '😸', '🏄', '🚀', '🔥', '🎉', '😄', '🦁'];
function randomEmoji() {
  let random = Math.floor(Math.random() * emoji.length);
  return emoji[random];
}
console.log('%c Camperfinder%s!','background: rgb(40, 64, 12); color: white; ', randomEmoji());