let searchInput = document.getElementById('searchInput');
let searchButton = document.getElementById('searchButton');


//Get Datas
// const apiUrl = 'http://localhost:3000/places';

// async function getApi(url){
//     const response = await fetch(url);

//     data = await response.json();
//     console.log(data);    
//     show(data);
// }

// getApi(apiUrl);

// //Show Data HTML
// function show(data){
//     let html = ``;

//     for(let x of data){
//         html += `
//         ${x.city}
//         `;
//     }
//     document.getElementById('test').innerHTML = html;
// }

//Show Cards Data: 
let apiCards = 'http://localhost:3000/cards';

async function cardsApi(url){
    const response = await fetch(url);

    data = await response.json();
    console.log(data);    
    showCards(data);
}
function showCards(data){
    let html = ``;

    for(let x of data){
   
        html += `
        <div class="card ${x.city}" id="card-city">
        <div id="card-head" class="card-head">
        <h1 class="header-card">${x.city}</h1>
        </div>
        <div id="card-image" class="image">
        <img class="card-image" src="./assets/images/pexels-bayu-jefri-743765.jpg" alt="Kamp Yerleri Bul">                
        </div>
        <div class="card-subheader">
        <p class="info-p">
        ${x.cardInfo}
        </p>
        <button class="btn-discover" href="javascript:void">Keşfet</button>
        </div>
        </div>
        `;
    }
    document.getElementById('card-group').innerHTML = html;
}

cardsApi(apiCards)

