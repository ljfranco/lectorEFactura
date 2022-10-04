import { facDetails } from "./constTabla.js";


let zip = new JSZip()
// Funcion para Obtener los archivos como arreglo de objetos "fileList"
const fileSelector = document.getElementById('archivos');
fileSelector.addEventListener('change', (event) => {
    const fileList = event.target.files;
    ac = fileList.length-1

    for (let i = 0; i < fileList.length; i++) {

        let objFactura = new XMLHttpRequest();
        objFactura.onreadystatechange = function () {
            // Request terminada y Verifica estado Ok
            if (this.readyState == 4 && this.status == 200) {
                facDetails(this,fileList.length-1);   //Llamo funcion que genera los archivos y los agrega al archivo zip
            }

        };
        // NOTE ./facturas/.... es la carpeta donde estan las facturas (solo traigo el nombre del archivo dinamicamente), ver de hacer dinamico toda la ruta.
        objFactura.open("GET", `./facturas/${fileList[i].name}`, true);
        objFactura.send();

    }

    //download()


})

//TODO falta agregar la seccion de descarga de archivo.

export { zip }



