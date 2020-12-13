console.log("Hello, it is I");
//Dark Mode Enabler Button
var darkModeButton = document.getElementById('DarkMode');
var body = document.getElementsByTagName("body")[0]
console.log("darkModeButton");

var darkModeEnabled = false;

function enableDarkMode () {
  console.log("---Standard Light Mode Enabled", darkModeEnabled)
  if (darkModeEnabled == false) {
    console.log("---Dark Mode Has Been Enabled")
    body.style.background = "#6C91BF";
    darkModeButton.innerHTML="Prefer Light Mode?";
    darkModeEnabled = true;
  }  else { //if darkModeEnabled is false
      console.log("---Dark Mode Has Been Disabled")
      body.style.background = "linear-gradient(to left, #ccccff, #dbf0f9)";
      darkModeButton.innerHTML="Prefer Dark Mode?";
      darkModeEnabled = false;

    }
}
darkModeButton.addEventListener("click", enableDarkMode);
