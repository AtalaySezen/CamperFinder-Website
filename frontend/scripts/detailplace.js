//Swiper Start
let swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//DOMS
let iconCheck = `<svg class="icon-check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
<path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
</svg>`;
let iconCross = `<svg class="icon-cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
</svg>`;
let detailPlaces = "https://camperfinder.org/node/node2/";
let loader = document.getElementById("loaderCompass");
let iconsDiv = document.getElementById("icons-group");
let detailsHtml = document.getElementById("details-info");

async function placesApi(url) {
    const response = await fetch(url);
    data = await response.json();
    detailInfo();
    showPlaces(data);
    shuffleData();
}

placesApi(detailPlaces);

let choosenCity;

async function showPlaces() {
    let html2 = ``;
    let params = new URL(document.location).searchParams;
    let name = params.get("id");
    let html = ``;
    let suggestionCards = document.getElementById("suggestion-cards");

    await data.map((x) => {
        if (name == x.num) {
            document.title = "CamperFinder | " + x.campPlaceName;
            html2 += `
            <h1 class="header-detail">${x.campPlaceName} Hakkında</h1>
            <p class="detail-subheader">${x.info}</p>
            </div> `;
            detailsHtml.innerHTML = html2;
            choosenCity = x.city;
        } else {
            return false;
        }
    });

    await splicedCity.slice(0, 3).map(y => {
        html += `
     <div class="card-flex" onclick="goDetail(${y.num})">
     <div class="places-card" style="background-image:url('${y.image}');">
     </div>
     <h1 class="header-place2">${y.campPlaceName}</h1>
     <p class="info-place">${y.info}</p>
     <a class="read-all" onclick="goDetail(${y.num})">Devamını Oku</a>
     </div>`;
        suggestionCards.innerHTML = html;
    })

}

let splicedCity = [];
//Get Random Data 
function shuffleData() {
    let shuffledArray = [];
    shuffledArray = data.sort(() => 0.52 - Math.random());
    shuffledArray.map(y => {
        if (choosenCity == y.city) {
            splicedCity.push(y);
        }
    })

}




let detailInfoApi = "http://camperfinder.org/node3/node4";

async function detailInfo() {
    let html = ``;
    //Get Params ID
    let params = new URL(document.location).searchParams;
    let name = params.get("id");
    let swiperHtml = document.getElementById("swiper");
    let iconToilet = document.getElementById("icon-toilet");
    let iconInternet = document.getElementById("icon-internet");
    let iconMarket = document.getElementById("icon-market");
    let iconShower = document.getElementById("icon-shower");

    fetch(detailInfoApi)
        .then((response) => response.json())
        .then((data) =>
            data.map((y) => {
                if (y.num == name) {
                    html += `
                        <div class="swiper-slide">
                         <img src="${y.image1}" alt="${y.alt}">
                         </div>
                         <div class="swiper-slide">
                         <img src="${y.image2}" alt="${y.alt}">
                         </div>
                        <div class="swiper-slide">
                        <img src="${y.image3}"  alt="${y.alt}">
                        </div>`;

                    swiperHtml.innerHTML = html;
                    swiperHtml.classList.remove("none");
                    detailsHtml.classList.remove("none");
                    iconsDiv.classList.remove("none");

                    if (y.toilet == true) {
                        iconToilet.innerHTML = iconCheck;
                    } else {
                        iconToilet.innerHTML = iconCross;
                    }
                    if (y.internet == true) {

                        iconInternet.innerHTML = iconCheck;
                    } else {
                        iconInternet.innerHTML = iconCross;
                    }
                    if (y.market == true) {
                        iconMarket.innerHTML = iconCheck;
                    } else {
                        iconMarket.innerHTML = iconCross;
                    }
                    if (y.shower == true) {
                        iconShower.innerHTML = iconCheck;
                    } else {
                        iconShower.innerHTML = iconCross;
                    }

                }
                //Show Datas On HTML
                loader.style.display = "none";
                document.getElementById("suggest-area").classList.remove("none");
            })
        );
}

//Start APİ

//Detail page of random data
function goDetail(num) {
    let params = new URLSearchParams(`id=${num}`);
    params.get("?id");
    params.get(num);
    window.location.href = ("detailplace.html" + "?" + params);
};

//go back to your current city page
function backToPlaces() {
    let params = new URLSearchParams(`city=${choosenCity}`);
    params.get(choosenCity);
    window.location.href = ("kampyerleri.html" + "?" + params);
}

