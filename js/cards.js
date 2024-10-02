// → Função que aplica e remove CSS dos cards de acordo com o viewPort do usuário
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    const observerOptions = {
        root: null, // Observa a visibilidade dentro da viewport
        threshold: .1 // Define que 50% do card precisa estar visível para acionar o callback
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
