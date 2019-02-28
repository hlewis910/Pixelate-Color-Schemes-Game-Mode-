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

table.addEventListener('click', colorize);

function colorize(event) {
//console.log('Clicked!')
let cell = event.target;
  if (cell.className.length) {
  cell.className = '';
} else {
cell.className = currentColor;
 }
}

let colors = document.getElementsByTagName('select')[0];
colors.addEventListener('change', changeColor);

let currentColor = 'red';
function changeColor(event) {
  let cell = event.target.value;
  currentColor = cell;
  //console.log(cell)

}