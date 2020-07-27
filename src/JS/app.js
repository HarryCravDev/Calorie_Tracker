import { ItemControl } from "./ItemController";
import { UI } from "./Ui";

const ItemCtrl = new ItemControl();
const ui = new UI();

// Fetch Items
const items = ItemCtrl.state.items;

// Validate Items
if (items.length === 0) {
} else {
  // Populate UI with Items
  ui.populateItemList(items);
}

// Add item Event Listener
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
