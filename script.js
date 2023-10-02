const tableHead = document.getElementById("tableHead");
const tableBody = document.getElementById("tableBody");
const rowNumber = 100; // initially there will be 100 rows;
// acsii code from A to Z
function createGridHeader() {
  for (let i = 65; i <= 90; i++) {
    let currentChar = String.fromCharCode(i);
    const bold = document.createElement("b");
    bold.innerText = currentChar;

    tableHead.appendChild(bold);
  }
}

function createGridBodyRow(rowNumber) {
  const row = document.createElement("div");
  row.className = "tableRow";
  // each Row will contain 26 + 1(sr.no) cells
  for (let i = 64; i <= 90; i++) {
    if (i === 64) {
      //sr no cell
      const bold = document.createElement("b");
      bold.innerText = rowNumber;
      row.appendChild(bold);
    } else {
      const cell = document.createElement("div");
      row.appendChild(cell);
    }
  }
  tableBody.appendChild(row);
}


function createGrid(){
    createGridHeader();
    for(let i=1; i<=rowNumber; i++){
        createGridBodyRow(i);
    }
}

createGrid();