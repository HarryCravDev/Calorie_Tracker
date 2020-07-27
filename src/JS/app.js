import { ItemControl } from "./ItemController";
import { UI } from "./Ui";

// Init Classes
const ItemCtrl = new ItemControl();
const ui = new UI();

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

// Event Listener - Edit item
document.getElementById("item-list").addEventListener("click", itemEditClick);

// Edit Item State
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

// Update Item Event
document
  .querySelector(".update-btn")
  .addEventListener("click", itemUpdateSubmit);

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

  ui.setInitialState();
}
console.log(ItemCtrl.logState());
