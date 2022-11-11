let searchInput = document.getElementById('searchInput');
let searchButton = document.getElementById('submit-search');



searchButton.addEventListener('click', () => {
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let index = fruits.indexOf(searchInput.value);
    console.log(index)//2
    console.log(placesData);
    console.log(searchInput.value);
    GetData();
})

//Fetch Data
let urlPlaces = "http://localhost:3000/places";
const placesData = [];
function GetData() {
    fetch(urlPlaces)
        .then(response => response.json())
        .then(data => {
            placesData.push(data);
            
        })
}
