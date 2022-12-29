var map = L.map('map').setView([40.24654854352209, 29.52250964965878], 6.5);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]
]).addTo(map);

let apiCoordinates = 'https://camperfinder.org/node/node2';

async function getData() {
  let loader = document.getElementById('showLoader');
  document.getElementById('map').style.display = "none";

  const response = await fetch(apiCoordinates);
  const data = await response.json().catch((err) => {
    console.log(err);
    document.getElementById('map').style.display = "none";
    loader.style.display = "flex"
    loader.innerHTML = "Bir Hata İle Karşılaştık Lütfen İnternet Bağlantınızı Kontrol Edin Ya Da Bize Bildirin ";
  })

  for (item of data) {
    const marker = await L.marker([item.coordinate1, item.coordinate2]).addTo(map);
    const infoText = `
    <a href="detailplace.html?id=${item.num}" class="map-text">
    ${item.campPlaceName}
    </a>`;
    marker.bindPopup(infoText);
    loader.style.display = "none";
    document.getElementById('map').style.display = "block";
  }
};

getData();

function showHint() {
  let hintText = document.getElementById('map-hint');
  let map = document.getElementById('map');
  let storageTutorial = localStorage.getItem('tutorial');
  if (storageTutorial == "true") {
    hintText.style.display = "none";
  }
  map.addEventListener('mouseenter', () => {
    console.log("girdi");
  })
  map.addEventListener('mouseleave', () => {
    localStorage.setItem('tutorial', 'true');
    hintText.style.display = "none"
  })
}

showHint();

