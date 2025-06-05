function toggleMenu() {
  const menu = document.querySelector('.nav-menu');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

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