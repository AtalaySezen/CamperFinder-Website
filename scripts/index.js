let searchInput = document.getElementById('searchInput');
let searchButton = document.getElementById('submit-search');


searchButton.addEventListener('click', () => {

})

//Fetch Data
const api_url = "http://localhost:3000/places";

async function getapi(url) {
    // Storing response
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    show(data);
}
// Calling that async function
getapi(api_url);

// Function to define innerHTML for HTML table
function show(data) {
    let tab =
        `<tr>
          <th>ID</th>
          <th>City</th>
          <th>District</th>
          <th>Camping Place</th>
         </tr>`;
    // Loop to access all rows 
    for (let r of data) {
        tab += `<tr> 
    <td>${r.id} </td>
    <td>${r.city}</td>
    <td>${r.district}</td> 
    <td>${r.campPlaceName}</td>          
</tr>`;
    }
    document.getElementById("test").innerHTML = tab;
}