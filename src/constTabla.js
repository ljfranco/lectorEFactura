
import { cabezales, renglones, vencimientos } from "./columns.js"
import { downloadCSV } from "./exportCSV.js"


function facDetails(xml) {

    let xmlDoc = xml.responseXML;

    let tablaCab = "<tr>"  // Creo la tabla  Cabezales

    // bucle para crear encabezados

    for (let campo in cabezales) {

        tablaCab += `<th>${campo}</th>`  // inserto las columnas
        campo === Object.keys(cabezales)[Object.keys(cabezales).length - 1] ? tablaCab += "</tr>" : "" // comparo con el ultimo campo y si es true finalizo la fila
    }

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

    // // Bucle para cargar los datos del objeto cabezales en la variable tablaCab.
    // for (let dato in cabezales) {
    //     cabezales[dato] === "" ? cabezales[dato] = "<td></td>" : ""
    //     tablaCab += cabezales[dato]

    // }

    // Imprimir los datos en la tabla
    document.getElementById("tablaCab").innerHTML = tablaCab;

    cabezales.DOCFCH = renglones.DOCFCH = vencimientos.DOCFCH = xmlDoc.getElementsByTagName("FchEmis")[0].childNodes[0].nodeValue.replaceAll("-", "")

    let cfe = xmlDoc.getElementsByTagName("TipoCFE")[0].childNodes[0].nodeValue

    switch (cfe) {
        case "112": cabezales.TDOCCOD = renglones.TDOCCOD = vencimientos.TDOCCOD = "NCPS"
            break
        case "111": cabezales.TDOCCOD = renglones.TDOCCOD = vencimientos.TDOCCOD = "FACPS"
            break
        default: alert("Documeno no definido")
            break;
    }

    cabezales.DOCNUM = renglones.DOCNUM = vencimientos.DOCNUM = xmlDoc.getElementsByTagName("Nro")[0].childNodes[0].nodeValue

    let moneda = xmlDoc.getElementsByTagName("TpoMoneda")[0].childNodes[0].nodeValue

    switch (moneda) {
        case "UYU": cabezales.MONCOD = renglones.MONCOD = vencimientos.MONCOD = 1
            break
        case "USD": cabezales.MONCOD = renglones.MONCOD = vencimientos.MONCOD = 2
            break
        case "EUR": cabezales.MONCOD = renglones.MONCOD = vencimientos.MONCOD = 3
            break
        default: alert("Moneda no definida")
            break;
    }

    cabezales.VENVTO = renglones.VENVTO = vencimientos.VENVTO = xmlDoc.getElementsByTagName("FchVenc")[0].childNodes[0].nodeValue.replaceAll("-", "")






    // console.log(cabezales);
    // console.log(renglones);
    // console.log(vencimientos);

    let csvCab = []
    let csvRen = []
    let csvVen = []

    for (const dato in cabezales) {
        csvCab.push(cabezales[dato])
    }
    downloadCSV(csvCab.join(";"), `FAC${csvCab[4]}.cab`)
    for (const dato in renglones) {
        csvRen.push(renglones[dato])
    }
    downloadCSV(csvRen.join(";"), `FAC${csvRen[4]}.ren`)
    for (const dato in vencimientos) {
        csvVen.push(renglones[dato])
    }
    downloadCSV(csvVen.join(";"), `FAC${csvVen[4]}.ven`)

}

//TODO Falta crear las otras tablas.


export { facDetails }