const fsc = require('fs');
const path = require('path');
const {jsPDF} = require('jspdf');
var xl = require('excel4node');

fsc.writeFile(path.join(__dirname, 'archivo.txt'), "archivo", (err) => {
    if (err) {
        console.log(err);
    }else{
        console.log("Archivo creado");
    }
})

const doc = new jsPDF();

doc.text('Hello',10,10);
doc.save(path.join(__dirname, 'newPDF.pdf'));

var wb = new xl.Workbook;

var ws = wb.addWorksheet('Sheet 1');

var style = wb.createStyle({
    font: {
      color: '#FF0800',
      size: 12,
    },
    numberFormat: '$#,##0.00; ($#,##0.00); -',
});

ws.cell(1, 1)
  .number(100)
  .style(style);

// Set value of cell B1 to 200 as a number type styled with paramaters of style
ws.cell(1, 2)
  .number(200)
  .style(style);

// Set value of cell C1 to a formula styled with paramaters of style
ws.cell(1, 3)
  .formula('A1 + B1')
  .style(style);

wb.write(path.join(__dirname,'Excel.xlsx'));

