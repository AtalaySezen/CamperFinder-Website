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
//Get Query Params
let apiPlaces = "http://localhost:3000/detailpage";

async function placesApi(url) {
    const response = await fetch(url);
    data = await response.json();
    console.log(data);
    showPlaces(data);
}
//API
function showPlaces(data) {
    let html = ``;
    let html2 = ``;
    for (let x of data) {
        if (window.location.href[51] == x.id) {
            console.log(x)
            html += `
             <div class="swiper-slide">
             <img src="${x.image}" alt="">
             </div>
             <div class="swiper-slide">
             <img src="${x.image2}" alt="">
             </div>
            <div class="swiper-slide">
            <img src="${x.image3}" alt="">
            </div>`;
        document.getElementById('swiper').innerHTML = html;
        //Show Header And Info Texts:
        html2 += `
        <h1 class="header-detail">${x.header}</h1>
        <p class="detail-subheader">
           ${x.text}
        </p>`
        document.getElementById('details-info').innerHTML = html2;
    }
}
  


}
//Start APİ
placesApi(apiPlaces);

//

