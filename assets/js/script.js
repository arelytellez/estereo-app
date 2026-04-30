function setMode(mode) {
  const images = document.querySelectorAll(".stereo-img");

  images.forEach(img => {
    if (mode === "side") {
      img.src = img.dataset.side;
    } else {
      img.src = img.dataset.anaglyph;
    }
  });
}