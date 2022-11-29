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
        let params = (new URL(document.location)).searchParams;
        let name = params.get("id");
        if (name == x.num) {
            html += `
            <div class="header-blog">
            <h1 class="detail-header"> ${x.blogHeader}</h1>
            <img class="camper-image" src="${x.image}" alt="">
            </div>
            <div class="main-blog">
            ${x.html}
            </div>
`;
            document.getElementById('details-info').innerHTML = html;
        }
    }
}
//Start APİ
blogDetailApi(apiBlogs);