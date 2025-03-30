document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        const sections = document.querySelectorAll("div[id]"); // Select all divs with an id
        const navLinks = document.querySelectorAll(".navLinks a");

        if (sections.length === 0) {
            console.error("No sections found! Ensure divs with IDs exist.");
            return;
        }

        let currentSection = "Home"; // Default to Home
        let sectionInView = null; // To track which section is currently in view

        // Intersection Observer to track sections
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    sectionInView = entry.target.getAttribute("id");
                }
            });

            // Default to "Home" if no section is in view (in case we're at the top of the page)
            if (sectionInView === null) {
                sectionInView = "Home";
                document.title = "Patrik Bartok - Portfolio";
            }

            // Highlight the active link
            navLinks.forEach(link => {
                link.classList.remove("active");

                // Extract section name from href (ignoring "index.html#")
                const linkHash = link.getAttribute("href").split("#")[1]?.toLowerCase();
                if (linkHash === sectionInView.toLowerCase()) {
                    link.classList.add("active");
                }
                if (sectionInView.toLowerCase() === "home") {
                    document.title = "Patrik Bartok - Portfolio";
                } else if (sectionInView.toLowerCase() === "services") {
                    document.title = "Patrik Bartok - Services";
                }
            });
        }, {
            rootMargin: "0px 0px -80% 0px", // Adjusts when the section is considered "active"
            threshold: [0, 0.5, 1] // Ensures that a section stays active until 50% is out of view
        });

        sections.forEach(section => observer.observe(section));

        // Handle when you scroll up
        window.addEventListener('scroll', function () {
            if (window.scrollY <= 400) {
                currentSection = "Home"; // Highlight Home when at the top of the page
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    const linkHash = link.getAttribute("href").split("#")[1]?.toLowerCase();
                    if (linkHash === "home") {
                        link.classList.add("active");
                        document.title = "Patrik Bartok - Portfolio";
                    }
                });
            }
        });
        
        console.log("Active Section script is running!");
    }, 500); // Small delay to ensure everything is loaded
});
