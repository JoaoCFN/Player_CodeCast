// dispara a animação do card do form
function animacao_form(){
    const card = document.querySelector(".card");
    window.addEventListener("load", () => {
        card.classList.add("anima_cima");
    })
}
animacao_form();
