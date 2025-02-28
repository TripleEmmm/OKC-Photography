// Select lightbox and image
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

// Open lightbox when clicking on an image
document.querySelectorAll(".gallery-item").forEach(img => {
    img.addEventListener("click", function() {
        lightbox.style.display = "flex";
        lightboxImg.src = this.src;
    });
});

// Close lightbox when clicking the close button
function closeLightbox() {
    lightbox.style.display = "none";
}

// Close lightbox when clicking outside the image
lightbox.addEventListener("click", function(event) {
    if (event.target !== lightboxImg) {
        closeLightbox();
    }
});