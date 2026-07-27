export function initModal() {
  const aviso = document.getElementById("aviso-desenvolvimento");
  const btnFechar = document.getElementById("btn-fechar-aviso");

  if (btnFechar && aviso) {
    btnFechar.addEventListener("click", () => {
      aviso.style.display = "none";
    });
  }
}
