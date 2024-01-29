document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('complaintSubmissionForm').addEventListener('submit', function (event) {
      event.preventDefault();
      submitComplaint();
    });
  });
  
  function submitComplaint() {
    const complaintType = document.getElementById('complaintType').value;
    const complaintText = document.getElementById('complaintText').value;
  
    if (complaintText.trim() !== "") {
      const complaintsList = document.getElementById('complaintsList');
      const complaintItem = document.createElement('li');
      complaintItem.classList.add('complaint-item');
      complaintItem.innerHTML = `<strong>${complaintType}:</strong> ${complaintText}`;
      complaintsList.appendChild(complaintItem);
  
      // Clear the form
      document.getElementById('complaintType').value = 'hostel'; // Reset to default
      document.getElementById('complaintText').value = '';
  
      // You can add logic here to save the complaint to a database or perform other actions
    } else {
      alert("Please enter a valid complaint.");
    }
  }
  