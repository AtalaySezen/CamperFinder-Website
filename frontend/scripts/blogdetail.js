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
            // console.log(window.location.href[44]) Web sitesi için
            if (x.blogAnswer2 == null && x.blogList == null) {
                x.blogAnswer2 = "CamperFinder"
                x.blogList = "Camper Finder"
            }

            html += `
            <div class="header-blog">
            <img class="camper-image" src="${x.cardImage}" alt="">
            <h1 class="detail-header"> ${x.blogHeader}</h1>
            </div>
            <div class="main-blog">
            <p class="blog-text">${x.blogAnswer}</p>
            <p id="blogAnswer2" class="blog-text">${x.blogAnswer2}</p>
            </div>
`;
            document.getElementById('details-info').innerHTML = html;
        }
    }
}
//Start APİ
blogDetailApi(apiBlogs);