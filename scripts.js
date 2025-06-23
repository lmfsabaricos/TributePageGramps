// Slideshow
let current = 0;
const slides = document.querySelectorAll(".slide");

setInterval(() => {
  slides[current].classList.remove("showing");
  current = (current + 1) % slides.length;
  slides[current].classList.add("showing");
}, 3000);

// Gallery
const galleryImages = [
  "Images/Gal10.jpg",
  "Images/G8.jpg",
  "Images/Gal1.jpg",
  "Images/Gal2.jpg",
  "Images/Gal5.jpg",
  "Images/Gal6.jpg",
  "Images/Gal3.jpg",
  "Images/Gal7.jpg",
  "Images/Gal8.jpg",
  "Images/Gal9.jpg",
  "Images/Gal12.jpg",
  "Images/Gal13.jpg",
  "Images/Gal14.jpg",
  "Images/Gal15.jpg",
  "Images/Gal16.jpg",
];

let currentImage = 0;
const imgEl = document.getElementById("gallery-image");

document.getElementById("prev").addEventListener("click", () => {
  currentImage = (currentImage - 1 + galleryImages.length) % galleryImages.length;
  imgEl.src = galleryImages[currentImage];
});

document.getElementById("next").addEventListener("click", () => {
  currentImage = (currentImage + 1) % galleryImages.length;
  imgEl.src = galleryImages[currentImage];
});


// Lightbox click-to-enlarge
imgEl.addEventListener("click", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightboxImg.src = galleryImages[currentImage];
  lightbox.classList.remove("hidden");
});

document.getElementById("close-lightbox").addEventListener("click", () => {
  document.getElementById("lightbox").classList.add("hidden");
});


const counters = document.querySelectorAll('.count');
const speed = 100;

counters.forEach(counter => {
  const target = +counter.getAttribute('data-target');
  const suffix = counter.getAttribute('data-suffix') || '';
  
  const updateCount = () => {
    let count = +counter.innerText.replace(/,/g, '').replace('+', '');
    const increment = Math.ceil(target / speed);

    if (count < target) {
      counter.innerText = Math.min(count + increment, target).toLocaleString() + suffix;
      setTimeout(updateCount, 40);
    } else {
      counter.innerText = target.toLocaleString() + suffix;
    }
  };

  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      updateCount();
      observer.disconnect();
    }
  });

  observer.observe(counter);
});

document.addEventListener("click", () => {
  const audio = document.getElementById("bg-music");
  if (audio && audio.paused) {
    audio.play().catch(err => console.log("Autoplay blocked:", err));
  }
}, { once: true });

document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("bg-music");
  const btn = document.getElementById("music-toggle");

  if (btn && audio) {
    btn.addEventListener("click", () => {
      if (audio.paused) {
        audio.play();
        btn.textContent = "🔊 Music";
      } else {
        audio.pause();
        btn.textContent = "🔇 Music";
      }
    });
  }
});

