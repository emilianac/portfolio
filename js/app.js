document.getElementById("btn-scroll").addEventListener("click", function () {
    document.getElementById("especialidades").scrollIntoView({
        behavior: "smooth"
    });
});

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});