
const dinnerMenu = { 
                     "Classics": ["Basil Orzo",
                                "Chimichurri Sauce",
                                  "Grilled Mahi Mahi",
                      "Balsamic Grilled Flank Steak",
                                  "Mango Chutney",
                                  "Grilled Asparagus",
                                  "Sautéed Mushrooms",
                                  "Cilantro Chicken Taco",
                                  "Pork Carnitas Taco",
                                  "Beef Taco",
                                  "Refried Pinto Beans",
                                  "Mexican Rice"],
                     "Condiments-Garnish": ["Red Pepper Hummus",
                                            "Fresh Jalapeno"],
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
                                 "Have A Nice Day!",
                                 "Chocolate Ice Cream",
                                 "Chocolate Pudding",
                                 "Chocolate Mousse",
                                 "Vanilla Ice Cream",
                                 'Apple Pie',
                                 'Vanilla Pudding',
                                 "Chocolate Sheet Cake"],
                     "Grill": ["American Cheese", 
                               "Chicken & Cheese Quesadilla", 
                               "Bbq Burger & Crispy Onions"],
                      "Kosher": ["Cucumber Tomato Salad",
                                 "Roasted Carrots",
                                 "Roasted Marinated Vegetables",
                                 "Tabbouleh Salad",
                                 "Mixed Olives",
                                 "Yellow Rice With Turmeric",
                                 "Shish Taouk (Chicken Kebabs)",
                                 "Medium Thick & Chunky Salsa",
                                 "Pickled Jalapeno Peppers",
                                 "Beef Taco Meat",
                                 "Sauteed Mushrooms",
                                 'Fresh Tomatoes',
                                 'Diced Yellow Onions',
                                 '6" Yellow Corn Tortillas',
                                 'Vegan Shredded Cheddar Cheese',
                                 'Cilantro Rice',
                                 "Sauteed Peppers And Onions"],
                     "My Kitchen": ["Chicken Caesar Salad"],
                     "Pasta": ["Cajun Chicken Pasta Bowl",
                               "Roasted Vegetable Lasagna With Marinara", 
                               "Natural Meatball",
                               "Tricolor Rotini With Beef, Peppers, & Onions",
                               "Marinara Sauce"],
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
                                   "Hot Sliced Banana Peppers",
                                   "Hard-Boiled Egg",
                                   "Wheat Pita Bread",
                                   "Flax Seeds",
                                   "Kalamata Olives",
                                   "Shredded Cheddar Cheese",
                                   "Roasted Eggplant",
                                   "Traditional Caesar Dressing",
                                   "Extra Firm Tofu",
                                   "Spiced Pepitas",
                                   "Olive Oil",
                                   "Fresh Cantaloupe",
                                   "Cucumber",
                                   "Extra Firm Tofu",
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
                                          "Roasted Broccoli",
                                          "Black Beans",
                                          "Cilantro Cucumber Salad",
                                         "Traditional Rotisserie Chicken",
                                         "Seasoned Catfish Fillet",
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
    const menuContainer = document.getElementById('dinnerMenu');
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
    const menuContainer = document.getElementById('dinnerMenu');
    let generatedDinnerMenu = {}; // Store the generated menu
    for (const sectionName in menuData) {
        if (menuData.hasOwnProperty(sectionName)) {
            const sectionItems = menuData[sectionName];
            const randomItems = getRandomItems(sectionItems, minNumItems, maxNumItems);
            generatedDinnerMenu[sectionName] = randomItems; // Store section with random items
            const sectionHTML = generateRandomMenuSection(sectionName, randomItems);
            menuContainer.appendChild(sectionHTML);
        }
    }
    localStorage.setItem("generatedDinnerMenu", JSON.stringify(generatedDinnerMenu)); // Store the generated menu in local storage
}

// Function to generate the entire menu from stored data in local storage
function generateMenuFromStorage() {
    const menuContainer = document.getElementById('dinnerMenu');
    const storedMenu = JSON.parse(localStorage.getItem("generatedDinnerMenu"));
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
    let storedMenu = localStorage.getItem("generatedDinnerMenu");

  if (!storedMenu){
    generateRandomMenu(dinnerMenu, minNumItemsPerSection, maxNumItemsPerSection);

    let generatedDinnerMenu = document.getElementById('dinnerMenu').innerHTML;

    localStorage.setItem("generatedDinnerMenu", generatedDinnerMenu);

  } else { // If the menu is stored, retrieve it from local storage

      document.getElementById('dinnerMenu').innerHTML = storedMenu;
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

