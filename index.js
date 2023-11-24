const listImage = document.querySelector(".list-imgs");
const imgs = document.querySelectorAll(".img-slider");
const length = imgs.length;
let current = 0;

setInterval(() => {
  if (current === length - 1) {
    current = 0;
    let width = imgs[0].offsetWidth;
    listImage.style.transform = `translateX(0)`;
    document.querySelector(".active").classList.remove("active");
    document.querySelector(".index-item-" + current).classList.add("active");
  } else {
    current++;
    let width = imgs[0].offsetWidth;
    listImage.style.transform = `translateX(${width * -1 * current}px)`;
    document.querySelector(".active").classList.remove("active");
    document.querySelector(".index-item-" + current).classList.add("active");
  }
}, 2000);
