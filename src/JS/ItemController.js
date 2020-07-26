export class ItemControl {
  constructor(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

  // Item State
  state = {
    items: [
      { id: 0, name: "Chicken & Rice", calories: 600 },
      { id: 1, name: "Eggs with Salad", calories: 450 },
      { id: 2, name: "Pizza", calories: 850 },
    ],
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

    // const item2 = new ItemControl(id, name, calories);

    // Add item to state
    this.state.items.push(item);
  };
}

// export const ItemCtrl = (() => {
//   // Item Constructor
//   const Item = (id, name, calories) => {
//     this.id = id;
//     this.name = name;
//     this.calories = calories;
//   };

//   // Data Structure / State
//   const state = {
//     items: [
//       { id: 0, name: "Chicken & Rice", calories: 600 },
//       { id: 1, name: "Eggs & Beans", calories: 450 },
//       { id: 2, name: "Pizza", calories: 850 },
//     ],
//     currentItem: null,
//     totalCalories: 0,
//   };

//   console.log("Working");

//   return {
//     logState: function () {
//       return state;
//     },
//   };
// })();
