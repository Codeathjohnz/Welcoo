// JavaScript code
    const sliderContainer = document.querySelector('.Deathjohnz-johnz');
    const sliderImages = document.querySelector('.Naruto');
    let imageIndex = 0;

    // Create and style the tagline element
    const tagline = document.createElement('div');
    tagline.classList.add('tagline');
    tagline.textContent = 'ads';
    sliderContainer.appendChild(tagline);

    function slideImage() {
      if (imageIndex === sliderImages.children.length) {
        imageIndex = 0;
      }
      sliderImages.style.transform = `translateX(-${imageIndex * 100}%)`;
      imageIndex++;
    }

    setInterval(slideImage, 3000);