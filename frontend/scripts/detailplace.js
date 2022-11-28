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
let apiPlaces = "https://camperfinder.org/node/node2/";
async function placesApi(url) {
    const response = await fetch(url);
    data = await response.json();
    console.log(data);
    showPlaces(data);
}
//Get Url
console.log(window.location.href[51])

function showPlaces(data) {
    let html = ``;
    let html2 = ``;
    for (let x of data) {
        if (x.image2 == null && x.image3 == null) {
            x.image2 = "https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
            x.image3 = "https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
        }
        // console.log(window.location.href[45]) for website
        if (window.location.href[51] == x.num) {
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
        <h1 class="header-detail">${x.campPlaceName}</h1>
        <p class="detail-subheader">
           ${x.info}
        </p>
      </div>
        `


            document.getElementById('details-info').innerHTML = html2;
        }
    }

}
//Start APİ
placesApi(apiPlaces);

