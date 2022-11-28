let searchInput = document.getElementById('searchInput');
let searchButton = document.getElementById('searchButton');


//SEARCH


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
// let apiBlogs = 'https://camperfinder.org/node2/node3';

// async function blogsApi(url) {
//   const response = await fetch(url);

//   data = await response.json();
//   showBlogs(data);
// }
// function showBlogs(data) {
//   let html = ``;
//   let slicedArray = data.slice(0, 3);
//   slicedArray.map(x => {
//     html += `
//     <div class="cards blogs" onclick="goDetail(${x.num})">
//     <img class="camper-image" src="${x.cardImage}" alt="">
//     <h1 class="blog-header">${x.blogHeader}</h1>
//     <p class="image-infos">
//     ${x.blogAnswer}
//     </p>
//     <a class="read-all" onclick="goDetail(${x.num})">Devamını Oku</a>
//     </div>`;
//     document.getElementById('blog-cards').innerHTML = html;
//   })
// }

// blogsApi(apiBlogs);
// //Blog Detail Page
// function goDetail(id) {
//   let params = new URLSearchParams(`id=${id}`);
//   params.get('?id');
//   params.get(id);
//   window.location.href = ('blogdetail.html' + "?" + params)
//   //1-Detay sayfasına yönlendirilecek 
//   //2-Detay sayfasında query`de idyi verecek. 
//   //3-Detay sayfası yüklenirken, idye bakılacak. O id ile get atılacak. (Detay Sayfası Yükleme Fonksiyonudur
// }


//Card Href Link

function goLink(event) {
  window.location.href = `${event}.html`
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
  .then(response=>response.json())
  let searchCity = [];
  data.map(x=>{
    searchCity.push(x.city.toLowerCase());

    uniqueArray = [...new Set(searchCity)];
    uniqueArray.map(a=>{
      console.log(a)
      let value = searchInput.value;
      console.log(value)
      if(a === value){
        document.getElementById('search-result').innerHTML = `
          <a style="color:white;" href="${a}.html">${a}</a>
        `
      }
    })


  })


}