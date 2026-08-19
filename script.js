document.addEventListener('DOMContentLoaded', () => {
  runPreloader();
  initTheme();
  animateCounter('counter', 100, 1200);
});

/* ---------- Preloader ---------- */
function runPreloader() {
  const preloader = document.getElementById('preloader');
  const text = document.getElementById('preloaderText');
  if (!preloader || !text) return;

  setTimeout(() => {
    text.textContent = '100 DAYS STREAK ACHIEVED 🔥';
  }, 1000);

  setTimeout(() => {
    preloader.classList.add('hide');
    document.body.classList.remove('loading');
  }, 2000);
}

/* ---------- Theme toggle ---------- */
function initTheme() {
  const themeBtn = document.getElementById('themeBtn');
  const savedTheme = localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  applyTheme(savedTheme);

  themeBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  });

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    themeBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
}

/* ---------- Count-up hero number ---------- */
function animateCounter(elementId, target, duration) {
  const el = document.getElementById(elementId);
  if (!el) return;

  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    el.textContent = Math.round(progress * target);
    if (progress < 1) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}
