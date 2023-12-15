//change image
let latestCards = document.querySelectorAll(".latest .card");
let latestMainImg = document.querySelectorAll(".latest #mainImg");
let latestHoverImg = document.querySelectorAll(".latest #hoverImg");

for (let i = 0; i < latestCards.length; i++) {
  let mainSrc = latestMainImg[i].getAttribute("src");
  let hoverSrc = latestHoverImg[i].getAttribute("src");
  latestCards[i].addEventListener("mouseenter", function (e) {
    latestMainImg[i].setAttribute("src", hoverSrc);
  });
  latestCards[i].addEventListener("mouseleave", function (e) {
    latestMainImg[i].setAttribute("src", mainSrc);
  });
}

// // to fix header
let header = document.getElementById('header');
let btnUp = document.getElementById('btnUp');

window.onscroll = function () {
  if (window.scrollY > 200) {
    header.classList.add('header-fix');
    btnUp.classList.add('show-btn');
  }
  else {
    header.classList.remove('header-fix');
    btnUp.classList.remove('show-btn');
  }
};
btnUp.addEventListener('click', function (e) {
  window.scroll({
    top: 0,
    bahaviour: "smooth"
  });
});

// to count number of products
let btnCount = document.getElementById("btnCount");
let countOfProducts = 0;

if (localStorage.getItem("count") != null) {
  countOfProducts = localStorage.getItem("count");
  document.getElementById("soppingCount").innerHTML = countOfProducts;
}

function addCount() {
  countOfProducts++;
  localStorage.setItem("count", countOfProducts);
  document.getElementById("soppingCount").innerHTML = countOfProducts;
}

// delete count
function delCount() {
  countOfProducts = 0;
  localStorage.setItem("count", countOfProducts);
  document.getElementById("soppingCount").innerHTML = countOfProducts;
}

let productImage = document.querySelector(".product .product-img img");
let allImg = document.querySelectorAll("img");

let imgSrc;
for (let i = 0; i < allImg.length; i++) {
  allImg[i].addEventListener("click", function () {
    imgSrc = allImg[i].src;
    productImage.src = imgSrc;
    console.log(imgSrc);
  });
}


