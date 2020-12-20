console.log("Hello, it is I");
//Dark Mode Enabler Button
var darkModeButton = document.getElementById('DarkMode');
var body = document.getElementsByTagName("body")[0];
var krabs = document.getElementById('MrKrabs');
var bean = document.getElementById('TheBean')
var slideshow = document.getElementsByClassName('TimelineShow')
console.log("darkModeButton");

var darkModeEnabled = false;

function enableDarkMode () {
  console.log("---Standard Light Mode Enabled", darkModeEnabled)
  if (darkModeEnabled == false) {
    console.log("---Dark Mode Has Been Enabled")
    body.style.background = "#301934";
    body.style.color = "white";
    krabs.style.border = "white";
    bean.style.border = "white";
    slideshow.style.border = "white";
    darkModeButton.innerHTML="Prefer Light Mode?";
    darkModeEnabled = true;
  }  else { //if darkModeEnabled is false
      console.log("---Dark Mode Has Been Disabled")
      body.style.background = "linear-gradient(to left, #ccccff, #dbf0f9)";
      body.style.color = "black";
      body.style.border = "black";
      krabs.style.border = "black";
      bean.style.border = "black";
      slideshow.style.border = "black";
      darkModeButton.innerHTML="Prefer Dark Mode?";
      darkModeEnabled = false;

    }
}
darkModeButton.addEventListener("click", enableDarkMode);

//Timeline of previous travel slideshow
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

/*Develop function that reveals Shia LeBouf gif upon user click; gif is otherwise hidden*/
var motivationButton = document.getElementById('Shia')
var shiaGif = document.getElementById('ShiaGif')

function Motivation () {
  document.getElementById("ShiaGif").style.visibility = "visible"
}

motivationButton.addEventListener("click", Motivation);

/*//Goal: create slideshow timeline of places I've visited
var i = 0;
var images = [];
var time = F8oAAx8waO63s53trWoLu032tODE7dp5eolfpWvgHD00

//Image List
images[0] = ""; //NOLA
images[1] = ""; //Colorado
images[2] = ""; //NYC
images[3] = ""; //Disney
images[4] = ""; //DR
images[5] = ""; //Philly
images[6] = ""; //Chicago
images[7] = ""; //Jamaica
images[8] = ""; //Vegas
images[9] = ""; //Cabin trip

//Change image
function changeImage() {
  document.slide.src = images[i];

  if(i < images.length - 1) {
    i++;
  } else {
    1 = 0;
}

setTimeout("changeImg()", time);*/
