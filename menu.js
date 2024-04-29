const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const targetUrl = 'https://menus.sodexomyway.com/BiteMenu/Menu?menuId=15533&locationId=54245001&whereami=https://rollinscollege.sodexomyway.com/dining-near-me/marketplace';

fetch(proxyUrl + targetUrl)
 .then(response => response.text())
 .then(html => {
    // Parse the HTML content
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    // Extract the menu from the specific HTML element
    const menuSection = doc.getElementById('bite-menu');
    displayMenu(menuSection);
 })
 .catch(error => console.error('Error fetching menu:', error));




