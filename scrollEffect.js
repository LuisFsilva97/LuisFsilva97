document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".about, .education, .skills, .contact");
  
    window.addEventListener("scroll", () => {
      sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
  
        if (top < windowHeight * 0.5 && top > -windowHeight * 0.5) {
          section.classList.add("is-visible");
        } else {
          section.classList.remove("is-visible");
        }
      });
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".about, .education, .skills, .contact");
  
    window.addEventListener("scroll", () => {
      sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
  
        if (top < windowHeight * 0.5 && top > -windowHeight * 0.5) {
          section.classList.add("is-visible");
        } else {
          section.classList.remove("is-visible");
        }
      });
    });
    
    // Agregar desplazamiento agresivo al hacer clic en los enlaces del menú
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  });
  