function openImage(i) {
    const images = Array.from({ length: 4 }, (_, i) => `files/images/gallery/references_img_${String(i+1).padStart(2, '0')}.png`);
    let currentIndex = i-1;
    console.log("Current index:", currentIndex);
    const gallery = document.getElementById("Gallery");
    const links = ["https://www.nagyvolgyvendeghaz.hu/", "https://www.patrikit.hu/amPERelektric/", "https://github.com/BPatrikIT/holdViolaVendeghaz", "https://github.com/BPatrikIT/MasterMind"];

    // Create modal container
    const modal = document.createElement("div");
    modal.id = "Modal";

    // Create image element
    const img = document.createElement("img");
    img.src = images[currentIndex];

    // Create "Go to Page" link
    const link = document.createElement("a");
    link.href = links[currentIndex];
    link.innerText = "Open Page";
    link.target = "_blank"; // Open link in a new tab

    // Create navigation buttons
    const prevButton = document.createElement("button");
    prevButton.innerText = "<";
    prevButton.className = "btn btn-primary";
    prevButton.onclick = (e) => {
        e.stopPropagation();
        if (currentIndex === 0) {
            currentIndex = images.length-1;
        } else {
            currentIndex = currentIndex - 1;
        }
        console.log("Current index:", currentIndex);
        img.src = images[currentIndex];
        link.href = links[currentIndex]; // Update link
    };

    const nextButton = document.createElement("button");
    nextButton.innerText = ">";
    nextButton.className = "btn btn-primary";
    nextButton.onclick = (e) => {
        e.stopPropagation();
        if (currentIndex === images.length-1) {
            currentIndex = 0;
        } else {
            currentIndex = currentIndex + 1;
        }
        console.log("Current index:", currentIndex);
        img.src = images[currentIndex];
        link.href = links[currentIndex]; // Update link
    };

    // Append buttons, image, and link to modal
    modal.appendChild(prevButton);
    modal.appendChild(img);
    modal.appendChild(link);
    modal.appendChild(nextButton);

    // Close modal on click
    modal.onclick = () => {
        document.body.removeChild(modal);
    };

    // Append modal to body
    document.body.appendChild(modal);
}
