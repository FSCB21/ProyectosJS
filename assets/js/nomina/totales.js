
let totales;

if (localStorage.getItem('Empleados') === null) {
    totales = [];
} else {
    totales = JSON.parse(localStorage.getItem('Empleados'));
}

let totalesCalc = [

]

function calcularTotales() {
    let sueldo = 0
    let diasTrabajados = 0
    let sueldoDias = 0
    let auxTra = 0
    let horaOr = 0
    let HED = 0
    let HEN = 0
    let HEDD = 0
    let HeDN = 0
    let RecN = 0
    let totalE = 0
    let TotalDevengado = 0
    let salud = 0
    let pensio = 0
    let FondoS = 0
    let uvt = 0
    let reteFu = 0
    let retePe = 0
    let TotalDeducido = 0
    let SaludP = 0
    let PensionP = 0
    let nivelR = 0
    let arl = 0
    let sena = 0
    let icbf = 0
    let caja = 0
    let totalP = 0
    let Cesant = 0
    let intCes = 0
    let prima = 0
    let vacaci = 0
    let TotalP = 0
    let totalN = 0
    contador = 0;
    for (let i = 0; i < totales.length; i++) {
        if (empleados[i][0] != null) {
            sueldo += parseFloat(totales[i][2]);
            diasTrabajados += parseFloat(totales[i][3])
            sueldoDias += parseFloat(totales[i][11]["SueldoDias"])
            auxTra += parseFloat(totales[i][11]["auxTransporte"])
            horaOr += parseFloat(totales[i][11]["horaOrd"])
            HED += parseFloat(totales[i][4])
            HEN += parseFloat(totales[i][5])
            HEDD += parseFloat(totales[i][6])
            HeDN += parseFloat(totales[i][7])
            RecN += parseFloat(totales[i][8])
            totalE += parseFloat(totales[i][11]["totalExtras"])
            TotalDevengado += parseFloat(totales[i][11]["TotalDevengado"])
            salud += parseFloat(totales[i][11]["Salud"])
            pensio += parseFloat(totales[i][11]["Pension"])
            FondoS += parseFloat(totales[i][11]["fondoSol"])
            uvt += parseFloat(totales[i][11]["UVT"])
            reteFu += parseFloat(totales[i][11]["retefuente"])
            retePe += parseFloat(totales[i][11]["retepesos"])
            TotalDeducido += parseFloat(totales[i][11]["totalDeducido"])
            SaludP += parseFloat(totales[i][11]["saludPat"])
            PensionP += parseFloat(totales[i][11]["pensionPat"])
            nivelR += parseFloat(totales[i][9])
            arl += parseFloat(totales[i][11]["ARL"])
            sena += parseFloat(totales[i][11]["SENA"])
            icbf += parseFloat(totales[i][11]["ICBF"])
            caja += parseFloat(totales[i][11]["CAJAS"])
            totalP += parseFloat(totales[i][11]["TotalPara"])
            Cesant += parseFloat(totales[i][11]["cesantias"])
            intCes += parseFloat(totales[i][11]["IntCesan"])
            prima += parseFloat(totales[i][11]["Prima"])
            vacaci += parseFloat(totales[i][11]["Vacaciones"])
            TotalP += parseFloat(totales[i][11]["totalPresta"])
            totalN += parseFloat(totales[i][11]["TotalNomina"])
            contador++;
        }
    }
    HED = HED / contador
    HEN = HEN / contador
    HEDD = HEDD / contador
    HeDN = HeDN / contador
    RecN = RecN / contador
    nivelR = parseInt(nivelR / contador)

    totalesCalc = [
        sueldo,
        diasTrabajados,
        sueldoDias,
        auxTra,
        horaOr,
        HED,
        HEN,
        HEDD,
        HeDN,
        RecN,
        totalE,
        TotalDevengado,
        salud,
        pensio,
        FondoS,
        uvt,
        reteFu,
        retePe,
        TotalDeducido,
        SaludP,
        PensionP,
        nivelR,
        arl,
        sena,
        icbf,
        caja,
        totalP,
        Cesant,
        intCes,
        prima,
        vacaci,
        TotalP,
        totalN
    ]

}

function AgregarTotales() {

    calcularTotales()
    var InfoTabla = document.getElementById("Tabla")


    let newRow = InfoTabla.insertRow(-1);

    let newCell = newRow.insertCell(0);

    newCell = newRow.insertCell(1);

    for (let i = 0, x = 2; i < totalesCalc.length; i++, x++) {
        newCell = newRow.insertCell(x);
        if (i == 1 || i == 5 || i == 6 || i == 7 || i == 8 || i == 9 || i == 21) {
            newCell.textContent = parseInt(totalesCalc[i]);
        } else {
            newCell.textContent = formatterPeso.format(totalesCalc[i]);
        }
    }

}
AgregarTotales()