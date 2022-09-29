// function loadXMLDoc() {
//     let objFactura = new XMLHttpRequest();
//     objFactura.onreadystatechange = function () {

//         // Request terminada y Verifica estado Ok
//         if (this.readyState == 4 && this.status == 200) {
//             empDetails(this);
//         }
//     };

//     // factura.xml is the external xml file
//     objFactura.open("GET", "factura.xml", true);
//     objFactura.send();

// }





// function empDetails(xml) {

//     let xmlDoc = xml.responseXML;
//     let table =
//         `<tr><th>Firstname</th><th>Lastname</th>
//             <th>Title</th><th>Division</th>
//             <th>Building</th><th>Room</th>
//         </tr>`;

//     let x = xmlDoc.getElementsByTagName("IdDoc");

//     // Start to fetch the data by using TagName 
//     for (let i = 0; i < x.length; i++) {
//         table += "<tr><td>" +
//             x[i].getElementsByTagName("FchEmis")[0]
//                 .childNodes[0].nodeValue + "</td><td>" +
//             x[i].getElementsByTagName("Nro")[0]
//                 .childNodes[0].nodeValue + "</td><td>" //+
//         // x[i].getElementsByTagName("title")[0]
//         // .childNodes[0].nodeValue + "</td><td>" +
//         // x[i].getElementsByTagName("division")[0]
//         // .childNodes[0].nodeValue + "</td><td>" +
//         // x[i].getElementsByTagName("building")[0]
//         // .childNodes[0].nodeValue + "</td><td>" +
//         // x[i].getElementsByTagName("room")[0]
//         // .childNodes[0].nodeValue + "</td></tr>";
//     }

//     // Print the xml data in table form
//     document.getElementById("id").innerHTML = table;
// }


// function downloadCSV(csv, filename) {
//     let csvFile;
//     let downloadLink;

//     // CSV file
//     csvFile = new Blob([csv], { type: "text/csv" });

//     // Download link
//     downloadLink = document.createElement("a");

//     // File name
//     downloadLink.download = filename;

//     // Create a link to the file
//     downloadLink.href = window.URL.createObjectURL(csvFile);

//     // Hide download link
//     downloadLink.style.display = "none";

//     // Add the link to DOM
//     document.body.appendChild(downloadLink);

//     // Click download link
//     downloadLink.click();
// }

// function exportTableToCSV(filename) {
//     let csv = [];
//     let rows = document.querySelectorAll("table tr");

//     for (let i = 0; i < rows.length; i++) {
//         let row = []
//         let cols = rows[i].querySelectorAll("td,th");

//         for (let j = 0; j < cols.length; j++)
//             row.push(cols[j].innerText);

//         csv.push(row.join(";"));
//     }

//     // Download CSV file
//     downloadCSV(csv.join("\n"), filename);
// }


// Funcion para Obtener los archivos como arreglo de objetos "fileList"
const fileSelector = document.getElementById('archivos');
fileSelector.addEventListener('change', (event) => {
    const fileList = event.target.files;
    //console.log(fileList);
    //leerData.readAsText(fileList[0])
    for (let i = 0; i < fileList.length; i++) {

        // const leerData = new FileReader()
        // leerData.onloadend = (event) => {
        //     parsearDatos(event.target.result)
        // }
        // leerData.readAsText(fileList[i])
        // empDetails(fileList[i])

        let objFactura = new XMLHttpRequest();
        objFactura.onreadystatechange = function () {

            // Request terminada y Verifica estado Ok
            if (this.readyState == 4 && this.status == 200) {
                empDetails(this);
            }
        };

        // factura.xml is the external xml file
        objFactura.open("GET", `./facturas/${fileList[i].name}`, true);
        objFactura.send();

    }

})




// Funcion que convierte los datos del objeto a xml
// const parsearDatos = (data) => {
//     let parser = new DOMParser()
//     data = parser.parseFromString(data, "application/xml")
//     console.log(data)

// }



// let url = 'factura.xml'

// fetch(FileList[0])
//     .then(response => response.text())
//     .then(data => {
//         let parser = new DOMParser()
//         data = parser.parseFromString(data, "application/xml")
//         console.log(data)
//     })

//     .catch(error => console.log(error))

function empDetails(xml) {

    let xmlDoc = xml.responseXML;
    let table =
        `<tr><th>Firstname</th>
            <th>Lastname</th>
            <th>Title</th>
            <th>Division</th>
            <th>Building</th>
            <th>Room</th>
        </tr>`;

    let x = xmlDoc.getElementsByTagName("IdDoc");

    // Start to fetch the data by using TagName 
    for (let i = 0; i < x.length; i++) {
        table += "<tr><td>" +
            x[i].getElementsByTagName("FchEmis")[0]
                .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("Nro")[0]
                .childNodes[0].nodeValue + "</td><td>" //+
        // x[i].getElementsByTagName("title")[0]
        // .childNodes[0].nodeValue + "</td><td>" +
        // x[i].getElementsByTagName("division")[0]
        // .childNodes[0].nodeValue + "</td><td>" +
        // x[i].getElementsByTagName("building")[0]
        // .childNodes[0].nodeValue + "</td><td>" +
        // x[i].getElementsByTagName("room")[0]
        // .childNodes[0].nodeValue + "</td></tr>";
    }
    // Print the xml data in table form
    document.getElementById("id").innerHTML = table;
}


