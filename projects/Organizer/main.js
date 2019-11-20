const listElement = document.querySelector('.list');
const input = document.querySelector('#item');

input.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("btn").click();
  }
});

function addToList() {
  const item = input.value;

  // Clear text
  input.value = '';

  if (item != '') {
    createList(item);
  }
}

function createList(item) {
  const divItem = document.createElement('div');
  const div = document.createElement('div');
  const div2 = document.createElement('div');

  // text 'div'
  div.innerHTML = item;
  div.className = 'text';

  // delete button 'div2'
  div2.innerHTML = '<i class="fas fa-times fa-xs" onclick="deleteItem(this)"></i>';
  div2.className = 'x';

  // divItem
  divItem.className = 'item';
  divItem.appendChild(div);
  divItem.appendChild(div2);

  listElement.appendChild(divItem);
  saveList();
}

function deleteItem(item) {
  const dItem = item.parentNode.parentNode;
  dItem.remove();
  saveList();
}

function saveList() {
  localStorage.setItem('list', listElement.innerHTML);
}

function clearList() {
  // Remove all items
  while (listElement.firstChild) {
    listElement.removeChild(listElement.firstChild);
  }

  // Clear localStorage
  localStorage.clear();
}

function readList() {
  listElement.innerHTML = localStorage.getItem('list');
}

readList();