//BOTÃO MENU DO RESPONSIVO

//seleção do menu, logo e carrinho
const principal = document.querySelector(".main-header");
const navmais = document.querySelector(".more");
const navfechar = document.querySelector(".close");
const nav = document.querySelector(".header");

const navesq = principal.getBoundingClientRect().left;

navmais.addEventListener("click", () => {
  if (navesq < 0) {
    principal.classList.add("side");
    document.body.classList.add("side");
    nav.classList.add("side");
  }
});

navfechar.addEventListener("click", () => {
  if (navesq < 0) {     
    principal.classList.remove("side");
    document.body.classList.remove("side");
    nav.classList.remove("side");
  }
});
