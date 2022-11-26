

var map = L.map('map').setView([40.24654854352209, 29.52250964965878], 6.5);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// var circle = L.circle([39.54654854352209, 25.22250964965878], {
//   color: 'red',
//   fillColor: '#f03',
//   fillOpacity: 0.5,
//   radius: 500
// }).addTo(map);

var polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]
]).addTo(map);

let apiCoordinates = 'https://camperfinder.org/node/node2/';

async function getData() {
  const response = await fetch(apiCoordinates);
  const data = await response.json();
  for (item of data) {
   const marker = L.marker([item.coordinate1,item.coordinate2]).addTo(map);
   const infoText = `
   <p class="map-text">
   ${item.campPlaceName}
   </p>
   `;
   marker.bindPopup(infoText);
  }
}

getData();


