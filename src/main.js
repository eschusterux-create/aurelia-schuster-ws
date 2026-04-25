import './styles.css';

const app = document.getElementById('app');

if (app) {
  app.innerHTML = `
    <header class="header-bar" aria-label="Site Header">
      <h1 class="brand">Aurelia Harrer</h1>
    </header>
  `;
}
