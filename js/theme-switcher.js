// Theme Switcher Module

// DOM Element
const themeToggle = document.getElementById('checkbox');

// Check for saved theme preference
document.addEventListener('DOMContentLoaded', () => {
  // Check if user previously selected dark mode
  if (localStorage.getItem('theme') === 'dark') {
    setDarkMode();
    themeToggle.checked = true;
  }
});

// Listen for toggle changes
themeToggle.addEventListener('change', () => {
  if (themeToggle.checked) {
    setDarkMode();
  } else {
    setLightMode();
  }
});

// Set dark mode
function setDarkMode() {
  document.body.classList.add('dark-mode');
  localStorage.setItem('theme', 'dark');
  
  // Update the resume document to light theme for better printing
  const resumePreview = document.getElementById('resumePreview');
  resumePreview.style.backgroundColor = 'white';
  resumePreview.style.color = '#1e293b';
  
  // Update resume text elements to ensure they remain readable
  const resumeName = document.getElementById('previewName');
  const resumeSections = document.querySelectorAll('.resume-section-title');
  
  if (resumeName) resumeName.style.color = '#1e293b';
  resumeSections.forEach(section => {
    section.style.color = '#1e293b';
  });
  
  showNotification('Dark mode enabled');
}

// Set light mode
function setLightMode() {
  document.body.classList.remove('dark-mode');
  localStorage.setItem('theme', 'light');
  
  // Reset resume preview styles
  const resumePreview = document.getElementById('resumePreview');
  resumePreview.style.backgroundColor = '';
  resumePreview.style.color = '';
  
  // Reset resume text elements
  const resumeName = document.getElementById('previewName');
  const resumeSections = document.querySelectorAll('.resume-section-title');
  
  if (resumeName) resumeName.style.color = '';
  resumeSections.forEach(section => {
    section.style.color = '';
  });
  
  showNotification('Light mode enabled');
}