// PDF Export and Print Module

// Print resume
function printResume() {
    window.print();
  }
  
  // Generate and download PDF
  function downloadPDF() {
    showNotification('Preparing PDF download...');
    
    const resumePreview = document.getElementById('resumePreview');
    const pdf = new jspdf.jsPDF('p', 'mm', 'a4');
    
    html2canvas(resumePreview).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm
      const imgHeight = canvas.height * imgWidth / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;
      
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      
      pdf.save(`${fullNameInput.value.replace(/\s+/g, '_')}_Resume.pdf`);
      showNotification('PDF downloaded successfully!');
    });
  }