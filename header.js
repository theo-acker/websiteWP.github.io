// header.js — Injecte le <head> et la navbar sur toutes les pages

// ── Métadonnées et styles communs ──
const head = document.head;

const setMeta = (name, content) => {
  const meta = document.createElement('meta');
  meta.setAttribute(name === 'charset' ? 'charset' : 'name', name === 'charset' ? content : name);
  if (name !== 'charset') meta.content = content;
  head.appendChild(meta);
};

// charset et viewport
document.querySelector('meta[charset]') || setMeta('charset', 'UTF-8');
document.querySelector('meta[name="viewport"]') || (() => {
  const m = document.createElement('meta');
  m.name = 'viewport';
  m.content = 'width=device-width, initial-scale=1.0';
  head.appendChild(m);
})();

// Favicon
const favicon = document.createElement('link');
favicon.rel  = 'icon';
favicon.href = 'images/chat.png';
favicon.type = 'image/png';
head.appendChild(favicon);

// Feuille de style
const css = document.createElement('link');
css.rel  = 'stylesheet';
css.href = 'style.css';
head.appendChild(css);

// ── Navbar ──
const navbar = `
<nav class="navbar">
  <a href="index.html" class="navbar__logo">MonSite</a>
  <div class="navbar__actions">
    <a href="start.html"   class="btn btn--start">Start</a>
    <a href="apropos.html" class="btn btn--ghost">À propos</a>
  </div>
</nav>`;

document.body.insertAdjacentHTML('afterbegin', navbar);

// ── Année footer ──
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
