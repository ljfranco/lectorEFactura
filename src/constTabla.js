import { cabezales, renglones, tablaResultado, vencimientos } from "./columns.js";
import { zip, } from "./script.js";
import { tipoCFE } from "../resourses/tipoCFE.js";
import { proveedores } from "../resourses/proveedores.js";
import { downloadCSV } from "./exportCSV.js";
//import JSZip from "../node_modules/jszip/dist/jszip"

let acc = 0; // acumulador para comparar cada ejecucion contra la cantidad de archivos y poder ejecutar el download al final.
let tablahtml = ""

function facDetails(xml, cantArch) {
    //Parametro cantArch es la condicion para ejecutar la funcion Download
    
    let xmlDoc = xml.responseXML;

    acc === 0 ? tablahtml = "<tr><th></th><th>Fecha</th><th>Documento</th><th>Número</th><th>Proveedor</th><th>Moneda</th><th>Importe</th></tr>" : "" // Creo la tabla  Cabezales

    // bucle para crear encabezados

    // for (let campo in cabezales) {
    //     tablahtml += `<th>${campo}</th>`; // inserto las columnas
    //     campo === Object.keys(cabezales)[Object.keys(cabezales).length - 1]
    //         ? (tablahtml += "</tr>")
    //         : ""; // comparo con el ultimo campo y si es true finalizo la fila
    // }


    // Carga de datos variables que se obtienen de CFE

    // cabezales.DOCFCH = "<td>" + xmlDoc.getElementsByTagName("FchEmis")[0].childNodes[0].nodeValue.replaceAll("-", "") + "</td>"

    // let cfe = xmlDoc.getElementsByTagName("TipoCFE")[0].childNodes[0].nodeValue

    // switch (cfe) {
    //     case "112": cabezales.TDOCCOD = "<td>NCPS</td>"
    //         break
    //     case "111": cabezales.TDOCCOD = "<td>FACPS</td>"
    //         break
    //     default: alert("documeno no definido")
    //         break;
    // }

    // cabezales.DOCNUM = "<td>" + xmlDoc.getElementsByTagName("Nro")[0].childNodes[0].nodeValue + "</td>"

    // let moneda = xmlDoc.getElementsByTagName("TpoMoneda")[0].childNodes[0].nodeValue

    // switch (moneda) {
    //     case "UYU": cabezales.MONCOD = "<td>" + 1 + "</td>"
    //         break
    //     case "USD": cabezales.MONCOD = "<td>" + 2 + "</td>"
    //         break
    //     case "EUR": cabezales.MONCOD = "<td>" + 3 + "</td>"
    //         break
    //     default: alert("moneda no definida")
    //         break;
    // }
    // cabezales.VENVTO = "<td>" + xmlDoc.getElementsByTagName("FchVenc")[0].childNodes[0].nodeValue.replaceAll("-", "") + "</td>"

    // //NOTE Falta agregar:
    // // usuario(ver de pedir en la web)
    // // Elementos auxiliares
    // // fecha y hora de ingreso del documento

    // // Bucle para cargar los datos del objeto cabezales en la variable tablahtml.
    // for (let dato in cabezales) {
    //     cabezales[dato] === "" ? cabezales[dato] = "<td></td>" : ""
    //     tablahtml += cabezales[dato]

    // }


//Obtencion dato Fecha del Documento
    cabezales.DOCFCH =
        renglones.DOCFCH =
        vencimientos.DOCFCH =
        xmlDoc.getElementsByTagName("FchEmis")[0].childNodes[0].nodeValue.replaceAll("-", "");

    let cfe = xmlDoc.getElementsByTagName("TipoCFE")[0].childNodes[0].nodeValue;

    switch (cfe) {
        case "112":
            cabezales.TDOCCOD = renglones.TDOCCOD = vencimientos.TDOCCOD = "NCPS";
            break;
        case "111":
            cabezales.TDOCCOD = renglones.TDOCCOD = vencimientos.TDOCCOD = "FACPS";
            break;
        default:
            alert("Documeno no definido");
            break;
    }
// Obtencion dato Numero de Documento
    cabezales.DOCNUM =
        renglones.DOCNUM =
        vencimientos.DOCNUM =
        tablaResultado.DOCNUM =
        xmlDoc.getElementsByTagName("Nro")[0].childNodes[0].nodeValue;
// Obtencion del Codigo de Moneda y condicional para incluir el equivalente en el sistema
    let moneda =
        xmlDoc.getElementsByTagName("TpoMoneda")[0].childNodes[0].nodeValue;

    switch (moneda) {
        case "UYU":
            cabezales.MONCOD = 1;
            break;
        case "USD":
            cabezales.MONCOD = 2;
            break;
        case "EUR":
            cabezales.MONCOD = 3;
            break;
        default:
            alert("Moneda no definida");
            break;
    }
// Obtencion del dato fecha de vencimiento
    cabezales.VENVTO =
        vencimientos.VNCFCH =
        xmlDoc.getElementsByTagName("FchVenc")[0].childNodes[0].nodeValue.replaceAll("-", "");

    cabezales.PRVNOM = tablaResultado.PRVNOM = xmlDoc.getElementsByTagName("RznSoc")[0].childNodes[0].nodeValue

    vencimientos.VNCIMP = tablaResultado.VNCIMP =
        xmlDoc.getElementsByTagName("MntTotal")[0].childNodes[0].nodeValue

 // Obtencion de dato codigo de proveedores
     let indexProveedor = proveedores.findIndex(element => element.rut === xmlDoc.getElementsByTagName("RUCEmisor")[0].childNodes[0].nodeValue) 
     if(indexProveedor === -1){ alert(`El siguiente Proveedor no esta definido: \n Rut: ${xmlDoc.getElementsByTagName("RUCEmisor")[0].childNodes[0].nodeValue} \n Nombre: ${xmlDoc.getElementsByTagName("RznSoc")[0].childNodes[0].nodeValue}`  )
    return} else {
     cabezales.PRVCOD =
     renglones.PRVCOD =
     vencimientos.PRVCOD = proveedores[indexProveedor].codProv
    }
     
// Obtencion dato codigo Tipo de documento e inlcusion en tabla html nombre del mismo
    tablaResultado.TDOCCOD = tipoCFE[xmlDoc.getElementsByTagName("TipoCFE")[0].childNodes[0].nodeValue]
// Obtencion y formateo de fecha del documento para tabla html    
    let fecha = new Date(xmlDoc.getElementsByTagName("FchEmis")[0].childNodes[0].nodeValue)
    fecha.setMinutes(fecha.getMinutes() + fecha.getTimezoneOffset())
    tablaResultado.DOCFCH = fecha.toLocaleDateString()
// Obtencion codigo de moneda para tabla html    
    tablaResultado.MONCOD = xmlDoc.getElementsByTagName("TpoMoneda")[0].childNodes[0].nodeValue

// Creacion arrays de tabla html y archivos a importar
    let datosTabla = []
    let csvCab = [];
    let csvRen = [];
    let csvVen = [];

// Inclusion de campos de tabla html en array datosTabla    
    for (const dato in tablaResultado) {
        datosTabla.push(tablaResultado[dato])
    }
// se agregan datos de las filas en la variable tablahtml
    tablahtml += `<tr><td>${acc + 1}</td><td>${datosTabla.join("</td><td>")}</tr>`
// Imprimir los datos en la tablahtml en el documento html
    document.getElementById("tablahtml").innerHTML = tablahtml;

    for (const dato in cabezales) {
        csvCab.push(cabezales[dato]);
    }

    zip.file(`FAC${csvCab[4]}.cab`, csvCab.join(";"));

    for (const dato in renglones) {
        csvRen.push(renglones[dato]);
    }

    zip.file(`FAC${csvRen[4]}.ren`, csvRen.join(";"));

    for (const dato in vencimientos) {
        csvVen.push(renglones[dato]);
    }

    zip.file(`FAC${csvVen[4]}.ven`, csvVen.join(";"));

    acc === cantArch ? download() : ""; //Si es la ultima ejecucion de la funcion en el bucle ejecuto Download

    acc++;
}

const download = () => {
    zip.generateAsync({ type: "blob" }).then(function (content) {
        // see FileSaver.js
        //saveAs(content, "example.zip");
        saveAs(content, "facturas.zip");
    });
};


export { facDetails };