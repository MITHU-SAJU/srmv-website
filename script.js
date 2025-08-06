
// Select all elements to animate inside #banner
const bannerElements = document.querySelectorAll('#banner h1, #banner p, #banner .btn-home');

function restartAnimations() {
  bannerElements.forEach(el => {
    // Remove animation styles/classes
    el.style.animation = 'none';

    // Trigger reflow to reset animation
    void el.offsetWidth;

    // Re-apply animation
    el.style.animation = '';
  });
}

// Use Intersection Observer to detect when #banner is visible
const bannerSection = document.getElementById('banner');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      restartAnimations();
    }
  });
}, { threshold: 0.5 }); // Trigger when 50% visible

observer.observe(bannerSection);



const slideObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-in');
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.slide-left, .slide-right').forEach(el => {
  slideObserver.observe(el);
});