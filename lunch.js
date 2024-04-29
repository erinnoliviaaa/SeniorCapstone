const lunchMenu =  {
  "Classics": ["MeatLoaf",
                 "Bbq Sauce",
                 "Baked Macaroni & Cheese",
                 "Braised Collard Greens",
                 "Baked Beans",
                 "Southern Fried Chicken",
                 "Buttermilk Cornbread",
                 "Chimichurri Sauce",
                 "Carne Asada Sirloin",
                 "House Made Kidney Beans",
                 "Cumin Grilled Chicken",
                 "Arroz Verdez",
                 "Carmelized Root Vegetables"],
    "Deli": ["Ham & Cheese on White",
             "Swiss Cheese",
             "Whole Grain Sub Roll",
             "Tomato Basil Tortilla",
             "Multi Grain Bread",
             "Garlic Grilled Chicken",
             "Sliced Plum Tomatoes",
             "Chipotle Mayonnaise",
             "Smoked Ham",
             "White Sub Roll",
             "American Cheese",
             "White Bread",
             "Olive Oil",
             "Hard-boiled Egg",
             "Wheat Pita Bread",
             "Spinach Herb Tortilla",
             "Hummus",
             "Honey Mustard Dressing",
             "Sliced Red Onions",
             "Fresh Spinach",
             "Flour Tortilla",
             "Roast Beef",
             '10" Whole Wheat Tortilla', 
             "Deli Turkey Breast",
             "Shredded Lettuce",
             "Cheddar Cheese",
             "Dill Pickle Chip",
             "Hot Sliced Banana Peppers",
             "Red Wine Vinegar"],
    "Dessert": ["Two Oatmeal Raisin Cookies",
                "Chocolate Chip Cookies",
                "Two Butter Sugar Cookies",
                "Sundae Bar",
                "Chocolate Ice Cream",
                "Chocolate Pudding",
                "Chocolate Mousse",
                "Vanilla Ice Cream",
                'Apple Pie',
                'Vanilla Pudding',
                "Chocolate Sheet Cake"],
    "Grill": ["Chicken & Cheese Quesadilla",
              "Swiss Cheese",
              "Sliced Red Onions",
              "French Fries",
              "All Beef Hot Dog",
              "Cheeseburger",
              "Bbq Burger & Crispy Onions",
              "Hamburger",
              "Cheese Quesadilla",
              "Cheddar Cheese",
              "Shredded Lettuce",
              "American Cheese",
              "Sliced Plum Tomatoes"],
    "Kosher": ["Sliced Cucumber",
               "Israeli Couscous & Roasted Corn Salad",
               "Cherry Tomatoes",
               "Fresh Red Onions",
               "Chopped Romaine",
               "Gyron Meat",
               "White Pita Bread", 
               "Roasted Egg Plant",
               "Gyro Bar",
               "Fresh Italian Parsley",
               "Tzatziki Sauce",
               "Greek Salad",
               "Tabbouleh Salad",
               "Mixed Olives",
               "Muhammara Wrap",
               "Classic Hummus",
               "Roasted Chickpeas",
               "Fresh Radishes",
               "Fattoush Salad"],
    "Miscellaneous": ["Have A Nice Day!"],
    "My Kitchen": ["Catfish Cakes",
                   "Chicken Machaca Hard Taco",
                   "Caesar Salad"],
    "Parfait": ["Fresh Strawberries",
                "Blackberries",
                "Fresh Honeydew",
                "Fresh Cantaloupe",
                "Non Fat Plain Greek Yogurt",
                "Low Fat Vanilla Yogurt",
                "Pineapple",
                "Low Fat Strawberry Yogurt",
               "Cottage Cheese"],
    "Pasta": ["Cajun Chicken Pasta Bowl",
              "Roasted Vegetable Lasagna With Marinara", 
              "Pesto Alfredo Sauce",
              "Whole Wheat Penne Pasta",
              "Tomato Basil Marinara",
              "Garlic Breadstick",
              "Marinara Sauce",
              "Alfredo Sauce",
              "Natural Meatball",
              "Lentil Penne",
              "Pepperoni Pizza",
              "Tricolor Rotini Pasta",
              "Penne Pasta"],
    "Pizza": ["Cheese Pizza", 
              "Bbq Chicken Pizza",
              "Formaggio Pizzarito"],
    "Salad Bar": ["Bacon",
                  "Spring Lettuce Mix",
                  "Craisins",
                  "Feta Cheese Crumbles",
                  "Guacamole",
                  "Fresh Jalapeno",
                  "Shredded Carrots",
                  "Honey Mustard Dressing", 
                  "Flax Seeds",
                  "Kalamata Olives",
                  "Shredded Cheddar Cheese",
                  "Roasted Eggplant",
                  "Traditional Caesar Dressing",
                  "Extra Firm Tofu",
                  "Spiced Pepitas",
                  "Balsamic Chicken Breast",
                  "Cooked Farro",
                  "Cherry Tomatoes",
                  "Yellow Corn Kernel",
                  "Lemon Wedge",
                  "Chickpeas",
                  "Cucumber",
                  "Shredded Parmesan Cheese",
                  "Chopped Romaine",
                  "Hummus",
                  "Red Quinoa",
                  "Edamame",
                  "French Bread Croutons",
                  "Fresh Spinach"],
    "Simple Servings": ["Grilled Chicken Breast",
                       "Lemony Chickpea Salad",
                       "Cilantro Leaf",
                       "Cilantro Basmati Rice",
                       "House Made Kidney Beans",
                       "Citrus Herb Tilapia",
                       "Roasted Zucchini",
                       "Yellow Rice",
                       "Pineapple Cucumber Salad",
                       "Grilled Steak",
                       "Roasted Brussels Sprouts",
                       "Aromatic Lentils",
                       "Herbed Roasted Potato Wedges",
                       "Grilled Asparagus",
                       "White Rice"],
    "Soup": ["Thick & Zesty Chili",
             "Aged Cheddar Cheese Sauce",
             "Tomato Basil Soup",
             "American Bounty Vegetable Soup"],
    "Vegan Station": ["Aromatic Lentils",
                      "Sweet Potato And Black Bean Chili",
                      "Quinoa Primavera",
                      "Marinated Portobello With Quinoa Pilaf",
                      "Black Beans",
                      "Millet",
                      "Thai Eggplant Salad",
                      "Traditional Garden Salad"]
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
    const menuContainer = document.getElementById('lunchMenu');
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
    const menuContainer = document.getElementById('lunchMenu');
    let generatedLunchMenu = {}; // Store the generated menu
    for (const sectionName in menuData) {
        if (menuData.hasOwnProperty(sectionName)) {
            const sectionItems = menuData[sectionName];
            const randomItems = getRandomItems(sectionItems, minNumItems, maxNumItems);
            generatedLunchMenu[sectionName] = randomItems; // Store section with random items
            const sectionHTML = generateRandomMenuSection(sectionName, randomItems);
            menuContainer.appendChild(sectionHTML);
        }
    }
    localStorage.setItem("generatedLunchMenu", JSON.stringify(generatedLunchMenu)); // Store the generated menu in local storage
}

// Function to generate the entire menu from stored data in local storage
function generateMenuFromStorage() {
    const menuContainer = document.getElementById('lunchMenu');
    const storedMenu = JSON.parse(localStorage.getItem("generatedLunchMenu"));
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
    let storedMenu = localStorage.getItem("generatedLunchMenu");

  if (!storedMenu){
    generateRandomMenu(lunchMenu, minNumItemsPerSection, maxNumItemsPerSection);

    let generatedLunchMenu = document.getElementById('lunchMenu').innerHTML;

    localStorage.setItem("generatedLunchMenu", generatedLunchMenu);

  } else { // If the menu is stored, retrieve it from local storage

      document.getElementById('lunchMenu').innerHTML = storedMenu;
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

