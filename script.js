// Admin credentials
const ADMIN_CREDENTIALS = {
  username: "subham",
  password: "subham123"
};

// Sample menu data structure
const defaultMenuData = {
  starters: [
    { name: "Green Salad", price: "₹30", image: "images/starters/green-salad.jpg" },
    { name: "Onion Salad", price: "₹20", image: "images/starters/onion-salad.jpg" },
    { name: "Krishpie Chilli Baby Corn", price: "₹80", image: "images/starters/krishpie-chilli-baby-corn.jpg" },
    { name: "Spring Roll", price: "₹25", image: "images/starters/spring-roll.jpg" },
    { name: "Singara", price: "₹10", image: "images/starters/singara.jpg" },
    { name: "Chinese Singara", price: "₹15", image: "images/starters/chinese-singara.jpg" },
    { name: "Paneer Singara", price: "₹15", image: "images/starters/paneer-singara.jpg" },
    { name: "Veg Chop", price: "₹20", image: "images/starters/veg-chop.jpg" },
    { name: "Chicken Cutlet", price: "₹40", image: "images/starters/chicken-cutlet.jpg" },
    { name: "Veg Patties", price: "₹25", image: "images/starters/veg-patties.jpg" },
    { name: "Chicken Patties", price: "₹30", image: "images/starters/chicken-patties.jpg" },
    { name: "Krishpie Chicken", price: "₹90", image: "images/starters/krishpie-chicken.jpg" },
    { name: "Chicken Pakora", price: "₹70", image: "images/starters/chicken-pakora.jpg" },
    { name: "Pan Fry Pakoda", price: "₹60", image: "images/starters/pan-fry-pakoda.jpg" },
    { name: "Chicken Lollipop", price: "₹120", image: "images/starters/chicken-lollipop.jpg" },
    { name: "Small Chicken Pakoda", price: "₹50", image: "images/starters/small-chicken-pakoda.jpg" },
    { name: "Drums of Heaven", price: "₹140", image: "images/starters/drums-of-heaven.jpg" },
    { name: "Chicken Satay", price: "₹140", image: "images/starters/chicken-satay.jpg" }
  ],
  biryani: [
    { name: "Mutton Biryani", price: "₹180", image: "images/biryani/mutton.jpg" },
    { name: "Chicken Biryani", price: "₹120", image: "images/biryani/chicken.jpg" },
    { name: "Egg Chicken Biryani", price: "₹140", image: "images/biryani/egg-chicken.jpg" },
    { name: "Egg Biryani", price: "₹100", image: "images/biryani/egg.jpg" },
    { name: "Aloo Biryani", price: "₹90", image: "images/biryani/aloo.jpg" }
  ],
  mughlai: [
    { name: "Paratha", price: "₹20", image: "images/mughlai/paratha.jpg" },
    { name: "Double Egg Paratha", price: "₹30", image: "images/mughlai/double-egg-paratha.jpg" }
  ],
  rice: [
    { name: "Veg Fried Rice", price: "Half ₹60 | Full ₹80", image: "images/chinese/veg-fried-rice.jpg" },
    { name: "Egg Fried Rice", price: "Half ₹70 | Full ₹90", image: "images/chinese/egg-fried-rice.jpg" },
    { name: "Egg Chicken Fried Rice", price: "Half ₹90 | Full ₹110", image: "images/chinese/egg-chicken-fried-rice.jpg" },
    { name: "Mixed Fried Rice", price: "Half ₹100 | Full ₹130", image: "images/chinese/mixed-fried-rice.jpg" }
  ],
  chowmin: [
    { name: "Veg Chowmin", price: "Half ₹40 | Full ₹50", image: "images/chinese/veg-chowmin.jpg" },
    { name: "Egg Chowmin", price: "Half ₹50 | Full ₹60", image: "images/chinese/egg-chowmin.jpg" },
    { name: "Chicken Chowmin", price: "₹85", image: "images/chinese/chicken-chowmin.jpg" },
    { name: "Egg Chicken Chowmin", price: "₹95", image: "images/chinese/egg-chicken-chowmin.jpg" },
    { name: "Double Egg Chowmin", price: "₹70", image: "images/chinese/double-egg-chowmin.jpg" },
    { name: "Mix Chowmin", price: "₹100", image: "images/chinese/mix-chowmin.jpg" }
  ],
  momos: [
    { name: "Veg Momos", price: "₹50", image: "images/chinese/veg-momos.jpg" },
    { name: "Chicken Momos", price: "₹70", image: "images/chinese/chicken-momos.jpg" },
    { name: "Fried Momos", price: "₹60", image: "images/chinese/fried-momos.jpg" },
    { name: "Chicken Pan Fried Momos", price: "₹80", image: "images/chinese/pan-fried-momos.jpg" },
    { name: "Chilli Momos", price: "₹90", image: "images/chinese/chilli-momos.jpg" },
    { name: "Kurkure Momos", price: "₹100", image: "images/chinese/kurkure-momos.jpg" }
  ],
  soup: [
    { name: "Chicken Hot & Sour Soup", price: "₹60", image: "images/chinese/chicken-hot-sour-soup.jpg" },
    { name: "Chicken Sweet Corn Soup", price: "₹60", image: "images/chinese/chicken-sweet-corn-soup.jpg" },
    { name: "Chicken Coriander Soup", price: "₹60", image: "images/chinese/chicken-coriander-soup.jpg" },
    { name: "Chicken Hot Garlic Soup", price: "₹60", image: "images/chinese/chicken-hot-garlic-soup.jpg" },
    { name: "Chicken Manchurian Soup", price: "₹60", image: "images/chinese/chicken-manchurian-soup.jpg" }
  ],
  gravy: [
    { name: "Chilli Chicken", price: "Half ₹70 | Full ₹120", image: "images/chinese/chilli-chicken.jpg" },
    { name: "Dry Chilli Chicken", price: "₹100", image: "images/chinese/dry-chilli-chicken.jpg" },
    { name: "Chicken 65", price: "₹110", image: "images/chinese/chicken-65.jpg" }
  ],
  roti: [
    { name: "Rumali Roti", price: "₹15", image: "images/indian/rumali-roti.jpg" },
    { name: "Plain Roti", price: "₹10", image: "images/indian/plain-roti.jpg" },
    { name: "Lachha Paratha", price: "₹20", image: "images/indian/lachha-paratha.jpg" },
    { name: "Egg Roll", price: "₹40", image: "images/indian/egg-roll.jpg" },
    { name: "Double Egg Roll", price: "₹50", image: "images/indian/double-egg-roll.jpg" },
    { name: "Chicken Roll", price: "₹60", image: "images/indian/chicken-roll.jpg" },
    { name: "Egg Chicken Roll", price: "₹70", image: "images/indian/egg-chicken-roll.jpg" }
  ],
  indiangravy: [
    { name: "Kashmiri Aloo Dum", price: "₹60", image: "images/indian/kashmiri-aloo-dum.jpg" },
    { name: "Chana Masala", price: "₹50", image: "images/indian/chana-masala.jpg" },
    { name: "Tarka", price: "₹50", image: "images/indian/tarka.jpg" },
    { name: "Paneer Butter Masala", price: "₹90", image: "images/indian/paneer-butter-masala.jpg" },
    { name: "Kadai Paneer", price: "₹90", image: "images/indian/kadai-paneer.jpg" },
    { name: "Chicken Kosha", price: "₹110", image: "images/indian/chicken-kosha.jpg" },
    { name: "Chicken Do Pyaza", price: "₹110", image: "images/indian/chicken-do-pyaza.jpg" },
    { name: "Chicken Resala", price: "₹120", image: "images/indian/chicken-reshmi.jpg" },
    { name: "Chicken Korma", price: "₹120", image: "images/indian/chicken-korma.jpg" },
    { name: "Chicken Chaap", price: "₹130", image: "images/indian/chicken-chaap.jpg" },
    { name: "Handi Chicken", price: "₹130", image: "images/indian/handi-chicken.jpg" },
    { name: "Egg Chicken Tarka", price: "₹100", image: "images/indian/egg-chicken-tarka.jpg" },
    { name: "Egg Tarka", price: "₹80", image: "images/indian/egg-tarka.jpg" },
    { name: "Chicken Butter Masala", price: "₹130", image: "images/indian/chicken-butter-masala.jpg" }
  ],
  combo: [
    { name: "Fried Rice (Veg) + Chilli Chicken + Cold Drink", price: "₹130", image: "images/combo/friedrice-chillichicken.jpg" },
    { name: "Chowmin (Veg) + Chilli Chicken + Cold Drink", price: "₹130", image: "images/combo/chowmin-chillichicken.jpg" },
    { name: "2 Lachha Paratha + Chilli Chicken + Cold Drink", price: "₹130", image: "images/combo/lachha-chilli.jpg" },
    { name: "2 Lachha Paratha + Kashmiri Aloo Dum + Cold Drink", price: "₹120", image: "images/combo/lachha-alu.jpg" }
  ]
};

