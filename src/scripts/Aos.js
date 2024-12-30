import AOS from 'aos';

window.addEventListener('load', () => {
  AOS.init({
    offset: 150,
    duration: 700,
    easing: 'ease-in-out',
    once: false,
    mirror: false,
    anchorPlacement: 'center-bottom',
    disable: false,
    startEvent: 'DOMContentLoaded',
    disableMutationObserver: false,
  });

  // Refresh AOS when all content is loaded
  setTimeout(() => {
    AOS.refresh();
  }, 500);
});