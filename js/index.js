document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    const observerOptions = {
        root: null, // Observa a visibilidade dentro da viewport
        threshold: 0.7 // Define que 50% do card precisa estar visível para acionar o callback
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Quando o card estiver visível, remove o blur e aplica a transformação
                entry.target.classList.add('in-focus');
            } else {
                // Quando o card sair da tela, volta o blur
                entry.target.classList.remove('in-focus');
            }
        });
    }, observerOptions);

    // Observa todos os cards
    cards.forEach(card => {
        observer.observe(card);
    });
});


function noFunc() {
    const msgNoFunc = document.getElementById("msgNoFunc");
    const seeMoreBtn = document.getElementById("seeMoreBtn")
    msgNoFunc.classList.toggle("d-none")

    if (!msgNoFunc.classList.contains('d-none')) {
        seeMoreBtn.textContent = "Hide"
    } else {
        seeMoreBtn.textContent = "See More"
    }
}

function showName() {
    let usernameInfo = prompt("Welcome! What's your name?")
    let username = document.getElementById('username')
    username.textContent = `, ${usernameInfo}!`;

    if (usernameInfo === null || usernameInfo === "" || !isNaN(usernameInfo)) {
        username.textContent = ", Stranger!";
    } else {
        username.textContent = `, ${usernameInfo}!`;
    }
} showName();