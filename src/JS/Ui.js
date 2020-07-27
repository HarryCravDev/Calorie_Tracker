export class UI {
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

  getItemInput = () => {
    return {
      name: document.getElementById("item-name").value,
      calories: document.getElementById("item-calories").value,
    };
  };

  clearInput = () => {
    document.getElementById("item-name").value = "";
    document.getElementById("item-calories").value = "";
  };

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
}
