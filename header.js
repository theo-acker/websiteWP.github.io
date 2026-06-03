// header.js — Injecte le <head> et la navbar sur toutes les pages

const head = document.head;

// charset
document.querySelector('meta[charset]') || (() => {
  const m = document.createElement('meta'); m.setAttribute('charset','UTF-8'); head.appendChild(m);
})();

// viewport
document.querySelector('meta[name="viewport"]') || (() => {
  const m = document.createElement('meta');
  m.name = 'viewport'; m.content = 'width=device-width, initial-scale=1.0';
  head.appendChild(m);
})();

// Favicon
const favicon = document.createElement('link');
favicon.rel = 'icon'; favicon.href = 'Images/chat.png'; favicon.type = 'image/png';
head.appendChild(favicon);

// CSS
const css = document.createElement('link');
css.rel = 'stylesheet'; css.href = 'style.css';
head.appendChild(css);

// Navbar — only "À propos" button, top-right
const navbar = `
<nav class="navbar">
  <span class="navbar__logo">MonSite</span>
  <div class="navbar__actions">
    <a href="apropos.html" class="btn btn--ghost">À propos</a>
  </div>
</nav>`;

document.body.insertAdjacentHTML('afterbegin', navbar);
