export class UI {
  // Populate UI with Items
  populateItemList = (items) => {
    let html = "";

    items.forEach((element) => {
      html += `
      <li class="collection-item" id="${element.id}">
        <strong>${element.name} : </strong><em>${element.calories} Calories</em>
        <a href="#" class="secondary-content">
            <i class="edit-item fa fa-pencil"></i>
        </a>
      </li> 
      `;
    });

    document.getElementById("item-list").innerHTML = html;
  };

  // Get Input Data
  getItemInput = () => {
    return {
      name: document.getElementById("item-name").value,
      calories: document.getElementById("item-calories").value,
    };
  };

  // Clear Input Fields
  clearInput = () => {
    document.getElementById("item-name").value = "";
    document.getElementById("item-calories").value = "";
  };

  // Add Item to Form
  addItemToForm = (item) => {
    document.getElementById("item-name").value = `${item.name}`;
    document.getElementById("item-calories").value = `${item.calories}`;
  };

  // Add Item to List Method
  addItemToList = (item) => {
    // Create 'li' for new Item
    const li = document.createElement("li");
    li.className = "collection-item";
    li.id = `${item.id}`;
    li.innerHTML = `
    <strong>${item.name} : </strong><em>${item.calories} Calories</em>
    <a href="#" class="secondary-content">
        <i class="edit-item fa fa-pencil"></i>
    </a>
    `;

    // Insert into DOM
    document.getElementById("item-list").insertAdjacentElement("beforeend", li);
  };

  // Update Item
  updateItem = (item) => {
    let listItems = document.querySelectorAll(".collection-item");

    // Turn node list into Array
    listItems = Array.from(listItems);

    // Loop and update
    listItems.forEach((element) => {
      const itemID = element.getAttribute("id");

      if (itemID == item.id) {
        document.getElementById(`${itemID}`).innerHTML = `
        <strong>${item.name} : </strong><em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
            <i class="edit-item fa fa-pencil"></i>
        </a>
        `;
      }
    });
  };

  // Delete List Item
  deleteListItem = (id) => {
    const item = document.getElementById(id);
    item.remove();
  };

  // Delete All Items
  removeItems = () => {
    let listItems = document.querySelectorAll(".collection-item");

    // Items into Array
    listItems = Array.from(listItems);

    // Loop remove all items
    listItems.forEach((item) => item.remove());
  };

  // Display Total Number of Calories
  showTotalCalories = (total) => {
    document.querySelector(".total-calories").textContent = total;
  };

  // Clear Edit State
  setInitialState = () => {
    this.clearInput();
    document.querySelector(".add-btn").style.display = "inline";
    document.querySelector(".update-btn").style.display = "none";
    document.querySelector(".delete-btn").style.display = "none";
    document.querySelector(".back-btn").style.display = "none";
  };

  // Show Edit State buttons
  showEditState = () => {
    document.querySelector(".add-btn").style.display = "none";
    document.querySelector(".update-btn").style.display = "inline";
    document.querySelector(".delete-btn").style.display = "inline";
    document.querySelector(".back-btn").style.display = "inline";
  };
}
