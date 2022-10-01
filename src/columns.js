// Campos marcados con "***" son obligatorios

let cabezales = {
    EMPCOD: "<tr><td>NOR",          // 0 - Codigo de empresa ***
    DOCFCH: "FchEmis",             // 1 - Fecha Factura formato yyyymmdd ***
    PRVCOD: "",             // 2 - Codigo proveedor ***
    TDOCCOD: "TipoCFE",            // 3 - Tipo de documento ***
    DOCNUM: "Nro",             // 4 - numero de documento ***
    PRVNOM: "",             // 5 - Nombre proveedor (opcional)
    PRVDIR: "",             // 6 - Dirección del proveedor(opcional)
    PRVLOC: "",             // 7 - Localidad del proveedo (opcional)
    PRVRUC: "",             // 8 - Número de RUC del proveedor (opcional)
    MONCOD: "TpoMoneda",             // 9 - codigo de moneda ***
    COTCOM: "<td>0</td>",              // 10 - cotizacion de transaccion (defecto 0)
    LISTCOD: "",            // 11 - Codigo lista de precios (opcional)
    VENVTO: "FchVenc",             // 12 - Vencimiento del Documento formao yyymmdd ***                
    DOCDSC: "",             // 13 - Descripcion del Documento (opcional)
    USUCOD: "",             // 14 - Codigo de usuario GIA ***
    ELECOD1: "",            // 15 - Codigo de elemento auxiliar (depende del Tipo de documento)
    ELECOD2: "",            // 16 - Codigo de elemento auxiliar (depende del Tipo de documento)
    ELECOD3: "",            // 17 - Codigo de elemento auxiliar (depende del Tipo de documento)
    ELECOD4: "",            // 18 - Codigo de elemento auxiliar (depende del Tipo de documento)
    ELECOD5: "",            // 19 - Codigo de elemento auxiliar (depende del Tipo de documento)
    ELECOD6: "",            // 20 - Codigo de elemento auxiliar (depende del Tipo de documento)
    DOCFCHING: "",          // 21 - Fecha de ingreso del documento formato yyyymmdd ***
    DOCHORA: "",            // 22 - Hora de ingreso formato hhmmss ***
    TVENCOD: "",            // 23 - Codigo de tipo de vencimiento (opcional)
    DOCCOMEN: "",           // 24 - Comentarios del Documento (opcional)
    COMPORIG: "",           // 25 - Comprobante Original (opcional)
    DOCFCHORI: "",          // 26 - Fecha del Documento de Origen (Opcional)
    PRVCODORI: "",          // 27 - Código del Proveedor del Documento de Origen (Opcional)
    TDOCCODORI: "",         // 28 - Tipo de Documento del Documento de Origen(Opcional)    
    DOCNUMORI: "<td></td></tr>"           // 29 - Comprobante del Documento de Origen (Opcional)
}

let renglones = {
    EMPCOD: "NOR",          // 0 - Codigo de empresa ***
    DOCFCH: "",             // 1 - Fecha Factura formato yyyymmdd ***
    PRVCOD: "",             // 2 - Codigo proveedor ***
    TDOCCOD: "",            // 3 - Tipo de documento ***
    DOCNUM: "",             // 4 - numero de documento ***
    RENDOCNUM: "",          // 5 - numero de renglon comenzando en 1 ***
    PRDCOD: "",             // 6 - Codigo de producto ***
    PRDNOM: "",             // 7 - nombre de producto (Opcional)
    RENDOCCANT: "",         // 8 - Cantidad ***
    RENDOCPREC: "",         // 9 - Precio unitario ***
    RENDOCDCTO: 0,          // 10 - Porcentaje de descuento
    RENDETDCTO: 0,          // 11 - Detalle de descuento
    RENDOCDES: "",          // 12 - Descripcion del Renglon
    UNICODALT: "",          // 13 - Código de unidad alternativa (opcional)
    RENDOCCANTA: 0,         // 14 - Cantidad en unidad alternativa (opcional)    
    RENDOPRECA: 0,          // 15 - Precio en unidad alternativa (opcional)    
    TRSTKCOD: "999",        // 16 - Código de transacción de stock asociada ***
    ELECODSTK1: "",         // 17 - Código de elemento a mover en la transacción de stock para el estado 1
    ELECODSTK2: "",         // 18 - Código de elemento a mover en la transacción de stock para el estado 2
    ELECODSTK3: "",         // 19 - Código de elemento a mover en la transacción de stock para el estado 3
    ELECODSTK4: "",         // 20 - Código de elemento a mover en la transacción de stock para el estado 4
    RENATRPART: "",         // 21 - Atributos particulares (opcional)
    RENIMPINC: "N",         // 22 - Impuestos incluidos (S/N)
    ELECODRUB1: "",         // 23 - Elemento Auxiliar 1 Rubro Mercaderías    
    ELECODRUB2: "",         // 24 - Elemento Auxiliar 2 Rubro Mercaderías
    ELECODRUB3: "",         // 25 - Elemento Auxiliar 3 Rubro Mercaderías
    ELECODRUB4: ""          // 26 - Elemento Auxiliar 4 Rubro Mercaderías
}


let vencimientos = {
    EMPCOD: "NOR",          // 0 - Codigo de empresa ***
    DOCFCH: "",             // 1 - Fecha Factura formato yyyymmdd ***
    PRVCOD: "",             // 2 - Codigo proveedor ***
    TDOCCOD: "",            // 3 - Tipo de documento ***
    DOCNUM: "",             // 4 - numero de documento ***
    VNCFCH: "",             // 5 - Vencimiento formato yyyymmdd ***
    VNCIMP: ""              // 6 - Importe (expresado siempre en la moneda del documento)
}


export { cabezales, renglones, vencimientos }