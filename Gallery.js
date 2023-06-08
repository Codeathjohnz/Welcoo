function showWallpapers() {
      const images = document.getElementsByClassName('wallpaper');
      Array.from(images).forEach((image) => {
        image.style.display = 'block';
      });
      hideElementsByClassName('product');
      hideElementsByClassName('gadget');
    }

    function showProductInfo() {
      hideElementsByClassName('wallpaper');
      const images = document.getElementsByClassName('product');
      Array.from(images).forEach((image) => {
        image.style.display = 'block';
      });
      hideElementsByClassName('gadget');
    }

    function showGadgets() {
      hideElementsByClassName('wallpaper');
      hideElementsByClassName('product');
      const images = document.getElementsByClassName('gadget');
      Array.from(images).forEach((image) => {
        image.style.display = 'block';
      });
    }

    function hideElementsByClassName(className) {
      const elements = document.getElementsByClassName(className);
      Array.from(elements).forEach((element) => {
        element.style.display = 'none';
      });
    }

    function showFullImage(src) {
      const fullImageOverlay = document.querySelector('.full-image-overlay');
      const fullImage = document.querySelector('.full-image');
      fullImage.src = src;
      fullImageOverlay.classList.add('active');
    }

    function hideFullImage() {
      const fullImageOverlay = document.querySelector('.full-image-overlay');
      fullImageOverlay.classList.remove('active');
    }