// Access all div elements that have the class of menu
let menuContainer = document.getElementById('dinnerMenu');

// Function to generate HTML for a menu section with a random selection of items within a range
function generateRandomMenuSection(sectionName, items, minNumItems, maxNumItems) {
    const randomItems = getRandomItems(items, minNumItems, maxNumItems);
    const sectionHTML = document.createElement('div');
    sectionHTML.innerHTML = `<h2>${sectionName}</h2><ul>${randomItems.map(item => `<li class="rating-item" data-foodname="${item}" data-foodid="${sectionName.replace(/\s+/g, '-')}">${item} <div class="rating"> <span data-rating="1">&#9734;</span> <span data-rating="2">&#9734;</span> <span data-rating="3">&#9734;</span> <span data-rating="4">&#9734;</span> <span data-rating="5">&#9734;</span> </div> </li>`).join('')}</ul>`;
    return sectionHTML;
}

// Function to generate the entire menu with random items within a range
function generateRandomMenu(menuData, minNumItems, maxNumItems) {
    for (const sectionName in menuData) {
        if (menuData.hasOwnProperty(sectionName)) {
            const sectionItems = menuData[sectionName];
            const sectionHTML = generateRandomMenuSection(sectionName, sectionItems, minNumItems, maxNumItems);
            menuContainer.appendChild(sectionHTML);
        }
    }
}

// Attach event listeners to the rating stars
function attachEventListeners() {
    let stars = document.querySelectorAll(".rating span");
    stars.forEach(star => {
        star.addEventListener("click", function() {
            if (this.getAttribute("data-clicked")) {
                return false;
            }

            // Redirect to the feedback page with the rating value
            window.location.href = `foodFeedback.html`;

            this.setAttribute("data-clicked", "true");
            let rating = this.dataset.rating;
            let foodId = this.parentElement.parentElement.dataset.foodid;
            let foodName = this.parentElement.parentElement.dataset.foodname;
            console.log(rating, foodName, foodId);
            let data = {
                "stars": rating,
                "food-Id": foodId,
                "food-Name": foodName
            };
            let ratings = localStorage.getItem("ratings") ? JSON.parse(localStorage.getItem("ratings")) : [];
            ratings.push(data);
            localStorage.setItem("ratings", JSON.stringify(ratings));
        });
    });
}

// Generate the menu with random items within a range when the page loads
window.onload = function() {
    generateRandomMenu(dinnerMenu, minNumItemsPerSection, maxNumItemsPerSection);
    attachEventListeners();
};