const fs = require('fs')
const archivo = () =>{
fs.appendFile('tortasdechocolate.xls', 'tortas', (err) => {
    if (err) throw err;
    console.log('Archivo Creado Satisfactoriamente');
  });
}

