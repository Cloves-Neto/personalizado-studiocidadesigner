document.addEventListener('DOMContentLoaded', function() {
  // Seleciona todos os cards de depoimentos
  const cards = document.querySelectorAll('.testimonials-card');

  // Adiciona um pequeno delay entre cada animação de entrada
  cards.forEach((card, index) => {
    // Define um atraso baseado no índice para escalonar as animações
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 200 * index);
  });

  // Adiciona animação ao scroll (opcional)
  function checkScroll() {
    const testimonialsSection = document.querySelector('.testimonials-section');
    const position = testimonialsSection.getBoundingClientRect();

    // Verifica se a seção está visível na tela
    if(position.top < window.innerHeight && position.bottom >= 0) {
      testimonialsSection.classList.add('testimonials-visible');
    }
  }

  // Verifica no carregamento e no scroll
  checkScroll();
  window.addEventListener('scroll', checkScroll);
});