
function loadFeedback() {
  console.log("Attempting to load feedback...");
  fetch('http://localhost:4000/foodFeedback')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
      console.log("Data received from server:", data);
      const feedbackList = document.getElementById('feedbackList');
      feedbackList.innerHTML = ''; // Clear current feedback
      data.forEach(feedback => {
          console.log("Adding feedback to list:", feedback);
          addFeedbackToList(feedback, feedbackList);
      });
  })
  .catch(error => {
      console.error('Error fetching feedback:', error);
  });
}

function addFeedbackToList(feedback, feedbackList) {
  const div = document.createElement('div');
  div.className = 'feedback';
  // Update these fields to match your database structure
  div.innerHTML = `
    <strong>Meal Type: ${feedback.meal_type}</strong><br>
    <strong>Food Name:</strong> ${feedback.food_name}<br>
    <strong>Rating:</strong> ${feedback.rating}<br>
    <p><strong>Comments:</strong> ${feedback.comments}</p>
    <p><strong>Submitted At:</strong> ${new Date(feedback.created_at).toLocaleString()}</p>
  `;
  feedbackList.appendChild(div);
}

// Load feedback initially and refresh every 30 seconds to check for new feedback
loadFeedback();
setInterval(loadFeedback, 30000);