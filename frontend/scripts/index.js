let searchInput = document.getElementById('searchInput');
let searchButton = document.getElementById('searchButton');


//Show Cards Data: 
let apiCards = 'http://camperfinder.org/node3/node4';

async function cardsApi(url) {
  const response = await fetch(url);

  data = await response.json();
  showCards(data);
}
function showCards(data) {
  let html = ``;

  for (let x of data) {
    html += `
        <a  href="${x.href}.html">
        <div class="card ${x.city}" id="card-city">
        <div id="card-head" class="card-head">
        <h1 class="header-card">${x.city}</h1>
        </div>
        <div id="card-image" class="image">
        <img class="card-image" src="${x.cardImage}" alt="Kamp Yerleri Bul">                
        </div>
        <div class="card-subheader">
        <p class="info-p">
        ${x.cardInfo}
        </p>
        <button class="btn-discover" href="javascript:void">Keşfet</button>
        </div>
        </div>
        </a>
        `;
  }
  document.getElementById('card-group').innerHTML = html;
}
cardsApi(apiCards);

//SEARCH
document.getElementById('noneSearch').style.display = "none";

function myFunction() {

  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('searchInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');
  if (input.value == "") {
    document.getElementById('noneSearch').style.display = "none";
  } else {
    setTimeout(() => {
      for (i = 0; i < li.length; i++) {
        document.getElementById('noneSearch').style.display = "flex";
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
        } else {
          li[i].style.display = "none";
        }
      }
    }, 200);
  }
}

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
let apiBlogs = 'https://camperfinder.org/node2/node3';

async function blogsApi(url) {
  const response = await fetch(url);

  data = await response.json();
  showBlogs(data);
}
function showBlogs(data) {
  let html = ``;
  let slicedArray = data.slice(0, 3);
  slicedArray.map(x => {
    html += `
    <div class="cards blogs" onclick="goDetail(${x.num})">
    <img class="camper-image" src="${x.cardImage}" alt="">
    <h1 class="blog-header">${x.blogHeader}</h1>
    <p class="image-infos">
    ${x.blogAnswer}
    </p>
    <a class="read-all" onclick="goDetail(${x.num})">Devamını Oku</a>
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
