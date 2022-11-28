let apiPlaces = "https://camperfinder.org/node/node2/";

let numberCity = [];
async function placesApi(url) {
  const response = await fetch(url);
  data = await response.json();
  data.map(x => {
    //Check length of items
    if (x.city == "Bursa") {
      numberCity.push(x.num);
      console.log(numberCity.length)
    }

  })




  showPlaces(data);
}

//Show Data HTML;
function showPlaces(data) {

  let html = ``;
  for (let x of data) {
    if (x.city == "Bursa") {
      html += `
      <div class="card-flex" onclick="goDetail(${x.num})">
      <div class="places-card" style="background-image:url('${x.image}');"></div>
      <small class="click-detail">Detay İçin Tıkla</small>
      <h1 class="header-place">${x.campPlaceName}</h1>
      <p class="info-place">${x.info}</p>
  </div>
  `;
    }
    document.getElementById('istanbul').innerHTML = html;
  }
}

//Start APİ
placesApi(apiPlaces);


function goDetail(num) {
  let params = new URLSearchParams(`id=${num}`);
  params.get('?id');
  params.get(num);
  window.location.href = ('detailplace.html' + "?" + params)
  //1-Detay sayfasına yönlendirilecek 
  //2-Detay sayfasında query`de idyi verecek. 
  //3-Detay sayfası yüklenirken, idye bakılacak. O id ile get atılacak. (Detay Sayfası Yükleme Fonksiyonudur
}

