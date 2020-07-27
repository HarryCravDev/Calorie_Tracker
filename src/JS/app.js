import { ItemControl } from "./ItemController";
import { UI } from "./Ui";

const ItemCtrl = new ItemControl();
const ui = new UI();

const items = ItemCtrl.state.items;
// App Controller
// const App = ((ItemCtrl) => {})(ItemCtrl);

let items1 = {
  id: 3,
  name: "Curry",
  calories: 600,
};

ItemCtrl.addItem("Beef Noodles", "600");
ItemCtrl.addItem("Duck Noodles", "850");

console.log(ui);
console.log(items);

ui.populateItemList(items);

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
    ui.clearInput();
  }
});
