const breakfastMenu =  {
    "Breakfast Sandwich": ["Oven Roasted Turkey Breast"],
    "Classics": ["Chocolate Chip pancakes",
                "Fresh Carrots",
                "Texas French Toast",
                "Sausage Gravy",
                "Scrambled Eggs",
                "Oatmeal",
                "Hash Browns",
                "Pork Sausage Patty",
                "Scrambled Eggs With Cheddar",
                "Tofu Scramble",
                "Scrambled Eggs and Sausage",
                "Cream of Wheat",
               "One Turkey Sausage Link",
                "Scrambled Tofu",
                "Buttermilk Biscuit",
                "Julienne Green Peppers",
                "Bacon",
                "Spinach & Pesto Scrambled Eggs",
                "Egg,Potato,Bacon & Cheese Bowl",
                "Vegan Shredded Cheddar Cheese"],
    "Condiments-Garnish": ["Red Pepper Hummus",
                           "Fresh Jalapeno"],
  "Miscellaneous": ["Have A Nice Day!"],
  "My Kitchen": ["Diced Yellow Onions",
                 "Fresh Plum Tomatoes",
                 "Fresh Button Mushroom",
                 "Extra Firm Tofu",
                 "Crumbled Bacon",
                 "Everything Omelet",
                 "Shredded Cheddar Cheese",
                 "Diced Green Peppers",
                 "Crumbled Feta Cheese",
                 "Diced Pork Sausage",
                 "Fresh Spinach"],
  "Parfait": ["Strawberries",
              "Non Fat Plain Greek Yogurt",
              "Low Fat Vanilla Yogurt",
              "Pineapple",
              "Low Fat Strawberry Yogurt"],
  "Vegetable": ["Fresh Celery"]
};



// Function to generate a random number between min (inclusive) and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate a random selection of items from an array within a specified range
function getRandomItems(array, minNumItems, maxNumItems) {
    const numItems = getRandomNumber(minNumItems, maxNumItems);
    const shuffledArray = array.sort(() => 0.5 - Math.random()); // Shuffle array
    return shuffledArray.slice(0, numItems); // Get first numItems
}

