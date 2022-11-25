

var map = L.map('map').setView([41.54654854352209, 28.22250964965878], 10);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var circle = L.circle([41.54654854352209, 28.22250964965878], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 500
}).addTo(map);

var polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]
]).addTo(map);

let apiCoordinates = 'https://camperfinder.org/node/node2/';

async function getData() {
  const response = await fetch(apiCoordinates);
  const data = await response.json();
  console.log(data)
  for (item of data) {
    let parseIntFirst = parseFloat(data[0].coordinate1)
    let parseIntSecond = parseFloat(data[0].coordinate2)
    L.marker([parseIntFirst, parseIntSecond]).addTo(map);
  }
  console.log(data);
}

getData();


