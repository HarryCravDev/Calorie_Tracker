export class ItemControl {
  constructor(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

  // Item State
  state = {
    items: [
      { id: 1, name: "noodles", calories: 400 },
      { id: 2, name: "Burger", calories: 600 },
    ],
    currentItem: null,
    totalCalories: 0,
  };

  // Get Items Method
  get getItems() {
    return this.state.items;
  }

  // Log State
  logState = () => {
    return this.state;
  };

  // Add Item Method
  addItem = (name, calories) => {
    let id;
    if (this.state.items.length > 0) {
      id = this.state.items[this.state.items.length - 1].id + 1;
    } else {
      id = 0;
    }

    // Parse Calories
    calories = parseInt(calories);

    // Create item Object
    const item = {
      id,
      name,
      calories,
    };

    // Add item to state
    this.state.items.push(item);

    // Return Object
    return item;
  };

  // Get Element by ID
  getElementByID = (id) => {
    let found = null;
    // Loop through items
    this.state.items.forEach((element) => {
      if (element.id === id) {
        found = element;
      }
    });
    return found;
  };

  // Update Item
  updateItem = (name, calories) => {
    // Calories to number
    calories = parseInt(calories);

    let found = null;

    this.state.items.forEach((item) => {
      if (item.id === this.state.currentItem.id) {
        item.name = name;
        item.calories = calories;
        found = item;
      }
    });
    return found;
  };

  // Set Current Item
  setCurrentItem = (item) => {
    this.state.currentItem = item;
  };

  // Get Total Number of Calories
  get getTotalCalories() {
    let total = 0;

    // Loop through items and add calories
    this.state.items.forEach((item) => (total += item.calories));

    // Set Calories in state
    this.state.totalCalories = total;

    // Return Total Calories Value
    return this.state.totalCalories;
  }
}
