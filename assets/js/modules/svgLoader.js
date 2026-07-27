export function initSVGLoader() {
    document.querySelectorAll('img').forEach(img => {
        // Local check para garantir que carrega os SVGs
        if (img.src && img.src.includes('.svg')) {
            fetch(img.src)
                .then(res => res.text())
                .then(text => {
                    // Substituir especificamente as cores originais pelas variáveis nativas globais
                    let newText = text
                        .replace(/#0f172a/gi, 'var(--bg-primary)')
                        .replace(/#22f38b/gi, 'var(--accent-primary)');

                    const parser = new DOMParser();
                    const doc = parser.parseFromString(newText, 'image/svg+xml');
                    const svg = doc.querySelector('svg');

                    if (svg) {
                        // Copiar propriedades da tag Img original
                        if (img.id) svg.id = img.id;
                        if (img.className) svg.className = img.className;
                        Array.from(img.attributes).forEach(attr => {
                            if (attr.name !== 'src' && attr.name !== 'id' && attr.name !== 'class' && attr.name !== 'alt' && attr.name !== 'width' && attr.name !== 'height') {
                                svg.setAttribute(attr.name, attr.value);
                            }
                        });

                        // Remover dimensões engessadas nativas para permitir o controle total via CSS
                        svg.removeAttribute('width');
                        svg.removeAttribute('height');

                        // Se o SVG vier preto nativo (ex: redes sociais) forçamos a herdar a cor do texto
                        if (!svg.hasAttribute('fill')) {
                            svg.setAttribute('fill', 'currentColor');
                        }

                        // Ajustar o hover das redes sociais onde for aplicável
                        if (img.closest('.redes-sociais') || img.closest('.theme-toggle')) {
                            svg.style.transition = 'color 0.2s';
                        }

                        img.replaceWith(svg);
                    }
                })
                .catch(err => console.log('Erro ao carregar SVG:', err));
        }
    });
}
