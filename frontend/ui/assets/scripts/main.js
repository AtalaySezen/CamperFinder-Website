const myPreloader = document.querySelector(".preloader");
const emoji = ['👯‍', '😸', '🏄', '🚀', '🔥', '🎉', '😄', '🦁'];

//Loader Function
document.addEventListener('DOMContentLoaded', () => {
  myPreloader.style.display = "none";
}
);

//Emoji Console.log();
function randomEmoji() {
  let random = Math.floor(Math.random() * emoji.length);
  return emoji[random];
};

console.log(
  "%c Camperfinder%s!",
  "background: rgb(40, 64, 12); color: white; ",
  randomEmoji()
)

function goLink(event) {
  window.location.href = `${event}.html`
};

function goCity(city) {
  let params = new URLSearchParams(`city=${city}`);
  params.get(city);
  window.location.href = ("campcities.html" + "?" + params);
};





