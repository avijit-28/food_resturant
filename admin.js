// DOM Elements
const adminDashboard = document.getElementById('admin-dashboard');
const saveItemBtn = document.getElementById('save-item');
const cancelEditBtn = document.getElementById('cancel-edit');
const menuItemsContainer = document.getElementById('menu-items-container');
const backBtn = document.getElementById('backBtn');

// Form fields
const categorySelect = document.getElementById('category');
const itemNameInput = document.getElementById('item-name');
const itemPriceInput = document.getElementById('item-price');
const itemImageInput = document.getElementById('item-image');
const editIdInput = document.getElementById('edit-id');

// Back button functionality
if (backBtn) {
  backBtn.addEventListener('click', () => {
    window.location.href = "index.html";
  });
}

// Load menu items from localStorage
function loadMenuItems() {
  const menuData = JSON.parse(localStorage.getItem('triyashaMenuData')) || {};
  menuItemsContainer.innerHTML = '';
  
  Object.keys(menuData).forEach(category => {
    const categoryTitle = document.createElement('h4');
    categoryTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1);
    menuItemsContainer.appendChild(categoryTitle);
    
    menuData[category].forEach((item, index) => {
      const itemCard = document.createElement('div');
      itemCard.className = 'menu-item-card';
      itemCard.innerHTML = `
        <p><strong>Name:</strong> ${item.name}</p>
        <p><strong>Price:</strong> ${item.price}</p>
        <p><strong>Image:</strong> ${item.image || 'No image'}</p>
        <div class="menu-actions">
          <button onclick="editItem('${category}', ${index})">Edit</button>
          <button class="delete-btn" onclick="deleteItem('${category}', ${index})">Delete</button>
        </div>
      `;
      menuItemsContainer.appendChild(itemCard);
    });
  });
}

// Save menu item
saveItemBtn.addEventListener('click', () => {
  const category = categorySelect.value;
  const name = itemNameInput.value;
  const price = itemPriceInput.value;
  const image = itemImageInput.value;
  const editId = editIdInput.value;
  
  if (!category || !name || !price) {
    alert('Please fill in all required fields!');
    return;
  }
  
  const menuData = JSON.parse(localStorage.getItem('triyashaMenuData')) || {};
  
  if (!menuData[category]) {
    menuData[category] = [];
  }
  
  const newItem = {
    name,
    price,
    image
  };
  
  if (editId) {
    // Editing existing item
    const [editCategory, editIndex] = editId.split('-');
    menuData[editCategory][editIndex] = newItem;
  } else {
    // Adding new item
    menuData[category].push(newItem);
  }
  
  localStorage.setItem('triyashaMenuData', JSON.stringify(menuData));
  resetForm();
  loadMenuItems();
});

// Edit item
window.editItem = function(category, index) {
  const menuData = JSON.parse(localStorage.getItem('triyashaMenuData')) || {};
  const item = menuData[category][index];
  
  categorySelect.value = category;
  itemNameInput.value = item.name;
  itemPriceInput.value = item.price;
  itemImageInput.value = item.image || '';
  editIdInput.value = `${category}-${index}`;
  
  saveItemBtn.textContent = 'Update Item';
  cancelEditBtn.classList.remove('hidden');
};

// Delete item
window.deleteItem = function(category, index) {
  if (confirm('Are you sure you want to delete this item?')) {
    const menuData = JSON.parse(localStorage.getItem('triyashaMenuData')) || {};
    menuData[category].splice(index, 1);
    
    // Remove category if empty
    if (menuData[category].length === 0) {
      delete menuData[category];
    }
    
    localStorage.setItem('triyashaMenuData', JSON.stringify(menuData));
    loadMenuItems();
  }
};

// Cancel edit
cancelEditBtn.addEventListener('click', resetForm);

// Reset form
function resetForm() {
  categorySelect.value = '';
  itemNameInput.value = '';
  itemPriceInput.value = '';
  itemImageInput.value = '';
  editIdInput.value = '';
  saveItemBtn.textContent = 'Save Item';
  cancelEditBtn.classList.add('hidden');
}

// Initialize
loadMenuItems();