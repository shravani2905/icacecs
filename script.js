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



