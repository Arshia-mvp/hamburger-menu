let nav = document.getElementsByTagName("a")[0];

let main = document.getElementsByClassName("main")[0];

let body = document.getElementsByTagName("body")[0];

let btn = document.getElementById("btn");

let menu = document.getElementById("menu");

let box1 = document.getElementsByClassName("k")[0];

let box2 = document.getElementsByClassName("k")[1];

let box3 = document.getElementsByClassName("k")[2];

let hamburger = document.getElementById("hamburger");
menu.addEventListener("click", () => {
  hamburger.classList.toggle('none')
});