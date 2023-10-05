//Swiper Start
let swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nedatatEl: ".swiper-button-nedatat",
    prevEl: ".swiper-button-prev",
  },
});
let iconCheck = `<svg class="icon-check" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>`;
let iconCross = `
<svg class="icon-cross" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>`;
let params = new URL(document.location).searchParams;
let selectedId = params.get("id");
let loader = document.getElementById("loaderCompass");
let iconsDiv = document.getElementById("icons-group");
let detailsHtml = document.getElementById("details-info");
let detailPlaces = `https://camperfinder.org/api/camperFinder/get/${selectedId}`;

async function placesApi(url) {
  const response = await fetch(url);
  data = await response.json();
  showPlaces(data);
  // shuffleData();
}

placesApi(detailPlaces);

let choosenCity;

async function showPlaces() {
  let swiperHtml = document.getElementById("swiper");
  let iconToilet = document.getElementById("icon-toilet");
  let iconInternet = document.getElementById("icon-internet");
  let iconMarket = document.getElementById("icon-market");
  let iconShower = document.getElementById("icon-shower");
  let html2 = ``;
  choosenCity = data.city;
  let html = ``;
  document.title = "CamperFinder | " + data.campPlaceName;
  if(data.placeDetail.length != 0 ){
  html2 += `
            <h1 class="header-detail">${data.campPlaceName} Hakkında</h1>
            <p class="detail-subheader">${data.info}</p>
            </div> `;
  detailsHtml.innerHTML = html2;
  html += `
  <div class="swiper-slide">
   <img src="${data.placeDetail[0]?.image1}" alt="${data.placeDetail[0]?.alt}">
   </div>
   <div class="swiper-slide">
   <img src="${data.placeDetail[0]?.image2}" alt="${data.placeDetail[0]?.alt}">
   </div>
  <div class="swiper-slide">
  <img src="${data.placeDetail[0]?.image3}"  alt="${data.placeDetail[0]?.alt}">
  </div>`;

  swiperHtml.innerHTML = html;
  swiperHtml.classList.remove("none");
  detailsHtml.classList.remove("none");
  iconsDiv.classList.remove("none");
  if (data.placeDetail[0].toilet == true) {
    iconToilet.innerHTML = iconCheck;
  } else {
    iconToilet.innerHTML = iconCross;
  }
  if ((data.placeDetail[0].internet == true)) {
    iconInternet.innerHTML = iconCheck;
  } else {
    iconInternet.innerHTML = iconCross;
  }
  if (data.placeDetail[0].market == true) {
    iconMarket.innerHTML = iconCheck;
  } else {
    iconMarket.innerHTML = iconCross;
  }
  if (data.placeDetail[0].shower == true) {
    iconShower.innerHTML = iconCheck;
  } else {
    iconShower.innerHTML = iconCross;
  }
  loader.style.display = "none";

}else{
  loader.style.display = "none";
 document.getElementById('none-data').innerHTML = "Çok Yakında!"
}

}



function goDetail(num) {
  let params = new URLSearchParams(`id=${num}`);
  params.get("?id");
  params.get(num);
  window.location.href = "detailplace.html" + "?" + params;
}

//go back to your current city page
function backToPlaces() {
  let params = new URLSearchParams(`city=${choosenCity}`);
  params.get(choosenCity);
  window.location.href = "kampyerleri.html" + "?" + params;
}
