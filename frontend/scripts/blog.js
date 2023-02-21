//Show Blogs From APİ
let apiBlogs = 'https://camperfinder.org/node2/node3';

async function blogsApi(url) {
  const response = await fetch(url);
  data = await response.json();
  showBlogs(data);
};

function showBlogs(data) {
  let html = ``;
  for (let x of data) {
    html += `
      <div class="cards-blog" onclick="goDetail(${x.num})">
      <img class="blog-image" src="${x.image}" alt="">
      <h1 class="blogcard-header">${x.blogHeader}</h1>
      <div class="blogs">
      <p class="blog-infos">
      ${x.html}
      </p>
      </div>
      <a class="read-all" onclick="goDetail(${x.num})">Devamını Oku</a>
      </div>`;
    document.getElementById('blogs').innerHTML = html;
  }
};

blogsApi(apiBlogs);


function goDetail(num) {
  let params = new URLSearchParams(`id=${num}`);
  params.get('?id');
  params.get(num);
  window.location.href = ('blogdetail.html' + "?" + params)
};