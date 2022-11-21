



//Show Blogs From APİ
let apiBlogs = 'http://localhost:3000/blogs';

async function blogsApi(url) {
  const response = await fetch(url);

  data = await response.json();
  showBlogs(data);
}
function showBlogs(data) {
  let html = ``;
  let paginationArray = [];
  for (let x of data) {
    paginationArray.push(x.id)
    console.log(paginationArray.length)

    if (paginationArray.length > 6) {
      html.slice(0, 3)
      html += `
      <div class="cards-blog" onclick="goDetail(${x.id})">
      <img class="camper-image" src="${x.cardImage}" alt="">
      <h1 class="blogcard-header">${x.blogHeader}</h1>
      <p class="blog-infos">
        ${x.blogAnswer}
      </p>
      <a class="read-all" onclick="goDetail(${x.id})">Devamını Oku</a>
      </div>`;
    }
    document.getElementById('blogs').innerHTML = html;
  }

}

blogsApi(apiBlogs);


function goDetail(id) {
  let params = new URLSearchParams(`id=${id}`);
  params.get('?id');
  params.get(id);
  window.location.href = ('blogdetail.html' + "?" + params)
  //1-Detay sayfasına yönlendirilecek 
  //2-Detay sayfasında query`de idyi verecek. 
  //3-Detay sayfası yüklenirken, idye bakılacak. O id ile get atılacak. (Detay Sayfası Yükleme Fonksiyonudur
}