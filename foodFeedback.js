// Function to display feedback for breakfast on the feedback page
function displayBreakfastFeedback() {
    const feedbackContainer = document.getElementById('feedbackContainer');
    const feedbackData = JSON.parse(localStorage.getItem('feedback')) || [];

    // Clear existing feedback in the container
    feedbackContainer.innerHTML = '';

    feedbackData.forEach(feedback => {
        // Check if the meal type is breakfast
        if (feedback['meal-type'] === 'Breakfast') {
            const feedbackHTML = document.createElement('div');
            feedbackHTML.innerHTML = `
                <p>Meal: ${feedback['meal-type']}</p>
                <p>Food Name: ${feedback['food-Name']}</p>
                <p>Comments: ${feedback.comments || 'N/A'}</p>
                <hr>
            `;
            feedbackContainer.appendChild(feedbackHTML);
        }
    });
}

// Function to display feedback for lunch on the feedback page
function displayLunchFeedback() {
    const feedbackContainer = document.getElementById('feedbackContainer');
    const feedbackData = JSON.parse(localStorage.getItem('feedback')) || [];

    // Clear existing feedback in the container
    feedbackContainer.innerHTML = '';

    feedbackData.forEach(feedback => {
        // Check if the meal type is lunch
        if (feedback['meal-type'] === 'Lunch') {
            const feedbackHTML = document.createElement('div');
            feedbackHTML.innerHTML = `
                <p>Meal: ${feedback['meal-type']}</p>
                <p>Food Name: ${feedback['food-Name']}</p>
             
                <p>Comments: ${feedback.comments || 'N/A'}</p>
                <hr>
            `;
            feedbackContainer.appendChild(feedbackHTML);
        }
    });
}

// Function to display feedback for dinner on the feedback page
function displayDinnerFeedback() {
    const feedbackContainer = document.getElementById('feedbackContainer');
    const feedbackData = JSON.parse(localStorage.getItem('feedback')) || [];

    // Clear existing feedback in the container
    feedbackContainer.innerHTML = '';

    feedbackData.forEach(feedback => {
        // Check if the meal type is dinner
        if (feedback['meal-type'] === 'Dinner') {
            const feedbackHTML = document.createElement('div');
            feedbackHTML.innerHTML = `
                <p>Meal: ${feedback['meal-type']}</p>
                <p>Food Name: ${feedback['food-Name']}</p>
            
                <p>Comments: ${feedback.comments || 'N/A'}</p>
                <hr>
            `;
            feedbackContainer.appendChild(feedbackHTML);
        }
    });
}

// Function to display feedback for dinner on the feedback page
function displayBrunchFeedback() {
    const feedbackContainer = document.getElementById('feedbackContainer');
    const feedbackData = JSON.parse(localStorage.getItem('feedback')) || [];

    // Clear existing feedback in the container
    feedbackContainer.innerHTML = '';

    feedbackData.forEach(feedback => {
        // Check if the meal type is dinner
        if (feedback['meal-type'] === 'Brunch') {
            const feedbackHTML = document.createElement('div');
            feedbackHTML.innerHTML = `
                <p>Meal: ${feedback['meal-type']}</p>
                <p>Food Name: ${feedback['food-Name']}</p>
              
                <p>Comments: ${feedback.comments || 'N/A'}</p>
                <hr>
            `;
            feedbackContainer.appendChild(feedbackHTML);
        }
    });
}

// Function to display feedback for dinner on the feedback page
function displayWeekendDinnerFeedback() {
    const feedbackContainer = document.getElementById('feedbackContainer');
    const feedbackData = JSON.parse(localStorage.getItem('feedback')) || [];

    // Clear existing feedback in the container
    feedbackContainer.innerHTML = '';

    feedbackData.forEach(feedback => {
        // Check if the meal type is dinner
        if (feedback['meal-type'] === 'Weekend_Dinner') {
            const feedbackHTML = document.createElement('div');
            feedbackHTML.innerHTML = `
                <p>Meal: ${feedback['meal-type']}</p>
                <p>Food Name: ${feedback['food-Name']}</p>
              
                <p>Comments: ${feedback.comments || 'N/A'}</p>
                <hr>
            `;
            feedbackContainer.appendChild(feedbackHTML);
        }
    });
}




