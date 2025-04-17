document.addEventListener('DOMContentLoaded', function() {
    // Função para animação de contagem
    function animateCounter(elementId, targetValue, duration, suffix = '') {
        const counterElement = document.getElementById(elementId);
        if (!counterElement) return;

        let startTime = null;
        const startValue = 0;

        function updateCounter(timestamp) {
            if (!startTime) startTime = timestamp;

            const progress = Math.min((timestamp - startTime) / duration, 1);
            const currentValue = Math.floor(progress * (targetValue - startValue) + startValue);

            counterElement.textContent = currentValue + suffix;

            if (progress < 1) {
                window.requestAnimationFrame(updateCounter);
            }
        }

        window.requestAnimationFrame(updateCounter);
    }

    // Função para verificar se o elemento está visível na viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }

    // Iniciar animação quando os stats estiverem visíveis
    const statsContainer = document.querySelector('.stats-container');
    let animated = false;

    function checkScroll() {
        if (!animated && isElementInViewport(statsContainer)) {
            animateCounter('years-counter', 24, 2000);
            animateCounter('clients-counter', 15, 2000);
            animated = true;
        }
    }

    // Verificar na carga inicial e durante o scroll
    checkScroll();
    window.addEventListener('scroll', checkScroll);

    // Em caso de redimensionamento, verificar novamente
    window.addEventListener('resize', checkScroll);
});