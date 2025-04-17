document.addEventListener('DOMContentLoaded', function() {
    const cardContainer = document.querySelector('.card-container');
    const cards = document.querySelectorAll('.card');
    const totalCards = cards.length;
    let currentPosition = 0;

    // Clone cards for infinite loop
    for (let i = 0; i < totalCards; i++) {
        const clone = cards[i].cloneNode(true);
        cardContainer.appendChild(clone);
    }

    // Set initial position
    updatePosition();

    // Automatic animation
    setInterval(function() {
        currentPosition++;
        updatePosition();

        // Reset position when all original cards have passed
        if (currentPosition >= totalCards) {
            setTimeout(function() {
                cardContainer.style.transition = 'none';
                currentPosition = 0;
                updatePosition();

                // Re-enable transition after reset
                setTimeout(function() {
                    cardContainer.style.transition = 'transform 0.5s ease-out';
                }, 50);
            }, 500);
        }
    }, 3000);

    function updatePosition() {
        const shift = -currentPosition * (100 / totalCards);
        cardContainer.style.transition = 'transform 0.5s ease-out';
        cardContainer.style.transform = `translateX(${shift}%)`;
    }
});
