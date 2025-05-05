// Utility Functions

// Show notification
function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.add('show');
    
    setTimeout(() => {
      notification.classList.remove('show');
    }, 3000);
  }
  
  // Helper function to safely get an element by ID
  function getElement(id) {
    const element = document.getElementById(id);
    if (!element) {
      console.error(`Element with ID "${id}" not found.`);
    }
    return element;
  }
  
  // Helper function to create DOM elements
  function createElement(tag, attributes = {}, children = []) {
    const element = document.createElement(tag);
    
    // Set attributes
    Object.entries(attributes).forEach(([key, value]) => {
      if (key === 'className') {
        element.className = value;
      } else if (key === 'textContent') {
        element.textContent = value;
      } else {
        element.setAttribute(key, value);
      }
    });
    
    // Append children
    children.forEach(child => {
      if (typeof child === 'string') {
        element.appendChild(document.createTextNode(child));
      } else {
        element.appendChild(child);
      }
    });
    
    return element;
  }
  
  // Format date to readable string
  function formatDate(date) {
    const options = { year: 'numeric', month: 'long' };
    return new Date(date).toLocaleDateString(undefined, options);
  }
  
  // Generate random ID
  function generateId() {
    return Math.random().toString(36).substring(2, 15);
  }
  
  // Debounce function to limit function calls
  function debounce(func, delay) {
    let timeout;
    return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), delay);
    };
  }
  
  // Validate email address format
  function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  
  // Validate phone number format
  function isValidPhone(phone) {
    const regex = /^[\d\s\+\-\(\)]{10,15}$/;
    return regex.test(phone);
  }