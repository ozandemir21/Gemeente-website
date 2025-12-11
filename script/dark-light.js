// 1 variable maken voor Light en dark mode
var colorSet1 = {
  background: "#d5d5d5ff", // Wit
  text: "#000000ff"        // Zwart
};

var colorSet2 = {
  background: "#000000ff", // Zwart
  text: "#ffffffff"        // Wit
};

// referance naar button
var button = document.getElementById("colorButton");
//referance naar body
var body = document.body;
// referance naar allen h1, h3, a en p elementen
var textElements = document.querySelectorAll("h1, h3, a, p");

// kijken of de website standard kleur (darkmode) heeft
var isFirstColor = true;


// kijken of de website standart kleur heeft, als isfirstcolor = true dan maak colorset1 voor achtergrond dus wit
button.addEventListener("click", () => {
  if (isFirstColor) {
    body.style.backgroundColor = colorSet1.background;
    // als firstcolor = true dan maak alle tekst elementen colorset1 dus zwart
    textElements.forEach(el => el.style.color = colorSet1.text);
    
    // als firstcolor = false dan maak achtergrond colorset2 dus zwart
  } else {
    body.style.backgroundColor = colorSet2.background;
    //als firstcolor = false dan maak tekstcolor colorset2 dus wit
    textElements.forEach(el => el.style.color = colorSet2.text);
  }
  // kijken welke colorset we hebben, zonder dit stuk kan je niet teruk naar andere color mdoe switchen
  isFirstColor = !isFirstColor;
});

