let items = [];

function saveItems() {
  localStorage.setItem('items', JSON.stringify(items));
}

function loadItems() {
  let storedItems = localStorage.getItem('items');
  if (storedItems) {
    items = JSON.parse(storedItems);
    displayItems();
  }
}

function removeItem(index) {
  items.splice(index, 1);
  displayItems();
  saveItems();
}

function displayItems() {
  let list = '';
  for (let i = 0; i < items.length; i++) {
    list += "<li><input type='checkbox' id='item-" + i + "' onclick='highlightItem(" + i + ")'><label for='item-" + i + "'>" + items[i] + "</label><button onclick='removeItem(" + i + ")'>X</button></li>";
  }
  document.getElementById("list").innerHTML = list;
  saveItems();
}

function highlightItem(index) {
  let item = document.getElementById("item-" + index).nextSibling;
  if (item.classList.contains("checked")) {
    item.classList.remove("checked");
  } else {
    item.classList.add("checked");
  }
}

function addItem() {
  let newItem = document.getElementById("item").value;
  if (newItem !== '') {
    items.push(newItem);
    displayItems();
    document.getElementById("item").value = '';
  }
}

function addRecommendation(item) {
  items.push(item);
  displayItems();
}

loadItems();