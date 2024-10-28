// Function to open the modal
function openModal(eventId) {
    document.getElementById(eventId).style.display = 'block';
  }
  
  // Function to close the modal
  function closeModal(eventId) {
    document.getElementById(eventId).style.display = 'none';
  }
  
  // Close the modal if user clicks outside of the modal
  window.onclick = function(event) {
    const modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
      if (event.target == modals[i]) {
        modals[i].style.display = 'none';
      }
    }
  }
  