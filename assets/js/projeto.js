import { projetosData } from './data/projetos.js';
import { initTheme } from './modules/theme.js';
import { initCarousels } from './modules/renderProjetos.js';
import { initSVGLoader } from './modules/svgLoader.js';

document.addEventListener("DOMContentLoaded", () => {
  initTheme(); // Toggle theme logic is reusable
  initSVGLoader(); // Inject SVG tags to fix theme coloring

  const container = document.getElementById('projeto-conteiner');
  const sidebarLista = document.getElementById('sidebar-lista');

  if (!container) return;

  function renderSidebar(idAtivo) {
    if (!sidebarLista) return;

    sidebarLista.innerHTML = projetosData.map(p => `
      <div class="sidebar-item ${p.id === idAtivo ? 'ativo' : ''}" data-id="${p.id}">
        ${p.titulo}
      </div>
    `).join('');

    // Adiciona eventos de clique na sidebar
    const items = sidebarLista.querySelectorAll('.sidebar-item');
    items.forEach(item => {
      item.addEventListener('click', () => {
        const novoId = item.getAttribute('data-id');
        loadProjeto(novoId);

        // Atualiza a URL sem recarregar a página
        const url = new URL(window.location);
        url.searchParams.set('id', novoId);
        window.history.pushState({}, '', url);

        // Rola o container do projeto para o topo (útil no mobile)
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });
  }

  function loadProjeto(idProjeto) {
    let projeto = projetosData.find(p => p.id === idProjeto);

    if (!projeto) {
      if (projetosData.length > 0) {
        projeto = projetosData[0]; // fallback para o primeiro
      } else {
        container.innerHTML = '<h2>Projeto não encontrado na base de dados.</h2>';
        return;
      }
    }

    renderSidebar(projeto.id); // Re-renderiza para atualizar classe ativo

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
  }

  // Leitura inicial da URL
  const urlParams = new URLSearchParams(window.location.search);
  let idInicial = urlParams.get('id');

  if (!idInicial && projetosData.length > 0) {
    idInicial = projetosData[0].id;
    // Opcional: Atualizar a URL na inicializacao caso abra direto projeto.html
    const url = new URL(window.location);
    url.searchParams.set('id', idInicial);
    window.history.replaceState({}, '', url);
  }

  loadProjeto(idInicial);

  // Escutar botões de navegação do browser (voltar/avançar)
  window.addEventListener('popstate', () => {
    const urlParams = new URLSearchParams(window.location.search);
    let idNav = urlParams.get('id');
    if (idNav) {
      loadProjeto(idNav);
    }
  });

});
