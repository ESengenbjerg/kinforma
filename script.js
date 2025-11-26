const cards = document.querySelectorAll(".productCard");

cards.forEach((card) => {
  const mainImage = card.querySelector(".productCardBorder img");
  const colorBoxes = card.querySelectorAll(".colorBox");

  colorBoxes.forEach((box) => {
    box.addEventListener("click", () => {
      const newSrc = box.getAttribute("data-image");
      if (newSrc) {
        mainImage.src = newSrc;
      }
    });
  });
});

const images = [
  "produkter/Studiobild_alternativ02_jacka.png",
  "produkter/Studiobild_alternativ01_jacka.png",
];

let index = 0;

const imgElement = document.getElementById("slideshow");

// Visa första bilden direkt
imgElement.src = images[index];
imgElement.style.opacity = 1;

function showImage(newIndex) {
  imgElement.style.opacity = 0;

  setTimeout(() => {
    index = (newIndex + images.length) % images.length;
    imgElement.src = images[index];
    imgElement.style.opacity = 1;
  }, 500);
}

setInterval(() => {
  showImage(index + 1);
}, 3000);
