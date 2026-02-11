// Scroll-triggered section animations
const sections = document.querySelectorAll('.section');
function revealSections() {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if(sectionTop < triggerBottom) section.classList.add('visible');
  });
}
window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);

// Hero parallax + glow trail
const heroText = document.querySelector('.hero-text');
const profile = document.querySelector('.profile-wrapper');
const glow = document.querySelector('.glow-trail');

window.addEventListener('scroll', () => {
  const scroll = window.scrollY;
  heroText.style.transform = `translateY(${scroll * 0.2}px)`;
  profile.style.transform = `translateY(${scroll * 0.3}px)`;

  // Glow trail opacity & intensity
  const glowIntensity = Math.max(0, 1 - scroll/300);
  glow.style.opacity = glowIntensity;
  profile.style.boxShadow = `0 40px 80px rgba(59,130,246,${0.5 + glowIntensity/2})`;
});
