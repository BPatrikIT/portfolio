    const images = Array.from({ length: 5 }, (_, i) => `files/images/gallery/references_img_${String(i + 1).padStart(2, '0')}.png`);
    const positions = ["far", "side", "center", "side", "far"];
    let currentIndex = 0;
    const gallery = document.getElementById("Gallery");

    function renderGallery() {
        gallery.innerHTML = "";
        for (let i = -2; i <= 2; i++) {
            let imgIndex = (currentIndex + i + images.length) % images.length;
            let img = document.createElement("img");
            img.onclick = () => openImage(i);
            img.src = images[imgIndex];
            img.className = positions[i + 2];
            img.style.transition = "transform 0.5s ease, opacity 0.5s ease"; // Add smooth transition
            gallery.appendChild(img);
        }
    }

    function rotateGallery(direction) {
        // Add a temporary class to trigger animation
        gallery.classList.add("rotating");
        setTimeout(() => {
            currentIndex = (currentIndex + direction + images.length) % images.length;
            renderGallery();
            gallery.classList.remove("rotating");
        }, 500); // Match the duration of the CSS transition
    }

    renderGallery();

    function openImage(i) {
        switch (i) {
            case -2:
                rotateGallery(i);
                break;
            case -1:
                rotateGallery(i);
                break;
            case 0:
                // Create modal container
                const modal = document.createElement("div");
                modal.id = "Modal";
                modal.style.position = "fixed";
                modal.style.top = "0";
                modal.style.left = "0";
                modal.style.width = "100%";
                modal.style.height = "100%";
                modal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
                modal.style.display = "flex";
                modal.style.justifyContent = "center";
                modal.style.alignItems = "center";
                modal.style.zIndex = "1000";

                // Create image element
                const img = document.createElement("img");
                img.src = images[currentIndex];
                img.style.maxWidth = "90%";
                img.style.maxHeight = "90%";
                img.style.border = "2px solid white";
                img.style.borderRadius = "8px";

                // Create navigation buttons
                const prevButton = document.createElement("button");
                prevButton.innerText = "Prev";
                prevButton.className = "btn btn-primary";
                prevButton.style.position = "absolute";
                prevButton.style.left = "10px";
                prevButton.style.top = "50%";
                prevButton.style.transform = "translateY(-50%)";
                prevButton.style.padding = "10px";
                prevButton.style.cursor = "pointer";
                prevButton.onclick = (e) => {
                    e.stopPropagation();
                    currentIndex = (currentIndex - 1 + images.length) % images.length;
                    img.src = images[currentIndex];
                };

                const nextButton = document.createElement("button");
                nextButton.innerText = "Next";
                nextButton.className = "btn btn-primary";
                nextButton.style.position = "absolute";
                nextButton.style.right = "10px";
                nextButton.style.top = "50%";
                nextButton.style.transform = "translateY(-50%)";
                nextButton.style.padding = "10px";
                nextButton.style.cursor = "pointer";
                nextButton.onclick = (e) => {
                    e.stopPropagation();
                    currentIndex = (currentIndex + 1) % images.length;
                    img.src = images[currentIndex];
                };

                // Append buttons and image to modal
                modal.appendChild(prevButton);
                modal.appendChild(img);
                modal.appendChild(nextButton);

                // Close modal on click
                modal.onclick = () => {
                    document.body.removeChild(modal);
                    rotateGallery(0); // Reset the gallery rotation
                };

                // Append modal to body
                document.body.appendChild(modal);
                break;
            case 1:
                rotateGallery(i);
                break;
            case 2:
                rotateGallery(i);
                break;
        }
    }