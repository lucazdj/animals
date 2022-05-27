const sections = document.querySelectorAll('[data-animation="scroll"]');
const classActive = 'active';
const windowHalf = window.innerHeight * 0.6;

function animate() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top - windowHalf;
    if (sectionTop < 0) {
      section.classList.add(classActive);
    } else if (section.classList.contains(classActive)) {
      section.classList.remove(classActive);
    }
  });
}

export default function initAnimateScroll() {
  if (sections) {
    animate();
  }

  animate();

  window.addEventListener('scroll', animate);
}
