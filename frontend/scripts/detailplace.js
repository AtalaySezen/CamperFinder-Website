//Get Query Params
let detailPlaces = "https://camperfinder.org/node/node2/";

async function placesApi(url) {
    const response = await fetch(url);
    data = await response.json();
    showPlaces(data);
}

function showPlaces(data) {
    let html2 = ``;
    let detailsHtml = document.getElementById("details-info");
    let loader = document.getElementById("showLoader");
    let params = new URL(document.location).searchParams;
    let name = params.get("id");
    data.map((x) => {
        if (name == x.num) {
            document.title = "CamperFinder | " + x.campPlaceName;
            html2 += `
            <h1 class="header-detail">${x.campPlaceName} Hakkında</h1>
            <p class="detail-subheader">${x.info}</p>
            </div> `;
            detailsHtml.innerHTML = html2;
            loader.style.display = "none";
        }
    });
}

//Start APİ
placesApi(detailPlaces);

let detailInfoApı = "http://camperfinder.org/node3/node4";
function detailInfo() {
    let html = ``;
    //Get Params ID
    let params = new URL(document.location).searchParams;
    let name = params.get("id");
    let swiperHtml = document.getElementById("swiper");
    let iconToilet = document.getElementById("icon-toilet");
    let iconInternet = document.getElementById("icon-internet");
    let iconMarket = document.getElementById("icon-market");
    let iconShower = document.getElementById("icon-shower");

    fetch(detailInfoApı)
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
                        <img src="${y.image3}" loading="lazy" alt="${y.alt}">
                        </div>`;
                    swiperHtml.innerHTML = html;

                    if (y.toilet == true) {
                        iconToilet.innerHTML = `
                        <svg class="icon-check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path
                            d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                        </svg>`;
                    } else {
                        iconToilet.innerHTML = `
                            <svg class="icon-cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                            <path
                                d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
                             </svg>`;
                    }
                    if (y.internet == true) {
                        iconInternet.innerHTML = `
                            <svg class="icon-check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                            </svg>`;
                    } else {
                        iconInternet.innerHTML = `
                                <svg class="icon-cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
                                 </svg>`;
                    }
                    if (y.market == true) {
                        iconMarket.innerHTML = `
                                <svg class="icon-check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path
                                    d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                                </svg>`;
                    } else {
                        iconMarket.innerHTML = `
                        <svg class="icon-cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        <path
                            d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
                         </svg>`;
                    }
                    if (y.shower == true) {
                        iconShower.innerHTML = `
                                    <svg class="icon-check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path
                                        d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                                    </svg>`;
                    } else {
                        iconShower.innerHTML = `
                                        <svg class="icon-cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                        <path
                                            d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
                                         </svg>`;
                    }
                }
            })
        );
}

detailInfo();

//Swiper Start
var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
