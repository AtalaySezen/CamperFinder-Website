let searchInput = document.getElementById('searchInput');
let searchButton = document.getElementById('searchButton');


//Show Cards Data: 
let apiCards = 'http://localhost:3000/cards';

async function cardsApi(url) {
  const response = await fetch(url);

  data = await response.json();
  showCards(data);
}
function showCards(data) {
  let html = ``;

  for (let x of data) {
    console.log(x.href)
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

document.getElementById('noneSearch').style.display = "none";

function myFunction() {

  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('searchInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');
  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    document.getElementById('noneSearch').style.display = "flex";
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    txtValue.replace("I", "İ")
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}


let seasonsText = document.getElementById('seasons');
//Text According To Seasons
function getCurrentSeason() {
  // It's plus one because January is index 0
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

getCurrentSeason();