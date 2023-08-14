const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});


function addNavClass(element) {
  element.classList.add('animate__bounce');
}

function removeNavClass(element) {
  setTimeout(() => {
    element.classList.remove('animate__bounce');
  }, 3000);
}




function typeWriter(elemento, textoOriginal) {
  const textoArray = textoOriginal.split('');
  let textoExibido = '';
  elemento.innerHTML = '';

  textoArray.forEach((letra, i) => {
    setTimeout(() => {
      textoExibido += letra;
      elemento.innerHTML = textoExibido;
    }, 80 * i);
  });
}

function startTypeWriterAnimation() {
  const titulo = document.querySelector('.escreve');
  const textoOriginal = titulo.innerHTML;
  typeWriter(titulo, textoOriginal);
  setTimeout(startTypeWriterAnimation, 6000); 
}

startTypeWriterAnimation();



//menu


