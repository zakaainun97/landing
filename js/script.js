       // Fungsi untuk menampilkan pop-up
       function tampilkanPopUp() {
        const popup = document.getElementById("myPopup");
        popup.classList.add("show");
    }

    // Fungsi untuk menutup pop-up
    function tutupPopUp() {
        const popup = document.getElementById("myPopup");
        popup.classList.remove("show");
    }

    // Menambahkan event listener agar pop-up muncul ketika halaman selesai dimuat
    window.onload = tampilkanPopUp;

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    window.onscroll = function() {
        const scrollUpButton = document.querySelector('.scroll-up');
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollUpButton.style.display = "block";
        } else {
            scrollUpButton.style.display = "none";
        }
    };

    // Swipe functionality
    const slider = document.getElementById('slider');
    let startX;

    slider.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    slider.addEventListener('touchend', (e) => {
        const endX = e.changedTouches[0].clientX;
        if (startX > endX + 50) {
            plusSlides(1);
        } else if (startX < endX - 50) {
            plusSlides(-1);
        }
    });

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function toggleMenu() {
        const navMenu = document.getElementById('navMenu');
        if (navMenu.style.display === "flex") {
            navMenu.style.display = "none";
        } else {
            navMenu.style.display = "flex";
        }
    }

    // Slider
    function moveSlide(sliderId, step) {
        const sliderContainer = document.getElementById(sliderId);
        const slides = sliderContainer.querySelectorAll('.slide');
        const totalSlides = slides.length;
        let currentIndex = 0;
    
        slides.forEach((slide, index) => {
            if (slide.classList.contains('active')) {
                currentIndex = index;
                slide.classList.remove('active');
            }
        });
    
        let newIndex = (currentIndex + step + totalSlides) % totalSlides;
        slides[newIndex].classList.add('active');
    
        sliderContainer.querySelector('.slider').style.transform = `translateX(-${newIndex * 100}%)`;
    }
    