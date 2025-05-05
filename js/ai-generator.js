// AI Content Generation Module

// Generate AI content with form data
function generateAIContent(formData) {
    // Mock AI-generated content
    const summary = generateProfessionalSummary(formData);
    const experience = generateExperienceContent(formData);
    const education = generateEducationContent(formData);
    
    // Update preview with AI content
    previewSummary.textContent = summary;
    previewExperience.innerHTML = experience;
    previewEducation.innerHTML = education;
    
    // Update skills
    updateSkillsPreview(formData.skills);
    
    // Show notification
    showNotification('Resume successfully generated!');
  }
  
  // Mock AI content generators
  function generateProfessionalSummary(data) {
    const summaries = [
      `${data.jobTitle} professional with extensive experience in the field. Skilled in problem-solving, teamwork, and delivering quality results. Seeking to leverage my skills and experience to drive success in a new challenging role.`,
      `Results-driven ${data.jobTitle} with a proven track record of success. Combines technical expertise with strong communication skills to deliver exceptional outcomes. Adept at working in fast-paced environments and adapting to new challenges.`,
      `Dedicated ${data.jobTitle} with significant industry experience. Strong analytical skills and attention to detail, committed to continuous improvement and professional development. Excellent team player with outstanding communication abilities.`
    ];
    
    return summaries[Math.floor(Math.random() * summaries.length)];
  }
  
  function generateExperienceContent(data) {
    // Parse the experience text to potentially extract job details
    const experienceText = data.experience;
    let html = '';
    
    if (experienceText.length > 10) {
      // Simple NLP-like processing to extract potential job entries
      const sentences = experienceText.split(/[.!?]+/).filter(s => s.trim().length > 0);
      const jobKeywords = ['worked as', 'position', 'role', 'job', 'company', 'employed', 'responsible'];
      
      let foundJobs = false;
      sentences.forEach(sentence => {
        const lowerSentence = sentence.toLowerCase();
        // Check if this sentence might be describing a job
        if (jobKeywords.some(keyword => lowerSentence.includes(keyword))) {
          foundJobs = true;
          
          // Try to extract company name (this is very simplified)
          let companyName = 'Company Name';
          const atIndex = lowerSentence.indexOf(' at ');
          const forIndex = lowerSentence.indexOf(' for ');
          if (atIndex > 0) {
            companyName = sentence.substring(atIndex + 4).trim();
            companyName = companyName.split(' ').slice(0, 3).join(' ');
          } else if (forIndex > 0) {
            companyName = sentence.substring(forIndex + 5).trim();
            companyName = companyName.split(' ').slice(0, 3).join(' ');
          }
          
          html += `
            <div class="experience-item">
              <div class="job-title">${data.jobTitle || 'Professional Role'}</div>
              <div class="job-company">${companyName} | 2020 - Present</div>
              <div class="job-description">
                • ${generateBulletPoint(data.jobTitle)}
                • ${generateBulletPoint(data.jobTitle)}
                • ${generateBulletPoint(data.jobTitle)}
              </div>
            </div>
          `;
        }
      });
      
      if (!foundJobs) {
        // Generic job if we couldn't parse specific ones
        html = `
          <div class="experience-item">
            <div class="job-title">${data.jobTitle || 'Professional Role'}</div>
            <div class="job-company">Company Name | 2020 - Present</div>
            <div class="job-description">
              • ${generateBulletPoint(data.jobTitle)}
              • ${generateBulletPoint(data.jobTitle)}
              • ${generateBulletPoint(data.jobTitle)}
            </div>
          </div>
          <div class="experience-item">
            <div class="job-title">Previous ${data.jobTitle}</div>
            <div class="job-company">Previous Company | 2017 - 2020</div>
            <div class="job-description">
              • ${generateBulletPoint(data.jobTitle)}
              • ${generateBulletPoint(data.jobTitle)}
            </div>
          </div>
        `;
      }
    } else {
      html = `<p>Please provide your work experience for AI-generated content.</p>`;
    }
    
    return html;
  }
  
  function generateBulletPoint(jobTitle) {
    const bulletPoints = {
      'Software Engineer': [
        'Developed and maintained web applications using JavaScript, HTML, and CSS',
        'Collaborated with cross-functional teams to implement new features',
        'Reduced application load time by 40% through code optimization',
        'Implemented responsive design principles for mobile compatibility',
        'Conducted code reviews and mentored junior developers'
      ],
      'Project Manager': [
        'Led cross-functional teams to deliver projects on time and within budget',
        'Managed project scope, timeline, and resources for enterprise initiatives',
        'Implemented agile methodologies resulting in 30% faster delivery times',
        'Conducted stakeholder meetings and prepared executive reports',
        'Developed risk mitigation strategies for complex projects'
      ],
      'Designer': [
        'Created user-centered designs for web and mobile applications',
        'Conducted user research and usability testing to improve product experience',
        'Developed brand identity guidelines for corporate clients',
        'Collaborated with development teams to ensure design implementation',
        'Created wireframes and prototypes for new product features'
      ],
      'Marketing Specialist': [
        'Developed marketing campaigns that increased customer acquisition by 25%',
        'Managed social media accounts with over 50K followers',
        'Created content strategies aligned with business goals',
        'Analyzed campaign performance metrics to optimize marketing ROI',
        'Collaborated with design team on brand messaging consistency'
      ],
      'default': [
        'Successfully delivered projects on time and within budget constraints',
        'Collaborated with cross-functional teams to achieve business objectives',
        'Implemented process improvements resulting in increased efficiency',
        'Received recognition for outstanding performance and dedication',
        'Developed innovative solutions to complex business challenges'
      ]
    };
    
    // Choose appropriate bullet points based on job title or use default
    let relevantPoints = bulletPoints.default;
    Object.keys(bulletPoints).forEach(key => {
      if (jobTitle && jobTitle.toLowerCase().includes(key.toLowerCase())) {
        relevantPoints = bulletPoints[key];
      }
    });
    
    return relevantPoints[Math.floor(Math.random() * relevantPoints.length)];
  }
  
  function generateEducationContent(data) {
    const educationText = data.education;
    let html = '';
    
    if (educationText && educationText.length > 5) {
      html = `<p>${educationText}</p>`;
    } else {
      html = `
        <div class="education-item">
          <div class="degree">Bachelor of Science in Computer Science</div>
          <div class="institution">University of Technology | 2016</div>
        </div>
      `;
    }
    
    return html;
  }