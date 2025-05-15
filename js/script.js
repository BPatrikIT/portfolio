// Save the scroll position when the page is reloaded or navigated away from
window.addEventListener('beforeunload', function() {
    history.replaceState({ scrollPosition: scrollY }, null, "");
});

// Scroll back to the saved position when the page is loaded
window.addEventListener('load', function() {
    if (history.state && history.state.scrollPosition !== undefined) {
        window.scrollTo(0, history.state.scrollPosition);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navLinks a");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute("id");
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${id}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => observer.observe(section));
});

// Toggle high contrast mode
function toggleContrast() {
  const link = document.getElementById('contrast-style');
  if (link) {
    link.remove();
    localStorage.removeItem('highContrast');
  } else {
    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = 'style/highContrast.css';
    style.id = 'contrast-style';
    document.head.appendChild(style);
    localStorage.setItem('highContrast', 'true');
  }
}

function initContrastMode() {
    if (localStorage.getItem('highContrast') === 'true') {
    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = '../style/highContrast.css';
    style.id = 'contrast-style';
    document.head.appendChild(style);
  }
}
 /*
window.onload = () => {
  if (localStorage.getItem('highContrast') === 'true') {
    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = '../style/highContrast.css';
    style.id = 'contrast-style';
    document.head.appendChild(style);
  }
};
*/