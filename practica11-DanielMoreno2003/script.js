// 1. Navegación y Secciones

// Función para mostrar la sección correspondiente basándose en el hash de la URL.
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
    const activeSection = document.getElementById(sectionId);
    if (activeSection) activeSection.classList.add('active');
  }
  
  // Manejo del cambio de hash en la URL.
  window.addEventListener('hashchange', () => {
    showSection(location.hash.substring(1) || 'home');
  });
  
  // Al cargar la página.
  document.addEventListener('DOMContentLoaded', () => {
    showSection(location.hash.substring(1) || 'home');
  
// 2. Validación de Formularios
    document.getElementById('contactForm')?.addEventListener('submit', function(event) {
      if (!this.checkValidity()) {
        alert('Por favor, complete correctamente el formulario.');
        event.preventDefault();
      } else {
        alert('Formulario enviado correctamente.');
        event.preventDefault();
      }
    });
  
// 3. Eventos Básicos
    document.getElementById('btnAlert')?.addEventListener('click', () => {
      alert('¡Hola, esto es una alerta!');
    });
  
    document.getElementById('btnToggle')?.addEventListener('click', () => {
      const demoTexto = document.getElementById('demoTexto');
      if (demoTexto)
        demoTexto.style.display = demoTexto.style.display === 'none' ? 'block' : 'none';
    });
  
// 4. Control de Video (MP4)
    const videoPlayer = document.getElementById('videoPlayer');
    if (videoPlayer) {
      document.getElementById('playBtn')?.addEventListener('click', () => videoPlayer.play());
      document.getElementById('pauseBtn')?.addEventListener('click', () => videoPlayer.pause());
      document.getElementById('stopBtn')?.addEventListener('click', () => {
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
      });
    }
  
// 5. Menú Sidenav Desplegable
    document.getElementById('menuToggle')?.addEventListener('click', () => {
      const sidenav = document.getElementById('sidenav');
      sidenav.style.width = '250px';
    });
  
    document.getElementById('closeSidenav')?.addEventListener('click', () => {
      document.getElementById('sidenav').style.width = '0';
    });
  
    // Cerrar el sidenav al hacer clic fuera
    document.addEventListener('click', (event) => {
      const sidenav = document.getElementById('sidenav');
      const menuToggle = document.getElementById('menuToggle');
      if (sidenav && menuToggle && !sidenav.contains(event.target) && !menuToggle.contains(event.target)) {
        sidenav.style.width = '0';
      }
    });
  
// 6. Slideshow de Color en el Título
    const colors = ['#FF5733', '#33FF57', '#F0E130', '#9B59B6', '#F39C12'];
    let colorIndex = 0;
    const changeTextColor = () => {
      const h1 = document.getElementById('slideshowTitle');
      if (h1) {
        h1.style.color = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
      }
    };
    changeTextColor();
    setInterval(changeTextColor, 2000);
  });
  
// 7. Modal de Imágenes
  document.querySelectorAll('.gallery-img').forEach(img => {
    img.addEventListener('click', () => {
      const modal = document.getElementById('imageModal');
      const modalImg = document.getElementById('modalImg');
      const captionText = document.getElementById('caption');
      if (modal && modalImg && captionText) {
        modal.style.display = 'block';
        modalImg.src = img.src;
        captionText.textContent = img.alt;
      }
    });
  });
  
  document.getElementById('closeModal')?.addEventListener('click', () => {
    const modal = document.getElementById('imageModal');
    if (modal) modal.style.display = 'none';
  });
  