// json.js
document.addEventListener("DOMContentLoaded", () => {
  const background = document.querySelector(".background");
  const images = document.querySelectorAll(".Trust, .Responsibirity, .Servise");

  // トランジション時間（ミリ秒）
  const fadeDuration = 3000; 
  const gap = 200;          
  const step = fadeDuration + gap;

  if (background) {
    background.style.opacity = 0;
    background.style.transition = `opacity ${fadeDuration}ms ease`;
  }

  images.forEach(img => {
    img.style.opacity = 0;
    img.style.transition = `opacity ${fadeDuration}ms ease`;
  });

  
  const startDelay = 100;
  setTimeout(() => {
    if (background) background.style.opacity = 1;

  }, startDelay);


  images.forEach((img, index) => {
    setTimeout(() => {
      img.style.opacity = 1;
    }, index * step);
  });
});