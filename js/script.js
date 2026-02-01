const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement;
const accordionHeaders = document.querySelectorAll(".accordion__header");
const menuLinks = document.querySelectorAll(".menu__link");

// Alterar tema
function changeTheme() {
  const currentTheme = rootHtml.getAttribute("data-theme");
  rootHtml.setAttribute("data-theme", currentTheme === "dark" ? "light" : "dark");
  toggleTheme.classList.toggle("bi-sun");
  toggleTheme.classList.toggle("bi-moon-stars");
}
toggleTheme.addEventListener("click", changeTheme);

// Accordion
accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const item = header.parentElement;
    item.classList.toggle("active");
  });
});

// Menu ativo
menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    menuLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

