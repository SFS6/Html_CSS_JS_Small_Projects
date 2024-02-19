const head = document.querySelector("#header");
const title = document.querySelector("#title");
const excerpt = document.querySelector("#excerpt");
const profile_img = document.querySelector("#profile_img");
const name = document.querySelector("#name");
const date = document.querySelector("#date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");
setTimeout(getData, 3500);
function getData() {
  head.innerHTML =
    '<img src="../content plhold/img/1920 x 1080 HD Wallpapers 19.png" alt="Nature"/>';
  title.innerHTML = "Lorem ipsum dolor sit, amet";
  excerpt.innerHTML =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae cum maxime totam ";
  profile_img.innerHTML =
    '<img src="../content plhold/img/pexels-photo-1546039.jpeg" alt="John Smith">';
  name.innerHTML = "John Doe";
  date.innerHTML = "Oct 08,2020";
  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"));
}
