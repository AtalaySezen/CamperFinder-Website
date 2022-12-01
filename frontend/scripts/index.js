let searchInput = document.getElementById('searchInput');
let searchButton = document.getElementById('searchButton');


//Text According To Seasons
let seasonsText = document.getElementById('seasons');
function getCurrentSeason() {
  const now = new Date();
  const month = now.getMonth() + 1;

  if (month > 3 && month < 6) {
    seasonsText.innerHTML = "İlkbahar'ın tadını en güzel kamp alanlarında çıkarın.";
    return 'spring';
  }
  if (month > 6 && month < 9) {
    seasonsText.innerHTML = "Yaz'ın tadını en güzel kamp alanlarında çıkarın.";
    return 'summer';
  }

  if (month > 9 && month < 12) {
    seasonsText.innerHTML = "Sonbahar'ın tadını en güzel kamp alanlarında çıkarın.";
    return 'fall';
  }

  if (month >= 1 && month < 3) {
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
        console.log(searchInput.value)

      }
    })
  })
}

placesApi(apiPlaces);

function search() {
  fetch(apiPlaces)
    .then(response => response.json())
  let searchCity = [];
  data.map(x => {
    searchCity.push(x.city.toLocaleLowerCase());
    arr = [...new Set(searchCity)];
    let value = searchInput.value.toLocaleLowerCase();
    let inputValue = value.replace(/^\s+|\s+$/gm, '').trim();
    for (i = 0; i < arr.length; i++) {
      if (arr[i] === inputValue) {
        document.getElementById('search-result').innerHTML = `
          <p class="result-p" style=color:white;>Bulunan Şehirler:</p>
          <a class="result-href" href="${arr[i]}.html" style="color:white;">
          <span class="href-span">${arr[i]}</span>
          </a>
          `
      }
    }
  })
}