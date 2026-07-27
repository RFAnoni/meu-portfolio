export function initTheme() {
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  const htmlElement = document.documentElement;
  
  const iconSun = '<path d="M12,4.5A7.5,7.5,0,1,0,19.5,12,7.5,7.5,0,0,0,12,4.5Zm0,13A5.5,5.5,0,1,1,17.5,12,5.5,5.5,0,0,1,12,17.5ZM12,3a1,1,0,0,0,1-1V1a1,1,0,0,0-2,0V2A1,1,0,0,0,12,3Zm0,18a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V22A1,1,0,0,0,12,21ZM22,11H21a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2ZM4,12a1,1,0,0,0-1-1H2a1,1,0,0,0,0,2H3A1,1,0,0,0,4,12ZM19.07,4.93a1,1,0,0,0-1.42,0l-.7.71a1,1,0,0,0,1.41,1.41l.71-.7A1,1,0,0,0,19.07,4.93ZM6.34,17.65a1,1,0,0,0-1.41,0l-.71.71a1,1,0,0,0,1.42,1.41l.7-.71A1,1,0,0,0,6.34,17.65ZM19.07,19.07a1,1,0,0,0,0-1.41l-.7-.71a1,1,0,0,0-1.41,1.41l.71.7A1,1,0,0,0,19.07,19.07ZM6.34,6.34A1,1,0,0,0,5.64,6a1,1,0,0,0-.71.3l-.7.71a1,1,0,0,0,1.41,1.41l.71-.7A1,1,0,0,0,6.34,6.34Z"/>';
  const iconMoon = '<path d="M12,3A9,9,0,1,0,21,12,9,9,0,0,0,12,3Zm0,16a7,7,0,1,1,7-7A7,7,0,0,1,12,19ZM12,6V18A6,6,0,1,0,12,6Z"/>';

  // Check Local Storage
  const savedTheme = localStorage.getItem("theme");
  
  // Default to Dark Mode (as it was the original design)
  if (savedTheme === "light") {
    htmlElement.setAttribute("data-theme", "light");
    themeIcon.innerHTML = iconSun;
  } else {
    // Dark is default, explicitly setting it is optional, but good for clarity
    htmlElement.removeAttribute("data-theme");
    themeIcon.innerHTML = iconMoon;
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = htmlElement.getAttribute("data-theme");
      
      if (currentTheme === "light") {
        htmlElement.removeAttribute("data-theme");
        localStorage.setItem("theme", "dark");
        themeIcon.innerHTML = iconMoon;
      } else {
        htmlElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        themeIcon.innerHTML = iconSun;
      }
    });
  }
}
