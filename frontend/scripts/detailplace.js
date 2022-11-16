//Get Query Params
console.log(window.location.href[51]);


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
            if (window.location.href[51]==x.id) {

            console.log(x)

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

