function showSection(sectionId) {
  // Select all elements with the 'content-section' class
  const sections = document.querySelectorAll('.content-section');
  
  // Loop through each section and remove the 'active' class
  sections.forEach(section => {
      section.classList.remove('active');
  });

  // Get the section to show using the provided sectionId
  const sectionToShow = document.getElementById(sectionId);

  // If the section exists, add the 'active' class to it
  if (sectionToShow) {
      sectionToShow.classList.add('active');
  }
}




// Initialize Swiper
var swiper = new Swiper('.swiper-container', {
  loop: true, // Enable looping
  autoplay: {
    delay: 2500, // Delay between slides
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 1, // Show one slide at a time on smaller screens
    },
    576: {
      slidesPerView: 1, // Show one slide at a time on mobile
    },
  },
});

