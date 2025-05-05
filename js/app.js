// Main Application Script

// DOM Elements
const resumeForm = document.getElementById('resumeForm');
const loadingIndicator = document.getElementById('loadingIndicator');
const saveLoadButtons = document.getElementById('saveLoadButtons');
const saveButton = document.getElementById('saveButton');
const loadButton = document.getElementById('loadButton');
const clearButton = document.getElementById('clearButton');
const printButton = document.getElementById('printButton');
const downloadPdfButton = document.getElementById('downloadPdfButton');

// Preview Elements
const previewName = document.getElementById('previewName');
const previewContact = document.getElementById('previewContact');
const previewSummary = document.getElementById('previewSummary');
const previewExperience = document.getElementById('previewExperience');
const previewSkills = document.getElementById('previewSkills');
const previewEducation = document.getElementById('previewEducation');

// Form Elements
const fullNameInput = document.getElementById('fullName');
const jobTitleInput = document.getElementById('jobTitle');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const locationInput = document.getElementById('location');
const experienceInput = document.getElementById('experience');
const skillsInput = document.getElementById('skills');
const educationInput = document.getElementById('education');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  saveLoadButtons.classList.remove('hidden');
  loadFromLocalStorage();
  updatePreview();
});

// Event Listeners
resumeForm.addEventListener('submit', handleFormSubmit);
saveButton.addEventListener('click', saveToLocalStorage);
loadButton.addEventListener('click', loadFromLocalStorage);
clearButton.addEventListener('click', clearForm);
printButton.addEventListener('click', printResume);
downloadPdfButton.addEventListener('click', downloadPDF);

// Form inputs real-time preview update
const formInputs = resumeForm.querySelectorAll('input, textarea');
formInputs.forEach(input => {
  input.addEventListener('input', updatePreview);
});

// Handle form submission
function handleFormSubmit(e) {
  e.preventDefault();
  
  // Show loading indicator
  loadingIndicator.classList.remove('hidden');
  resumeForm.classList.add('hidden');
  
  // Get form data
  const formData = {
    fullName: fullNameInput.value,
    jobTitle: jobTitleInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    location: locationInput.value,
    experience: experienceInput.value,
    skills: skillsInput.value,
    education: educationInput.value
  };
  
  // Mock AI API call with setTimeout
  setTimeout(() => {
    generateAIContent(formData);
    loadingIndicator.classList.add('hidden');
    resumeForm.classList.remove('hidden');
  }, 2000);
}

// Update preview in real-time
function updatePreview() {
  previewName.textContent = fullNameInput.value || 'Your Name';
  
  const contactInfo = [
    emailInput.value || 'email@example.com',
    phoneInput.value || 'Phone',
    locationInput.value || 'Location'
  ];
  previewContact.textContent = contactInfo.join(' | ');
  
  updateSkillsPreview(skillsInput.value);
}

function updateSkillsPreview(skillsText) {
  if (!skillsText) return;
  
  const skills = skillsText.split(',').map(skill => skill.trim()).filter(skill => skill);
  let skillsHtml = '';
  
  skills.forEach(skill => {
    skillsHtml += `<span class="skill-tag">${skill}</span>`;
  });
  
  previewSkills.innerHTML = skillsHtml || '<p>Add your skills separated by commas</p>';
}

function clearForm() {
  resumeForm.reset();
  updatePreview();
  showNotification('Form cleared!');
}