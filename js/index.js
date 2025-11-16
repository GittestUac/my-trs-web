// index.js
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

// ----------------------------------
// お問い合わせフォーム切り替え処理
// ----------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const generalBtn = document.getElementById("generalBtn");
  const corporationBtn = document.getElementById("corporationBtn");
  const generalForm = document.getElementById("generalForm");
  const corporationForm = document.getElementById("corporationForm");

  if (!generalBtn || !corporationBtn || !generalForm || !corporationForm) return;

  // 初期表示（一般フォームを表示）
  generalForm.classList.remove("hidden");
  corporationForm.classList.add("hidden");
  generalBtn.classList.add("active");
  corporationBtn.classList.remove("active");

  // 「一般の方はこちら」クリック時
  generalBtn.addEventListener("click", function () {
    generalForm.classList.remove("hidden");
    corporationForm.classList.add("hidden");

    generalBtn.classList.add("active");
    corporationBtn.classList.remove("active");
  });

  // 「法人の方はこちら」クリック時
  corporationBtn.addEventListener("click", function () {
    corporationForm.classList.remove("hidden");
    generalForm.classList.add("hidden");

    corporationBtn.classList.add("active");
    generalBtn.classList.remove("active");
  });
});



// フッター読み込み
fetch("footer.html")
  .then(response => response.text())
  .then(data => {
      document.getElementById("footer").innerHTML = data;
  });