// Attach event listeners to the submit button on the feedback form
window.onload = function() {
    const submitBtn = document.getElementById('submitFeedbackBtn');
    submitBtn.addEventListener('click', function() {
        /* const stars = parseInt(document.getElementById('rating').value);*/
        const foodName = document.getElementById('foodName').value;
        const comments = document.getElementById('comments').value;

        // Assume meal type is selected from a dropdown and its value is stored in mealType variable
        const mealType = document.getElementById('mealType').value;

        const feedback = {
            'meal-type': mealType,
            'food-Name': foodName,
            'comments': comments
        };

        let feedbackData = JSON.parse(localStorage.getItem('feedback')) || [];
        feedbackData.push(feedback);
        localStorage.setItem('feedback', JSON.stringify(feedbackData));

        // After submitting feedback, clear input fields
     /*   document.getElementById('rating').value = '';
        */
      document.getElementById('foodName').value = '';
        document.getElementById('comments').value = '';

        // After submitting feedback, display feedback based on the selected meal type
      if (mealType === 'Breakfast') {
          displayBreakfastFeedback();
      } else if (mealType === 'Lunch') {
          displayLunchFeedback();
      } else if (mealType === 'Dinner') {
          displayDinnerFeedback();
      } else if (mealType === 'Brunch') {
        displayBrunchFeedback();
      } else if (mealType === 'Weekend_Dinner') {
        displayWeekendDinnerFeedback();
      }
    });

    // Display existing feedback based on the selected meal type when the page loads
    const mealType = document.getElementById('mealType').value;
  if (mealType === 'Breakfast') {
      displayBreakfastFeedback();
  } else if (mealType === 'Lunch') {
      displayLunchFeedback();
  } else if (mealType === 'Dinner') {
      displayDinnerFeedback();
  } else if (mealType === 'Brunch') {
    displayBrunchFeedback();
  } else if (mealType === 'Weekend_Dinner') {
    displayWeekendDinnerFeedback();
  }

  const filterBtn = document.getElementById('filterFeedbackBtn');
  filterBtn.addEventListener('click', function() {
      const foodNameFilter = document.getElementById('foodNameFilter').value;
      filterFeedbackByFoodName(foodNameFilter);
  });
};


// Function to update displayed feedback based on the selected meal type
function updateFeedback() {
    const mealType = document.getElementById('mealType').value;

    // Call the appropriate function to display feedback based on the selected meal type
    if (mealType === 'Breakfast') {
        displayBreakfastFeedback();
    } else if (mealType === 'Lunch') {
        displayLunchFeedback();
    } else if (mealType === 'Dinner') {
        displayDinnerFeedback();
    } else if (mealType === 'Brunch') {
      displayBrunchFeedback();
    } else if (mealType === 'Weekend_Dinner') {
      displayWeekendDinnerFeedback();
    }
}

function filterFeedbackByFoodName(foodName) {
    const feedbackContainer = document.getElementById('feedbackContainer');
    const feedbackData = JSON.parse(localStorage.getItem('feedback')) || [];

    // Clear existing feedback in the container
    feedbackContainer.innerHTML = '';

    // Filter feedback data by food name
    const filteredFeedback = feedbackData.filter(feedback => feedback['food-Name'].toLowerCase() === foodName.toLowerCase());

    // If no feedback is found for the food item, display a message
    if(filteredFeedback.length === 0) {
        feedbackContainer.innerHTML = '<p>There is no feedback for this food item yet, be the first to leave a feedback! .</p>';
        return;
    }

    // Display the filtered feedback
    filteredFeedback.forEach(feedback => {
        const feedbackHTML = document.createElement('div');
        feedbackHTML.innerHTML = `
            <p>Meal: ${feedback['meal-type']}</p>
            <p>Food Name: ${feedback['food-Name']}</p>
          
            <p>Comments: ${feedback.comments || 'N/A'}</p>
            <hr>
        `;
        feedbackContainer.appendChild(feedbackHTML);
    });
}
