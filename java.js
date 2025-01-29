window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 0) {
        header.classList.add('scroll-shadow');
    } else {
        header.classList.remove('scroll-shadow');
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".cover-section.fade-in");
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add("visible");
        }, index * 500);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".about.fade-in");
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add("visible");
        }, index * 500); 
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".fade-in");
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add("visible");
        }, index * 500); 
    });
});

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}


function showAlert(event) {
    event.preventDefault();
    alert("Your message has been sent.");
  }



  function showNextImage(element) {
    const carousel = element.closest('.carousel');
    const images = carousel.querySelectorAll('.carousel-image');
    let currentIndex;
    images.forEach((img, index) => {
      if (img.style.display !== 'none') {
        currentIndex = index;
        img.style.display = 'none';
      }
    });
    const nextIndex = (currentIndex + 1) % images.length;
    images[nextIndex].style.display = 'block';
  }

  function showPrevImage(element) {
    const carousel = element.closest('.carousel');
    const images = carousel.querySelectorAll('.carousel-image');
    let currentIndex;
    images.forEach((img, index) => {
      if (img.style.display !== 'none') {
        currentIndex = index;
        img.style.display = 'none';
      }
    });
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    images[prevIndex].style.display = 'block';
  }
