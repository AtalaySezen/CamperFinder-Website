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
let detailPlaces = "https://camperfinder.org/node/node2/";
async function placesApi(url) {
    const response = await fetch(url);
    data = await response.json();
    showPlaces(data);
}

//Get Url
async function showPlaces(data) {
    let html = ``;
    let html2 = ``;
    let params = (new URL(document.location)).searchParams;
    let name = params.get("id")
    for (let x of data) {
        if (x.image2 == null && x.image3 == null) {
            x.image2 = "https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
            x.image3 = "https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
        }
        ;
        if (name == x.num) {
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
            <h1 class="header-detail">${x.campPlaceName} Hakkında</h1>
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
placesApi(detailPlaces);


let detailInfoApı = 'http://camperfinder.org/node3/node4'

function detailInfo() {
    //Get Params ID
    let params = (new URL(document.location)).searchParams;
    let name = params.get("id")

    fetch(detailInfoApı)
        .then(response => response.json())
        .then(data =>
            data.map(a => {
                for (let y of data) {
                    if (name == y.num) {
                        console.log(y)
                        if (y.toilet == true) {
                            document.getElementById('icon-toilet').innerHTML = `
                        <svg class="icon-check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path
                            d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                        </svg>
                        `
                        } else {
                            document.getElementById('icon-toilet').innerHTML = `
                            <svg class="icon-cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                            <path
                                d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
                             </svg>
                            
                            `}
                        if (y.internet == true) {
                            document.getElementById('icon-internet').innerHTML = `
                            <svg class="icon-check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path
                                d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                            </svg>
                            `}
                        else {
                            document.getElementById('icon-internet').innerHTML = `
                                <svg class="icon-cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path
                                    d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
                                 </svg>
                                
                            `}
                        if (y.market == true) {
                            document.getElementById('icon-market').innerHTML = `
                                <svg class="icon-check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path
                                    d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                                </svg>
                                `}
                        else {
                            document.getElementById('icon-market').innerHTML = `
                                    <svg class="icon-cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                    <path
                                        d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
                                     </svg>
                                    
                                `}
                        if (y.shower == true) {
                            document.getElementById('icon-shower').innerHTML = `
                                    <svg class="icon-check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path
                                        d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                                    </svg>
                                    `}
                        else {
                            document.getElementById('icon-shower').innerHTML = `
                                        <svg class="icon-cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                        <path
                                            d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
                                         </svg>
                                        
                                    `}
                    }
                }

            })


        );
}

detailInfo();

