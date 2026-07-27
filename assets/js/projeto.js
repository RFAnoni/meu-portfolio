import { projetosData } from './data/projetos.js';
import { initTheme } from './modules/theme.js';
import { initCarousels } from './modules/renderProjetos.js';
import { initSVGLoader } from './modules/svgLoader.js';

document.addEventListener("DOMContentLoaded", () => {
  initTheme(); // Toggle theme logic is reusable
  initSVGLoader(); // Inject SVG tags to fix theme coloring

  const container = document.getElementById('projeto-conteiner');

  // Parse URL ID
  const urlParams = new URLSearchParams(window.location.search);
  const idProjeto = urlParams.get('id');

  if (!container) return;

  if (!idProjeto) {
    container.innerHTML = '<h2>Projeto não encontrado (ID inválido).</h2>';
    return;
  }

  // Find Project
  const projeto = projetosData.find(p => p.id === idProjeto);

  if (!projeto) {
    container.innerHTML = '<h2>Projeto não encontrado na base de dados.</h2>';
    return;
  }

  // Build Project UI (Blog Style)
  const tagsHtml = projeto.tags
    .map(tag => `<div class="tags">${tag}</div>`)
    .join('');

  // --- CAROUSEL LOGIC ---
  const imagesHtml = projeto.imagens
    .map((img, index) => `
        <div class="carousel-slide">
          <img src="${img}" class="img-bg" alt="" aria-hidden="true" />
          <img src="${img}" class="img-main" alt="Imagem de ${projeto.titulo} ${index + 1}" />
        </div>
      `)
    .join('');

  const dotsHtml = projeto.imagens
    .map((_, index) => `<div class="dot ${index === 0 ? 'active' : ''}" data-index="${index}"></div>`)
    .join('');

  const hasMultipleImages = projeto.imagens.length > 1;
  const carouselButtonsHtml = hasMultipleImages ? `
    <button class="carousel-btn prev" aria-label="Imagem Anterior">&#10094;</button>
    <button class="carousel-btn next" aria-label="Próxima Imagem">&#10095;</button>
    <div class="carousel-dots">${dotsHtml}</div>
  ` : '';

  // We add a specific style height via inline css or a specific class for the blog hero
  const heroImage = projeto.imagens.length > 0 ? `
    <div class="carousel-container projeto-detalhe-hero" id="carousel-${projeto.id}">
      <div class="carousel-track">
        ${imagesHtml}
      </div>
      ${carouselButtonsHtml}
    </div>
  ` : '';

  const html = `
    ${heroImage}
    <div class="projeto-header">
      <h1>${projeto.titulo}</h1>
      <div class="projeto-tags flex row">
        ${tagsHtml}
      </div>
    </div>
    <div class="projeto-conteudo">
      <!-- Se houver conteudo detalhado, ele insere o HTML personalizado de dentro do json, senao coloca o basico -->
      ${projeto.conteudoDetalhado ? projeto.conteudoDetalhado : `
        <p>${projeto.descricao}</p>
        <br/><br/>
        <p><em>Você ainda não adicionou um "conteudoDetalhado" neste projeto. Adicione em projetos.js para escrever o artigo completo do seu projeto usando tags HTML (h2, p, ul).</em></p>
      `}
    </div>
  `;

  container.innerHTML = html;

  // Inicializar caso haja carrossel
  initCarousels();

});
