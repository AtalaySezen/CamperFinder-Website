//Filter Categories
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("buttonContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

//Filter End

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
    console.log(x )
      html += `
      <div class="filterDiv ${x.city}" id="card-city">
      <div id="card-head" class="card-head">
      <h1 class="header-card">${x.city}</h1>
      <h3 class="header-card">${x.campPlaceName}</h3>
      </div>
      <div id="card-image" class="image">
      <!--
      <img class="card-image" src="./assets/images/pexels-bayu-jefri-743765.jpg" alt="Kamp Yerleri Bul">                
      ->
      </div>
      <div class="card-subheader">
      <p class="info-p">
      </p>
      <button class="btn-discover" href="javascript:void">Keşfet</button>
      </div>
      </div>
      `;
  }
  document.getElementById('card-group').innerHTML = html;
}
//Start APİ
placesApi(apiPlaces);

