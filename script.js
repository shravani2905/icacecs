// Function to show the corresponding section when a link is clicked
function showSection(sectionId) {
  // Hide all sections
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => {
    section.classList.remove('active');
  });

  // Show the clicked section
  const sectionToShow = document.getElementById(sectionId);
  if (sectionToShow) {
    sectionToShow.classList.add('active');
  }
}

// Show the 'home' section by default when the page loads
document.addEventListener("DOMContentLoaded", function() {
  showSection('home');
});
