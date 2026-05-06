// ===== EFEITO DE DIGITAÇÃO PROFISSIONAL =====

// Lista de frases (isso é o diferencial)
const texts = [
  "Desenvolvedora Front-End",
  "Criando experiências modernas e responsivas",
  "Focada em performance e design",
  "Transformando ideias em interfaces reais",
  "UI Designer com visão estratégica"
];

let count = 0; // controla qual frase
let index = 0; // controla letras
let currentText = "";
let letter = "";

function typeEffect() {

  if (count === texts.length) {
    count = 0; // reinicia
  }

  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing").innerHTML = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;

    setTimeout(typeEffect, 1500); // pausa antes de trocar frase
  } else {
    setTimeout(typeEffect, 50);
  }
}

typeEffect();



// PRELOADER
window.addEventListener("load", () => {

  const preloader = document.querySelector(".preloader");

  preloader.style.opacity = "0";

  setTimeout(() => {
    preloader.style.display = "none";
  }, 500);

});


// ANIMAÇÃO SCROLL
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }

  });

});

sections.forEach((sec) => {

  sec.style.opacity = 0;
  sec.style.transform = "translateY(30px)";
  observer.observe(sec);

});