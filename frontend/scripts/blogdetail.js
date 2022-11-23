//Get Query Params
let apiBlogs = 'https://camperfinder.org/node2/node3';

async function blogDetailApi(url) {
    const response = await fetch(url);
    data = await response.json();
    await showPlaces(data);
}
//API
async function showPlaces(data) {
    let html = ``;
    for (let x of data) {
        if (window.location.href[50] == x.num) {
            html += `
            <div class="cards" onclick="goDetail(${x.num})">
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
blogDetailApi(apiBlogs);