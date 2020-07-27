export class ItemControl {
  constructor(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

  // Item State
  state = {
    items: [],
    currentItem: null,
    totalCalories: 0,
  };

  // Get Items Method
  get getItems() {
    return this.state.items;
  }

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

  get getTotalCalories() {
    let total = 0;

    // Loop through items and add cals
    this.state.items.forEach((item) => (total += item.calories));

    // Set Calories in state
    this.state.totalCalories = total;

    // Return Total Calories Value
    return this.state.totalCalories;
  }
}
