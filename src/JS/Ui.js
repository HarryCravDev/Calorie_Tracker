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
}
