// Your code here
let table = document.getElementsByTagName('table')[0];

function makeRow() {
  let newRow = document.createElement('tr');
  table.appendChild(newRow);
  for (let i = 0; i < 21; i++) {
    let newCell = document.createElement('td');
    newRow.appendChild(newCell);
  }
}

let addRow = document.getElementById('add-row');
addRow.addEventListener('click', makeRow);
