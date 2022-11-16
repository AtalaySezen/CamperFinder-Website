let apiPlaces = "http://localhost:3000/places";

async function placesApi(url) {
  const response = await fetch(url);

  data = await response.json();
  console.log(data);
  showPlaces(data);
}
function showPlaces(data) {
  let html = ``;

  for (let x of data) {

    console.log(x)
    if (x.city == "İstanbul") {

      html += `
      <div class="card" id="card-city" onclick="goDetail(${x.id})">
      <div id="card-head" class="card-head">
      <h1 class="header-card">${x.city}</h1>
      <h3 class="header-card">${x.campPlaceName}</h3>
      </div>
      <div id="card-image" class="image">
      <img class="card-image" src="./assets/images/pexels-bayu-jefri-743765.jpg" alt="Kamp Yerleri Bul">                
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
  console.log(id);
  //1-Detay sayfasına yönlendirilecek 

  //2-Detay sayfasında query`de idyi verecek. 

  //3-Detay sayfası yüklenirken, idye bakılacak. O id ile get atılacak. (Detay Sayfası Yükleme Fonksiyonudur.)

  
}

