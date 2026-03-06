let zoneClic = document.getElementById("zoneClic");
let temps = document.getElementById("temps");
let scoreCps = document.getElementById("scoreCps");
let testEnCours = false;
let scoreNombre = 0;

zoneClic.addEventListener("click", function () {
  if (!testEnCours) {
    testEnCours = true;
    scoreNombre = 0;
    let compteur = 10;
    temps.textContent = compteur;

    let interval = setInterval(function () {
      compteur--;
      temps.textContent = compteur;

      if (compteur <= 0) {
        clearInterval(interval);
        testEnCours = false;
        compteur = 0
        alert("Ton score est de : "+scoreNombre/10+"cps")
      }
    }, 1000);
  }
  scoreNombre++;
  scoreCps.textContent = scoreNombre;
});
