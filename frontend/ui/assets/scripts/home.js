let searchButton = document.getElementById("searchButton");
let seasonsText = document.getElementById("seasons");
const searchInput = document.querySelector(".searchInput");
const inputSearch = document.getElementById("input");
const resultBox = searchInput.querySelector(".resultBox");
const icon = searchInput.querySelector(".icon");
let textSearch = document.getElementById("text-search");
let linkTag = searchInput.querySelector("a");
let webLink;

function getCurrentSeason() {
  const now = new Date();
  const month = now.getMonth() + 1;

  const seasons = [
    { name: "kış", startMonth: 1, endMonth: 3 },
    { name: "ilkbahar", startMonth: 4, endMonth: 6 },
    { name: "yaz", startMonth: 7, endMonth: 9 },
    { name: "sonbahar", startMonth: 10, endMonth: 12 },
  ];

  for (const season of seasons) {
    if (month >= season.startMonth && month <= season.endMonth) {
      seasonsText.innerHTML = `
      <h2 class="seasons-header">
      ${
        season.name.charAt(0).toUpperCase() + season.name.slice(1)
      }'ın tadını en güzel kamp alanlarında çıkarın.</h2>`;
      return season.name;
    }
  }
  console.error("Mevsim Hesaplanamadı");
}

//Start seasons function
getCurrentSeason();

let suggestions = [
  "İzmir",
  "Ankara",
  "İstanbul",
  "Antalya",
  "Sakarya",
  "Kırklareli",
  "Edirne",
  "Bursa",
  "Eskişehir",
  "Tekirdağ",
];

inputSearch.addEventListener("keyup", (e) => {
  let userData = e.target.value;
  let emptyArray = [];
  if (userData) {
    emptyArray = suggestions.filter((data) => {
      return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
    });
    emptyArray = emptyArray.map((data) => {
      return (data = `<li id=${data}>` + data + `</li>`);
    });
    textSearch.innerHTML =
      "CamperFinder'a hoşgeldin aradığın şehri kolayca bul!";
    searchInput.classList.remove("none"); //show
    showSuggestions(emptyArray);
    let allList = resultBox.querySelectorAll("li");
    for (let i = 0; i < allList.length; i++) {
      allList[i].setAttribute("onclick", "select(id)");
    }
  } else {
    searchInput.classList.add("none"); //hide
    textSearch.innerHTML = "CamperFinder";
  }
});

function showSuggestions(list) {
  let listData;
  if (!list.length) {
    userValue = inputBox.value;
    listData = "<li>" + userValue + "</li>";
  } else {
    listData = list.join("");
  }
  resultBox.innerHTML = listData;
}

function select(id) {
  window.location.href = "kampyerleri.html" + "?city=" + id;
}