// Function to generate HTML for a menu section with a random selection of items within a range
function generateRandomMenuSection(sectionName, items, minNumItems, maxNumItems) {
    const randomItems = getRandomItems(items, minNumItems, maxNumItems);
    const sectionHTML = document.createElement('div');
    sectionHTML.innerHTML = `<h2>${sectionName}</h2><ul>${randomItems.map(item => {
      const averageRating = calculateAverageRating(item);
      return `<li class="rating-item" data-foodname="${item}">${item} <div class="rating"> <span data-rating="1">&#9733;</span> <span data-rating="2">&#9733;</span> <span data-rating="3">&#9733;</span> <span data-rating="4">&#9733;</span> <span data-rating="5">&#9733;</span> </div> <span class="average-rating">Average Rating: ${averageRating.toFixed(1)}</span> </li>`;
  }).join('')}</ul>`;
    return sectionHTML;
}

// Function to generate the entire menu with random items within a range
function generateRandomMenu(menuData, minNumItems, maxNumItems) {
    const menuContainer = document.getElementById('breakfastMenu');
    for (const sectionName in menuData) {
        if (menuData.hasOwnProperty(sectionName)) {
            const sectionItems = menuData[sectionName];
            const sectionHTML = generateRandomMenuSection(sectionName, sectionItems, minNumItems, maxNumItems);
            menuContainer.appendChild(sectionHTML);
        }
    }
}


// Function to generate the entire menu with random items within a range and store it in local storage
function generateAndStoreRandomMenu(menuData, minNumItems, maxNumItems) {
    const menuContainer = document.getElementById('breakfastMenu');
    let generatedBreakfastMenu = {}; // Store the generated menu
    for (const sectionName in menuData) {
        if (menuData.hasOwnProperty(sectionName)) {
            const sectionItems = menuData[sectionName];
            const randomItems = getRandomItems(sectionItems, minNumItems, maxNumItems);
            generatedBreakfastMenu[sectionName] = randomItems; // Store section with random items
            const sectionHTML = generateRandomMenuSection(sectionName, randomItems);
            menuContainer.appendChild(sectionHTML);
        }
    }
    localStorage.setItem("generatedBreakfastMenu", JSON.stringify(generatedBreakfastMenu)); // Store the generated menu in local storage
}

// Function to generate the entire menu from stored data in local storage
function generateMenuFromStorage() {
    const menuContainer = document.getElementById('breakfastMenu');
    const storedMenu = JSON.parse(localStorage.getItem("generatedBreakfastMenu"));
    let averageRatings = JSON.parse(localStorage.getItem("averageRatings")) || {};
    for (const sectionName in storedMenu) {
        if (storedMenu.hasOwnProperty(sectionName)) {
            const sectionItems = storedMenu[sectionName];
            const sectionHTML = document.createElement('div');
            sectionHTML.innerHTML = `<h2>${sectionName}</h2><ul>${sectionItems.map(item => {
                const averageRating = averageRatings[item] || 0;
                return `<li class="rating-item" data-foodname="${item}">${item} <div class="rating"> <span data-rating="1">&#9733;</span> <span data-rating="2">&#9733;</span> <span data-rating="3">&#9733;</span> <span data-rating="4">&#9733;</span> <span data-rating="5">&#9733;</span> </div> <span class="average-rating">Average Rating: ${averageRating.toFixed(1)}</span> </li>`;
            }).join('')}</ul>`;
            menuContainer.appendChild(sectionHTML);
        }
    }
}
function calculateAverageRating(foodName) {
    let ratings = JSON.parse(localStorage.getItem("ratings")) || [];
    let totalRating = 0;
    let ratingCount = 0;

    ratings.forEach(rating => {
        if (rating["food-Name"] === foodName) {
            totalRating += rating.stars;
            ratingCount++;
            console.log(totalRating)
            console.log(`Matching rating found for foodName: ${foodName}, stars: ${rating.stars}`);
        }
    });

    const averageRating = ratingCount > 0 ? totalRating / ratingCount : 0;
    console.log(`Average rating for foodName: ${foodName}, averageRating: ${averageRating}`);

    // Store the average rating in localStorage
    let averageRatings = JSON.parse(localStorage.getItem("averageRatings")) || {};
    averageRatings[foodName] = averageRating;
    localStorage.setItem("averageRatings", JSON.stringify(averageRatings));
  
    return averageRating;
  
}

function attachEventListeners() {
    let stars = document.querySelectorAll(".rating span");
    stars.forEach(star => {
        star.addEventListener("click", function() {
            // Prevent further clicks if any star in the same food item has already been clicked
            let clickedStars = this.parentElement.querySelectorAll('span[data-clicked="true"]');
            if (clickedStars.length > 0) {
                return;
            }

            let clickedRating = parseInt(this.dataset.rating);

            // Set data-clicked attribute for the clicked star and stars before it
            for (let i = 1; i <= clickedRating; i++) {
                let star = this.parentElement.querySelector(`span[data-rating="${i}"]`);
                if (star) star.setAttribute("data-clicked", "true");
            }

            let foodId = this.parentElement.parentElement.dataset.foodid;
            let foodName = this.parentElement.parentElement.dataset.foodname;
            console.log("Clicked star for foodName: ${foodName}");
            let data = {
                "stars": clickedRating,
                "food-Id": foodId,
                "food-Name": foodName
            };
            let ratings = localStorage.getItem("ratings") ? JSON.parse(localStorage.getItem("ratings")) : [];

            ratings.push(data); // Flatten the array

            localStorage.setItem("ratings", JSON.stringify(ratings));

            // Update the average rating for the clicked food item
            let averageRating = calculateAverageRating(foodName);
            let foodItemElement = document.querySelector(`li[data-foodname="${foodName}"]`);
            console.log(`Found food item element: ${foodItemElement}`);

            if (foodItemElement) {
                let averageRatingElement = foodItemElement.querySelector('.average-rating');
                console.log(`Found average rating element: ${averageRatingElement}`);
                if (averageRatingElement) {
                    averageRatingElement.textContent = `Average Rating: ${averageRating.toFixed(1)}`;
                  console.log(`Updated average rating for foodName: ${foodName}, averageRating: ${averageRating}`);

                }
            }
        });
    });
}


// Minimum and maximum number of items to show per section
const minNumItemsPerSection = 5;
const maxNumItemsPerSection = 10;


// Generate the menu with random items within a range when the page loads
window.onload = function() {
    // Check if the menu is already stored in local storage
    let storedMenu = localStorage.getItem("generatedBreakfastMenu");

  if (!storedMenu){
    generateRandomMenu(breakfastMenu, minNumItemsPerSection, maxNumItemsPerSection);
    
    let generatedBreakfastMenu = document.getElementById('breakfastMenu').innerHTML;
    
    localStorage.setItem("generatedBreakfastMenu", generatedBreakfastMenu);
    
  } else { // If the menu is stored, retrieve it from local storage
    
      document.getElementById('breakfastMenu').innerHTML = storedMenu;
    updateAverageRatings();
  }
    attachEventListeners();
};

function updateAverageRatings() {
    const foodItems = document.querySelectorAll('.rating-item');
    foodItems.forEach(item => {
        const foodName = item.dataset.foodname;
        const averageRating = calculateAverageRating(foodName);
        const averageRatingElement = item.querySelector('.average-rating');
        averageRatingElement.textContent = `Average Rating: ${averageRating.toFixed(1)}`;
    });
}


