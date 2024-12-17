import AOS from 'aos';
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
      offset: 0,
      duration: 700,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
      anchorPlacement: 'top-bottom'
    });
  });