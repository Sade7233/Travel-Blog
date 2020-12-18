console.log("Hello, it is I");
//Dark Mode Enabler Button
var darkModeButton = document.getElementById('DarkMode');
var body = document.getElementsByTagName("body")[0];
var krabs = document.getElementById('MrKrabs');
var bean = document.getElementById('TheBean')
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
    darkModeButton.innerHTML="Prefer Light Mode?";
    darkModeEnabled = true;
  }  else { //if darkModeEnabled is false
      console.log("---Dark Mode Has Been Disabled")
      body.style.background = "linear-gradient(to left, #ccccff, #dbf0f9)";
      body.style.color = "black";
      body.style.border = "black";
      krabs.style.border = "black";
      bean.style.border = "black";
      darkModeButton.innerHTML="Prefer Dark Mode?";
      darkModeEnabled = false;

    }
}
darkModeButton.addEventListener("click", enableDarkMode);

/*Develop function that reveals Shia LeBouf gif upon user click; gif is otherwise hidden*/
var motivationButton = document.getElementById('Shia')
var shiaGif = document.getElementById('ShiaGif')

function Motivation () {
  document.getElementById("ShiaGif").style.visibility = "visible"
}

motivationButton.addEventListener("click", Motivation);
