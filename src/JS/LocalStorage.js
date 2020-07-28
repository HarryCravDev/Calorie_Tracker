export default class LocalStorage {
  storeItem = (item) => {
    let items;
    if (localStorage.getItem("items") === null) {
      items = [];
      // Push new item & set in LS
      items.push(item);
      localStorage.setItem("items", JSON.stringify(items));
    } else {
      items = JSON.parse(localStorage.getItem("items"));
      // Push new item & set in LS
      items.push(item);
      localStorage.setItem("items", JSON.stringify(items));
    }
  };

  getItemsFromStorage = () => {
    let items;
    if (localStorage.getItem("items") === null) {
      items = [];
    } else {
      items = JSON.parse(localStorage.getItem("items"));
    }
    return items;
  };

  updateItemStorage = (item) => {
    let items = JSON.parse(localStorage.getItem("items"));

    // Loop and update items
    items.forEach((element, index) =>
      item.id === element.id ? items.splice(index, 1, item) : false
    );

    // Store in Local Storage
    localStorage.setItem(JSON.stringify(items));
  };

  deleteItemFromStorage = (item) => {
    let items = JSON.parse(localStorage.getItem("items"));

    // Loop and delete item
    items.forEach((element, index) =>
      item.id === element.id ? items.splice(index, 1) : false
    );

    // Store in Local Storage
    localStorage.setItem("items", JSON.stringify(items));
  };

  clearItemsFromStorage = () => {
    localStorage.removeItem("items");
  };
}
