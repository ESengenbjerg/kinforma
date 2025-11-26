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
