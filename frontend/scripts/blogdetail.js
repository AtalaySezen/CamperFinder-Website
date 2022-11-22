//Get Query Params
let apiPlaces = "http://localhost:3000/blogs";

async function placesApi(url) {
    const response = await fetch(url);
    data = await response.json();
    console.log(data);
    showPlaces(data);
}

//API
function showPlaces(data) {
    let html = ``;
    for (let x of data) {
        if (window.location.href[50] == x.id) {
            html += `
            <div class="cards" onclick="goDetail(${x.id})">
            <img class="camper-image" src="${x.cardImage}" alt="">
            <h1 class="blog-header">${x.blogHeader}</h1>
            <p class="image-infos">
                ${x.blogAnswer}
            </p>
            </div>`;
        document.getElementById('details-info').innerHTML = html;
    }
}
  


}
//Start APİ
placesApi(apiPlaces);
