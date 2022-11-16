let apiPlaces = "http://localhost:3000/places";

async function placesApi(url) {
  const response = await fetch(url);

  data = await response.json();
  console.log(data);
  showPlaces(data);
}
function showPlaces(data) {
  let html = ``; 1

  for (let x of data) {

    console.log(x)
    if (x.city == "İzmir") {

      html += `
      <div class="card" id="card-city" onclick="goDetail(${x.id})">
      <div id="card-head" class="card-head">
      <h1 class="header-card">${x.city}</h1>
      <h3 class="header-card">${x.campPlaceName}</h3>
      </div>
      <div id="card-image" class="image">
      <img class="card-image" src="./assets/images/homepage-bg.jpg" alt="${x.alt}">                
      </div>
      <div class="card-subheader">
      <p class="info-p">
      ${x.district}
      </p>
      </div>
      </div>
      `;
    }
    document.getElementById('istanbul').innerHTML = html;
  }
}

//Start APİ
placesApi(apiPlaces);



function goDetail(id) {
  let params = new URLSearchParams(`id=${id}`);
  params.get('?id'); // 'node'
  params.get(id); // '2'
  window.location.href = ('detailplace.html' + "?" + params)
}

