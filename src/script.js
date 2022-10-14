import { facDetails } from './constTabla.js'

const zip = new JSZip()
//Funcion para Obtener los archivos como arreglo de objetos "fileList"

const fileSelector = document.getElementById('archivos')

fileSelector.addEventListener('change', (event) => {
    const fileList = event.target.files

    for (let i = 0; i < fileList.length; i++) {
        const objFactura = new XMLHttpRequest()
        objFactura.onreadystatechange = function () {
            // Request terminada y Verifica estado Ok
            if (this.readyState == 4 && this.status == 200) {
                facDetails(this, fileList.length - 1) // Llamo funcion que genera los archivos y los agrega al archivo zip
            
            }

        }
        // NOTE ./facturas/.... es la carpeta donde estan las facturas (solo traigo el nombre del archivo dinamicamente), ver de hacer dinamico toda la ruta.
        objFactura.open('GET', `./facturas/${fileList[i].name}`)
        objFactura.send()
    }


})



// const butOpenFile = document.getElementById('archivos')
// let fileHandle;
// butOpenFile.addEventListener('click', async () => {
//     [fileHandle] = await window.showOpenFilePicker();
//     const file = await fileHandle.getFile();
//     const contents = await file.stream();
//     console.log(file);
//     for (let i = 0; i < fileHandle.length; i++) {
//         facDetails(file, fileHandle.length - 1) // Llamo funcion que genera los archivos y los agrega al archivo zip

//     }
// });

// TODO falta agregar la seccion de descarga de archivo.

export { zip }
