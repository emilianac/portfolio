document.getElementById("btn-scroll").addEventListener("click", function () {
    document.getElementById("especialidades").scrollIntoView({
        behavior: "smooth"
    });
});

const scrollToTopButton = document.getElementById("scrollToTopButton");

// Mostrar o botão ao rolar para baixo
window.onscroll = function () {
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    const primeiraSecao = document.getElementById("topo-do-site").offsetHeight; 
    const rodape = document.querySelector("footer").offsetTop;

    if (scrollPosition > primeiraSecao && scrollPosition < rodape) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none"; 
    }
};

// Adicionar evento de clique para rolar ao topo
scrollToTopButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});