let searchButton = document.getElementById('searchButton');


//Text According To Seasons
let seasonsText = document.getElementById('seasons');
function getCurrentSeason() {
  const now = new Date();
  const month = now.getMonth() + 1;

  if (month > 3 && month <= 6) {
    seasonsText.innerHTML = "İlkbahar'ın tadını en güzel kamp alanlarında çıkarın.";
    return 'spring';
  }
  if (month > 6 && month <= 9) {
    seasonsText.innerHTML = "Yaz'ın tadını en güzel kamp alanlarında çıkarın.";
    return 'summer';
  }

  if (month > 9 && month <= 12) {
    seasonsText.innerHTML = "Sonbahar'ın tadını en güzel kamp alanlarında çıkarın.";
    return 'fall';
  }

  if (month >= 1 && month <= 3) {
    seasonsText.innerHTML = "Kış'ın tadını en güzel kamp alanlarında çıkarın.";
    return 'winter';
  }

  const day = now.getDate();
  if (month === 3) {
    return day < 22 ? 'winter' : 'spring';
  }

  if (month === 6) {
    return day < 22 ? 'spring' : 'summer';
  }

  if (month === 9) {
    return day < 22 ? 'summer' : 'fall';
  }

  if (month === 12) {
    return day < 22 ? 'fall' : 'winter';
  }

  console.error('Unable to calculate current season');
}

//Start seasons function
getCurrentSeason();

//Show Blogs From APİ
let apiBlogs = 'http://camperfinder.org/node2/node3';

async function blogsApi(url) {
  const response = await fetch(url);

  data = await response.json();
  showBlogs(data);
}
function showBlogs(data) {
  let html = ``;
  let slicedArray = data.slice(0, 3);
  slicedArray.map(x => {
    if (x.image == null) {
      x.image = "https://i.ibb.co/xSRXKHw/pexels-photo-1118785.jpg"
    }
    html += `
    <div class="cards blogs" onclick="goDetail(${x.num})"> 
    <img class="blog-image" src="${x.image}">
    <h1 class="blog-header">${x.blogHeader}</h1>
    <div class="blog-html">
    ${x.html}
    </div>
    </div>`;
    document.getElementById('blog-cards').innerHTML = html;
  })
}

blogsApi(apiBlogs);
//Blog Detail Page
function goDetail(id) {
  let params = new URLSearchParams(`id=${id}`);
  params.get('?id');
  params.get(id);
  window.location.href = ('blogdetail.html' + "?" + params)
  //1-Detay sayfasına yönlendirilecek 
  //2-Detay sayfasında query`de idyi verecek. 
  //3-Detay sayfası yüklenirken, idye bakılacak. O id ile get atılacak. (Detay Sayfası Yükleme Fonksiyonudur
}


let apiPlaces = "https://camperfinder.org/node/node2/";

async function placesApi(url) {
  const response = await fetch(url);
  data = await response.json();
  await showPlaces(data);
}

//Show Data HTML;
async function showPlaces(data) {
  let searchCity = [];
  data.map(x => {
    searchCity.push(x.city);
    uniqueArray = searchCity.filter(function (item, pos) {
      return searchCity.indexOf(item) == pos;
    })
    uniqueArray.map(y => {
      if (y.city == searchInput.value) {
      }
    })
  })
}

placesApi(apiPlaces);



let suggestions = [
  "İzmir",
  "Ankara",
  "İstanbul",
  "Antalya",
  "Sakarya",
  "Kırklareli",
  "Edirne",
  "Bursa",
  "Eskişehir",
  "Tekirdağ"
];

const searchInput = document.querySelector(".searchInput");
const input = document.getElementById('input');
const resultBox = searchInput.querySelector(".resultBox");
const icon = searchInput.querySelector(".icon");
let linkTag = searchInput.querySelector("a");
let webLink;

// if user press any key and release
input.onkeyup = (e) => {
  let userData = e.target.value; //
  let emptyArray = [];
  if (userData) {
    emptyArray = suggestions.filter((data) => {
      return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
    });
    emptyArray = emptyArray.map((data) => {
      return data = `<li id=${data}>` + data + `</li>`;
    });
    document.getElementById('text-search').innerHTML = "CamperFinder'a hoşgeldin aradığın şehri kolayca bul!"
    searchInput.classList.remove("none"); //show 
    showSuggestions(emptyArray);
    let allList = resultBox.querySelectorAll("li");
    for (let i = 0; i < allList.length; i++) {
      allList[i].setAttribute("onclick", "select(id)");
    }
  } else {
    searchInput.classList.add("none"); //hide 
    document.getElementById('text-search').innerHTML = "CamperFinder"

  }
}

function showSuggestions(list) {
  let listData;
  if (!list.length) {
    userValue = inputBox.value;
    listData = '<li>' + userValue + '</li>';
  } else {
    listData = list.join('');
  }
  resultBox.innerHTML = listData;
}

function select(id) {
  let lowerId = id.toLocaleLowerCase();
  window.location.href = `${lowerId}.html`
}