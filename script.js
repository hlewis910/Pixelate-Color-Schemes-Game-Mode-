// Your code here
let table = document.getElementsByTagName('table')[0];
let currentColor = 'purple';

let submit = document.getElementById('button');
button.addEventListener('click', setDimensions );

function setDimensions() {
  function makeRow() {
    let newRow = document.createElement('tr');
    table.appendChild(newRow);
    for (let i = 0; i < 20; i++) {
      let newCell = document.createElement('td');
      newRow.appendChild(newCell);
    }
  }
}


makeRow();
makeRow();
makeRow();
makeRow();
makeRow();


let addRow = document.getElementById('add-row');
addRow.addEventListener('click', makeRow);

table.addEventListener('click', colorize);
table.addEventListener('mouseover', colorize);

let entireGrid = document.getElementById('one-color');
entireGrid.addEventListener('click', gridColor);

function gridColor() {
  let allCells = Array.from(document.getElementsByTagName('TD'));
  allCells.forEach(function(elem) {
    elem.className = currentColor;
  });
}

let clearButton = document.getElementById('clear');
clear.addEventListener('click', clearColor);

function clearColor() {
  let allCells = Array.from(document.getElementsByTagName('TD'));
  allCells.forEach(function(elem) {
    elem.className = '';
  });
}

let autofill = document.getElementById('fill');
autofill.addEventListener('click', autoColor);

function autoColor() {
  console.log('this is working')
  let allCells = Array.from(document.getElementsByTagName('TD'));
  allCells.forEach(function(elem) {
  if (elem.className === '') {
     elem.className = currentColor;
   }
 })
}

function colorize(event) {
  //console.log('Clicked!')
  let cell = event.target;
  if (cell.tagName === 'TD') {
    if (cell.className === currentColor) {
      cell.className = '';
    } else {
      cell.className = currentColor;
    }
  }
}

let colors = document.getElementsByTagName('select')[0];
colors.addEventListener('change', changeColor);

function changeColor(event) {
  let cell = event.target.value;
  currentColor = cell;
  //console.log(cell)
}
