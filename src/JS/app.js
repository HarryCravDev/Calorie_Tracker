import { ItemControl } from "./ItemController";
import { UI } from "./Ui";
import LocalStorageJS from "./LocalStorage";

// Init Classes
const ItemCtrl = new ItemControl();
const ui = new UI();
const ls = new LocalStorageJS();

// Set Initial State
ui.setInitialState();

// Fetch Items
const items = ItemCtrl.state.items;

// Validate Items
if (items.length === 0) {
  // Add - Hide list container function
} else {
  // Populate UI with Items
  ui.populateItemList(items);
}

// Get Total Calories
const totalCalories = ItemCtrl.getTotalCalories;

// Show Total Calories
ui.showTotalCalories(totalCalories);

// Event Listener - Add item
document.querySelector(".add-btn").addEventListener("click", (e) => {
  e.preventDefault();
  // Get User Input
  const input = ui.getItemInput();
  // Check valid input
  if (input.name !== "" && input.calories !== "") {
    // Add Item to State
    const newItem = ItemCtrl.addItem(input.name, input.calories);
    // Update DOM
    ui.addItemToList(newItem);

    // Add to Local Storage
    ls.storeItem(newItem);

    // Get Total Calories
    const totalCalories = ItemCtrl.getTotalCalories;

    // Show Total Calories
    ui.showTotalCalories(totalCalories);

    // Clear Inputs
    ui.clearInput();
  }
});

// Event Listener - Back Button
document
  .querySelector(".back-btn")
  .addEventListener("click", ui.setInitialState);

// Event Listener - Delete Button
document
  .querySelector(".delete-btn")
  .addEventListener("click", itemDeleteSubmit);

// Event Listener - Edit item
document.getElementById("item-list").addEventListener("click", itemEditClick);

// Event Listener - Clear All
document
  .querySelector(".clear-btn")
  .addEventListener("click", clearAllItemsClick);

// Event Listener - Update Item
document
  .querySelector(".update-btn")
  .addEventListener("click", itemUpdateSubmit);

// Edit Item Function
function itemEditClick(e) {
  if (e.target.classList.contains("edit-item")) {
    // Get list item ID
    const listId = parseInt(e.target.parentNode.parentNode.id);

    // Get Item
    const itemToEdit = ItemCtrl.getElementByID(listId);

    // Set current item
    ItemCtrl.setCurrentItem(itemToEdit);

    // Add item to form
    ui.addItemToForm(itemToEdit);

    // Show Edit Button
    ui.showEditState();
  }
}

// Item Update Function
function itemUpdateSubmit(e) {
  e.preventDefault();
  // Get item input
  const input = ui.getItemInput();

  // Update Item
  const updatedItem = ItemCtrl.updateItem(input.name, input.calories);

  // Update UI
  ui.updateItem(updatedItem);

  // Get Total Calories
  const totalCalories = ItemCtrl.getTotalCalories;

  // Show Total Calories
  ui.showTotalCalories(totalCalories);

  // Update Local Storage
  ls.updateItemStorage(updatedItem);

  ui.setInitialState();
}

// Delete Item Function
function itemDeleteSubmit(e) {
  e.preventDefault();

  // Get current item
  const currentItem = ItemCtrl.getCurrentItem;

  // Delete from data structure
  ItemCtrl.deleteItem(currentItem.id);

  // Delete from UI
  ui.deleteListItem(currentItem.id);

  // Get Total Calories
  const totalCalories = ItemCtrl.getTotalCalories;

  // Show Total Calories
  ui.showTotalCalories(totalCalories);

  // Update Local Storage
  ls.deleteItemFromStorage(currentItem);

  // Change from edit state
  ui.setInitialState();
}

// Clear All Function
function clearAllItemsClick() {
  // Delete items from data structure
  ItemCtrl.clearAllItems();

  // Get Total Calories
  const totalCalories = ItemCtrl.getTotalCalories;

  // Show Total Calories
  ui.showTotalCalories(totalCalories);

  // Delete items from UI
  ui.removeItems();
  ui.clearInput();

  // Update Local Storage
  ls.clearItemsFromStorage();
}
