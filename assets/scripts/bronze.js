document.addEventListener('DOMContentLoaded', function() {
    const leftDiv = document.getElementById('leftDiv');
    const revealMask = document.getElementById('revealMask');
    const dividerLine = document.getElementById('dividerLine');

    // Configurar a máscara inicial (nada visível)
    revealMask.style.clipPath = 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)';

    // Resetar quando o mouse sair
    leftDiv.addEventListener('mouseleave', function() {
        revealMask.style.clipPath = 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)';
        dividerLine.style.display = 'none';
    });

    // Mostrar a linha divisória quando o mouse entrar
    leftDiv.addEventListener('mouseenter', function() {
        dividerLine.style.display = 'block';
    });

    // Atualizar a máscara de revelação com base na posição do mouse
    leftDiv.addEventListener('mousemove', function(e) {
        const rect = leftDiv.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = (x / rect.width) * 100;

        // Limitar o percentual entre 0 e 100
        const clampedPercentage = Math.max(0, Math.min(100, percentage));

        // Atualizar a máscara para revelar a imagem de fundo até a posição do mouse
        revealMask.style.clipPath = `polygon(0% 0%, ${clampedPercentage}% 0%, ${clampedPercentage}% 100%, 0% 100%)`;

        // Atualizar posição da linha divisória
        dividerLine.style.left = `${clampedPercentage}%`;
    });
});