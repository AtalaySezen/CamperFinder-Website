//Loader Function
const myPreloader = document.querySelector(".preloader");

document.addEventListener('DOMContentLoaded', () => {
  myPreloader.style.display = "none";
}
);

//Emoji Console
const emoji = ['👯‍', '😸', '🏄', '🚀', '🔥', '🎉', '😄', '🦁'];
function randomEmoji() {
  let random = Math.floor(Math.random() * emoji.length);
  return emoji[random];
};

console.log(
  "%c Camperfinder%s!",
  "background: rgb(40, 64, 12); color: white; ",
  randomEmoji()
)
//Card Href Link
function goLink(event) {
  window.location.href = `${event}.html`
};

function goCity(city) {
  let params = new URLSearchParams(`city=${city}`);
  params.get(city);
  window.location.href = ("kampyerleri.html" + "?" + params);
};





