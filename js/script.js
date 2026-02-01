// ===================== ACCORDION =====================
const accordions = document.querySelectorAll('.accordion__item');

accordions.forEach(item => {
  const header = item.querySelector('.accordion__header');

  header.addEventListener('click', () => {
    // Fecha outros itens
    accordions.forEach(i => {
      if(i !== item) i.classList.remove('active');
    });
    // Abre ou fecha o clicado
    item.classList.toggle('active');
  });
});

// ===================== MENU MOBILE =====================
const mobileLinks = document.querySelectorAll('.nav--mobile .menu__link');
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Remove active de todos
    mobileLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// ===================== MENU DESKTOP =====================
const desktopLinks = document.querySelectorAll('.menu--principal .menu__link');
desktopLinks.forEach(link => {
  link.addEventListener('click', () => {
    desktopLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// ===================== SCROLL SUAVE =====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
