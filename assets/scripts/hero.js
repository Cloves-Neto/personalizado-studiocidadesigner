document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.hero-video');
    const container = document.querySelector('.video-container');

    // Função para verificar se está em dispositivo móvel
    function isMobile() {
        return window.innerWidth <= 768;
    }

    // Função para ajustar o vídeo com base no dispositivo
    function adjustVideo() {
        if (isMobile()) {
            // Em dispositivos móveis, deixa o vídeo em seu tamanho natural
            video.style.width = '100%';
            video.style.height = 'auto';
            container.style.height = 'auto';
        } else {
            // Em desktop, ajusta para manter proporção e cobrir o máximo possível
            const videoRatio = video.videoWidth / video.videoHeight;
            const containerRatio = container.clientWidth / container.clientHeight;

            if (videoRatio > containerRatio) {
                // Vídeo mais largo que o container
                video.style.width = '100%';
                video.style.height = 'auto';
            } else {
                // Vídeo mais alto que o container
                video.style.width = 'auto';
                video.style.height = '100%';
            }
        }
    }

    // Ajustar quando o vídeo carregar seus metadados
    video.addEventListener('loadedmetadata', adjustVideo);

    // Ajustar quando a janela for redimensionada
    window.addEventListener('resize', adjustVideo);

    // Garantir que o vídeo seja executado em iOS
    video.setAttribute('playsinline', '');
});