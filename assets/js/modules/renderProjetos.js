import { projetosData } from '../data/projetos.js';

export function initRenderProjetos() {
    const container = document.getElementById('projetos-container');
    if (!container) return;

    container.innerHTML = ''; // Clear container

    projetosData.forEach(projeto => {
        // Generate Tags HTML
        const tagsHtml = projeto.tags
            .map(tag => `<div class="tags">${tag}</div>`)
            .join('');

        // Generate Carousel Images HTML
        const imagesHtml = projeto.imagens
            .map((img, index) => `
              <div class="carousel-slide">
                <img src="${img}" class="img-bg" alt="" aria-hidden="true" />
                <img src="${img}" class="img-main" alt="Imagem de ${projeto.titulo} ${index + 1}" />
              </div>
            `)
            .join('');

        // Generate Dots HTML
        const dotsHtml = projeto.imagens
            .map((_, index) => `<div class="dot ${index === 0 ? 'active' : ''}" data-index="${index}"></div>`)
            .join('');

        // Only show carousel buttons if there's more than 1 image
        const hasMultipleImages = projeto.imagens.length > 1;
        const carouselButtonsHtml = hasMultipleImages ? `
      <button class="carousel-btn prev" aria-label="Imagem Anterior">&#10094;</button>
      <button class="carousel-btn next" aria-label="Próxima Imagem">&#10095;</button>
      <div class="carousel-dots">${dotsHtml}</div>
    ` : '';

        const cardHtml = `
      <div class="box-projetos flex column" data-id="${projeto.id}">
        <div class="badge badge-projetos">${projeto.badge}</div>
        
        <div class="carousel-container" id="carousel-${projeto.id}">
          <div class="carousel-track">
            ${imagesHtml}
          </div>
          ${carouselButtonsHtml}
        </div>

        <div class="subtitulo-projeto flex row">
          <h3>${projeto.titulo}</h3>
          <p>${projeto.porcentagem}</p>
        </div>
        <p>${projeto.descricao}</p>
        <div class="agrupa-tags flex row ${projeto.tags.length > 0 ? '' : 'hidden'}">
          ${tagsHtml}
        </div>
        <div class="flex row" style="margin-top: 1rem;">
           <a href="projeto.html?id=${projeto.id}" class="badge">Ver Detalhes &#8594;</a>
        </div>
      </div>
    `;

        container.insertAdjacentHTML('beforeend', cardHtml);
    });

    // Initialize all carousels
    initCarousels();
}

export function initCarousels() {
    const carousels = document.querySelectorAll('.carousel-container');

    carousels.forEach(carousel => {
        const track = carousel.querySelector('.carousel-track');
        // We look for carousel-slide because each slide now contains 2 images!
        const slides = track.querySelectorAll('.carousel-slide');
        const btnPrev = carousel.querySelector('.prev');
        const btnNext = carousel.querySelector('.next');
        const dots = carousel.querySelectorAll('.dot');

        if (slides.length <= 1) return;

        let currentIndex = 0;

        const updateCarousel = (index) => {
            // Handle bounds
            if (index < 0) {
                currentIndex = slides.length - 1;
            } else if (index >= slides.length) {
                currentIndex = 0;
            } else {
                currentIndex = index;
            }

            // Move track
            track.style.transform = "translateX(-" + (currentIndex * 100) + "%)";

            // Update dots
            dots.forEach(dot => dot.classList.remove('active'));
            if (dots[currentIndex]) {
                dots[currentIndex].classList.add('active');
            }
        };

        if (btnPrev) {
            btnPrev.addEventListener('click', (e) => {
                e.preventDefault();
                updateCarousel(currentIndex - 1);
            });
        }

        if (btnNext) {
            btnNext.addEventListener('click', (e) => {
                e.preventDefault();
                updateCarousel(currentIndex + 1);
            });
        }

        dots.forEach((dot, index) => {
            dot.addEventListener('click', (e) => {
                e.preventDefault();
                updateCarousel(index);
            });
        });
    });
}
