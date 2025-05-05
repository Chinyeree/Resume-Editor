// Local Storage Module

// Save resume data to localStorage
function saveToLocalStorage() {
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
    
    localStorage.setItem('resumeData', JSON.stringify(formData));
    showNotification('Resume data saved successfully!');
  }
  
  // Load resume data from localStorage
  function loadFromLocalStorage() {
    const savedData = localStorage.getItem('resumeData');
    if (savedData) {
      const formData = JSON.parse(savedData);
      
      fullNameInput.value = formData.fullName || '';
      jobTitleInput.value = formData.jobTitle || '';
      emailInput.value = formData.email || '';
      phoneInput.value = formData.phone || '';
      locationInput.value = formData.location || '';
      experienceInput.value = formData.experience || '';
      skillsInput.value = formData.skills || '';
      educationInput.value = formData.education || '';
      
      updatePreview();
      showNotification('Resume data loaded from saved draft!');
    }
  }