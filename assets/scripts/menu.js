    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.getElementById('navbar');
    // const overlay = document.getElementById('overlay');

    document.addEventListener('DOMContentLoaded', () => {

        menuToggle.addEventListener('click', function() {
            navbar.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });


        // Fechar o menu ao clicar em um link (para melhor UX)
        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navbar.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });

        // Fechar o menu ao clicar no botão dentro do menu
        const mobileCta = document.querySelector('.mobile-cta .cta-button');
        if (mobileCta) {
            mobileCta.addEventListener('click', () => {
                navbar.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        }


        window.addEventListener('scroll', () => {
            const header = document.querySelector('.header-menu');
            if (!header) return;

            header.classList.toggle('scrolled', window.scrollY > 0);
        });
    });

    console.log('Menu script carregado com sucesso!');

