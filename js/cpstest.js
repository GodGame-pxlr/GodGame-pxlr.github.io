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
      }
    }, 1000);
  }
  scoreNombre++;
  scoreCps.textContent = scoreNombre;
});
