

let apiPlaces = "https://camperfinder.org/node/node2/";

async function placesApi(url) {
    const response = await fetch(url);
    data = await response.json();
    await showPlaces(data);
};

//Show Data HTML;
async function showPlaces(data) {
    let html = ``;
    let cardsDiv = document.getElementById('istanbul');
    let loader = document.getElementById('showLoader');
    let params = (new URL(document.location)).searchParams;
    let name = params.get("city");
    let capitalized = name.charAt(0).toLocaleUpperCase() + name.slice(1);
    let capitalizedTurkish = capitalized.replace('g', 'ğ');
    let turkishChar = "Kırklareli";
    let turkishChar2 = "İstanbul"

    for (let x of data) {
        if (x.city == capitalizedTurkish || turkishChar || turkishChar2) {
            document.title = 'CamperFinder | ' + capitalizedTurkish + ' Kamp Alanları';
            html += `
             <div class="card-flex" onclick="goDetail(${x.num})">
             <div class="places-card" style="background-image:url('${x.image}');">
             </div>
             <h1 class="header-place">${x.campPlaceName}</h1>
             <p class="info-place">${x.info}</p>
             <a class="read-all" onclick="goDetail(${x.num})">Devamını Oku</a>
             </div>`;
        };
        cardsDiv.innerHTML = html;
        document.getElementById('header-camp').innerHTML = `${capitalized} Kamp Alanları`
        loader.style.display = 'none';
    };

};

//Start APİ
placesApi(apiPlaces);

function goDetail(num) {
    let params = new URLSearchParams(`id=${num}`);
    params.get('?id');
    params.get(num);
    window.location.href = ('detailplace.html' + "?" + params)
};