// Load menu data from localStorage or use default data
function getMenuData() {
  const savedData = localStorage.getItem('triyashaMenuData');
  return savedData ? JSON.parse(savedData) : defaultMenuData;
}

// Save menu data to localStorage
function saveMenuData(data) {
  localStorage.setItem('triyashaMenuData', JSON.stringify(data));
}

// Load menu data and render the menu
function loadDynamicMenu() {
  const menuData = getMenuData();
  const menuContainer = document.getElementById('dynamic-menu-container');
  
  if (!menuContainer) return;
  
  menuContainer.innerHTML = '';
  
  // Starters section (if exists)
  if (menuData.starters && menuData.starters.length > 0) {
    const startersSection = document.createElement('div');
    startersSection.className = 'menu-section';
    startersSection.innerHTML = `
      <h3 class="sub-heading">Starters</h3>
      <div class="menu-grid">
        ${menuData.starters.map(item => `
          <div class="menu-item">
            ${item.image ? `<img src="${item.image}" alt="${item.name}">` : ''}
            <h4>${item.name}</h4>
            <p>${item.price}</p>
          </div>
        `).join('')}
      </div>
    `;
    menuContainer.appendChild(startersSection);
  }
  
  // Other sections (collapsible)
  const collapsibleSections = ['biryani', 'mughlai', 'rice', 'chowmin', 'momos', 'soup', 'gravy', 'roti', 'indiangravy', 'combo'];
  
  const collapsibleWrapper = document.createElement('div');
  collapsibleWrapper.className = 'collapsible-wrapper';
  
  collapsibleSections.forEach(section => {
    if (menuData[section] && menuData[section].length > 0) {
      const sectionDiv = document.createElement('div');
      sectionDiv.className = 'menu-section collapsible';
      sectionDiv.innerHTML = `
        <div class="toggle-card toggle">
          <img src="images/icons/${section}.jpg" alt="${section}">
          <span>${section.charAt(0).toUpperCase() + section.slice(1)}</span>
          <span class="arrow">▼</span>
        </div>
        <div class="content">
          <div class="menu-grid">
            ${menuData[section].map(item => `
              <div class="menu-item">
                ${item.image ? `<img src="${item.image}" alt="${item.name}">` : ''}
                <h4>${item.name}</h4>
                <p>${item.price}</p>
              </div>
            `).join('')}
          </div>
        </div>
      `;
      collapsibleWrapper.appendChild(sectionDiv);
    }
  });
  
  menuContainer.appendChild(collapsibleWrapper);
  
  // Initialize collapsible functionality
  initCollapsibleSections();
}

// Initialize collapsible sections
function initCollapsibleSections() {
  document.querySelectorAll(".menu-section.collapsible .toggle").forEach(card => {
    card.addEventListener("click", () => {
      const section = card.parentElement;
      section.classList.toggle("active");

      const arrow = card.querySelector(".arrow");
      if (section.classList.contains("active")) {
        arrow.textContent = "▲";
      } else {
        arrow.textContent = "▼";
      }
    });
  });
}

// Handle admin button click
function setupAdminButton() {
  const adminBtn = document.getElementById('adminBtn');
  if (adminBtn) {
    adminBtn.addEventListener('click', () => {
      // Prompt for credentials
      const username = prompt("Enter username:");
      const password = prompt("Enter password:");
      
      if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
        window.location.href = "admin.html";
      } else {
        alert("Invalid credentials!");
      }
    });
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize with default data if no data exists
  if (!localStorage.getItem('triyashaMenuData')) {
    saveMenuData(defaultMenuData);
  }
  
  loadDynamicMenu();
  setupAdminButton();
});