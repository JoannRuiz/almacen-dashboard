// Menú lateral colapsable (off-canvas en móvil)
const dashboard = document.getElementById('dashboard');
const toggleBtn = document.getElementById('sidebarToggle');
const scrim = document.getElementById('sidebarScrim');
const sidebar = document.getElementById('sidebar');

function openSidebar() {
  dashboard.classList.add('sidebar-open');
  toggleBtn.setAttribute('aria-expanded', 'true');
  toggleBtn.setAttribute('aria-label', 'Cerrar menú de navegación');
  scrim.hidden = false;
}

function closeSidebar() {
  dashboard.classList.remove('sidebar-open');
  toggleBtn.setAttribute('aria-expanded', 'false');
  toggleBtn.setAttribute('aria-label', 'Abrir menú de navegación');
  scrim.hidden = true;
}

toggleBtn.addEventListener('click', () => {
  const isOpen = dashboard.classList.contains('sidebar-open');
  isOpen ? closeSidebar() : openSidebar();
});

scrim.addEventListener('click', closeSidebar);

// Cerrar con Escape, y devolver el foco al botón
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && dashboard.classList.contains('sidebar-open')) {
    closeSidebar();
    toggleBtn.focus();
  }
});

// Cerrar el sidebar al navegar (útil en móvil, donde es un panel superpuesto)
sidebar.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 700) {
      closeSidebar();
    }
  });
});
