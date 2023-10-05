let searchButton = document.getElementById("searchButton");

//Text According To Seasons
let seasonsText = document.getElementById("seasons");
function getCurrentSeason() {
  const now = new Date();
  const month = now.getMonth() + 1;

  if (month > 3 && month <= 6) {
    seasonsText.innerHTML =
      "İlkbahar'ın tadını en güzel kamp alanlarında çıkarın.";
    return "spring";
  }
  if (month > 6 && month <= 9) {
    seasonsText.innerHTML = "Yaz'ın tadını en güzel kamp alanlarında çıkarın.";
    return "summer";
  }

  if (month > 9 && month <= 12) {
    seasonsText.innerHTML =
      "Sonbahar'ın tadını en güzel kamp alanlarında çıkarın.";
    return "fall";
  }

  if (month >= 1 && month <= 3) {
    seasonsText.innerHTML = "Kış'ın tadını en güzel kamp alanlarında çıkarın.";
    return "winter";
  }

  const day = now.getDate();
  if (month === 3) {
    return day < 22 ? "winter" : "spring";
  }

  if (month === 6) {
    return day < 22 ? "spring" : "summer";
  }

  if (month === 9) {
    return day < 22 ? "summer" : "fall";
  }

  if (month === 12) {
    return day < 22 ? "fall" : "winter";
  }

  console.error("Mevsim Hesaplanamadı");
}

//Start seasons function
getCurrentSeason();

async function placesApi(url) {
  const response = await fetch(url);
  data = await response.json();
  await showPlaces(data);
}

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

const searchInput = document.querySelector(".searchInput");
const input = document.getElementById("input");
const resultBox = searchInput.querySelector(".resultBox");
const icon = searchInput.querySelector(".icon");
let textSearch = document.getElementById("text-search");
let linkTag = searchInput.querySelector("a");
let webLink;

// if user press any key and release
input.onkeyup = (e) => {
  let userData = e.target.value; //
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
};

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
  let params = new URLSearchParams(`city=${id}`);
  params.get(id);
  window.location.href = "kampyerleri.html" + "?city=" + id;
}
