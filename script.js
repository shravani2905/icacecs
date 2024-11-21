function showSection(sectionId) {
  // Remove active class from all sections
  document.querySelectorAll('.content-section').forEach(section => {
      section.classList.remove('active');
  });

  // Add active class to the selected section
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
      targetSection.classList.add('active');
  }

  // Remove active class from all nav links
  document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
  });

  // Add active class to the clicked nav link
  const activeLink = document.querySelector(`.nav-link[onclick="showSection('${sectionId}')"]`);
  if (activeLink) {
      activeLink.classList.add('active');
  }
}
