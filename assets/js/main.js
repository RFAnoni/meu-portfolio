import { initModal } from "./modules/modal.js";
import { initTheme } from "./modules/theme.js";
import { initRenderProjetos } from "./modules/renderProjetos.js";
import { initSVGLoader } from "./modules/svgLoader.js";

document.addEventListener("DOMContentLoaded", () => {
  initModal();
  initTheme();
  initRenderProjetos();
  initSVGLoader();
});
