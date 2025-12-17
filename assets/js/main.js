/**
 * ARQUIVO: assets/js/main.js
 * DESCRIÇÃO: Scripts de interação do Portfólio.
 * - Atualização de data dinâmica
 * - Scroll suave (Smooth Scroll)
 */

document.addEventListener('DOMContentLoaded', () => {
    initDateUpdater();
    initSmoothScroll();
});

/**
 * Função 1: Atualiza a data no topo do jornal para a data de hoje.
 * Formato: "Terça-feira, 16 de Dezembro de 2025"
 */
function initDateUpdater() {
    const dateElement = document.getElementById('current-date');
    
    if (dateElement) {
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        
        // Pega a data atual do sistema do usuário
        const today = new Date();
        
        // Formata para PT-BR
        const formattedDate = today.toLocaleDateString('pt-BR', options);
        
        // Capitaliza a primeira letra (ex: terça -> Terça)
        dateElement.textContent = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
    }
}

/**
 * Função 2: Scroll Suave ao clicar nos links do menu.
 * Evita aquele "pulo" brusco na tela.
 */
function initSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Impede o comportamento padrão do link

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Ajuste de offset por causa do menu sticky (se necessário)
                // O scrollIntoView padrão geralmente é suficiente
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}