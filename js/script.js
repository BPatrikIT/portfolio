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