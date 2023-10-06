const urlParams = new URLSearchParams(window.location.search);
const cityParam = urlParams.get("city");
let apiPlaces = `https://camperfinder.org/api/camperfinder/city/city/${cityParam}`;

async function placesApi(url) {
  const response = await fetch(url);
  data = await response.json();
  await showPlaces(data);
}

//Show Data HTML;
async function showPlaces(data) {
  let html = ``;
  let cardsDiv = document.getElementById("campplaces");
  let loader = document.getElementById("showLoader");
  let headerCamp = document.getElementById("header-camp");
  let params = new URL(document.location).searchParams;
  let name = params.get("city");
  let capitalized = name.charAt(0).toLocaleUpperCase() + name.slice(1);
  let capitalizedTurkish = capitalized.replace("g", "ğ").replace("I", "İ");
  let cards = document.querySelectorAll(".card-flex");
  let btnShowMore = document.getElementById("show-more");

  try {
    data.map((x) => {
      document.title =
        "CamperFinder | " + capitalizedTurkish + " Kamp Alanları";
      html += `
             <div class="card-flex " onclick="goDetail('${x._id}')">
             <div class="places-card" style="background-image:url('${x.image}');">
             </div>
             <h1 class="header-place">${x.campPlaceName}</h1>
             <p class="info-place">${x.info}</p>
             <a class="read-all" onclick="goDetail('${x._id}')">Devamını Oku</a>
             </div>`;

      cardsDiv.innerHTML = html;
      headerCamp.innerHTML = `${capitalized} Kamp Alanları`;
      loader.style.display = "none";

      btnShowMore.addEventListener("click", () => {
        for (let i = 9; i < cards.length; i++) {
          cards[i].classList.remove("hide-card");
          btnShowMore.classList.add("hide-card");
        }
      });

      if (cards.length > 6) {
        btnShowMore.classList.remove("none");
        for (let i = 6; i < cards.length; i++) {
          cards[i].classList.add("hide-card");
        }
      }
    });
  } catch (error) {
    console.error("Bir hata oluştu: ", error);
  }
}

//Start APİ
placesApi(apiPlaces);

function goDetail(num) {
  let params = new URLSearchParams(`id=${num}`);
  window.location.href = "detailplace.html" + "?" + params;
}
