let empleados;
const formatterPeso = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 })

if (localStorage.getItem('Empleados') === null) {
    empleados = [];
} else {
    empleados = JSON.parse(localStorage.getItem('Empleados'));
}

function mostrarEmp() {

    emp = sessionStorage.getItem('empleadoC');

    document.getElementById("datosEmp").innerHTML += `
    <h3>Nombre: </h3>`+ empleados[emp][0] + `
    <h3>Documento:</h3>`+ empleados[emp][1] + `
    <p><h3>Sueldo: </h3>`+ formatterPeso.format(empleados[emp][2]) + ` 
    <h3>Dias Trabajados: </h3>`+ empleados[emp][3] + `
    <h3>Sueldo Basico:</h3> `+ formatterPeso.format(empleados[emp][11]["SueldoDias"]) + ` 
    <h3>Aux De Transporte: </h3>`+ formatterPeso.format(empleados[emp][11]["auxTransporte"]) + `<hr> 
    <h3>Hora Ordinaria: </h3>`+ formatterPeso.format(empleados[emp][11]["horaOrd"]) + `
    <h4>Horas Extras Diurnas: </h3>`+ empleados[emp][4] + `
    <h4>Horas Extras Nocturnas: </h3>`+ empleados[emp][5] + `
    <h4>Horas Extras Dominicales: </h3>`+ empleados[emp][6] + `
    <h4>Horas Extras Dominicales Nocturnas: </h3>`+ empleados[emp][7] + `
    <h3>Recargo Nocturno: </h3>`+ empleados[emp][8] + `
    <h4>Total Extras: </h4>`+ formatterPeso.format(empleados[emp][11]["totalExtras"]) + `
    <h3>Total Devengado: </h3>`+ formatterPeso.format(empleados[emp][11]["TotalDevengado"]) + `<hr>
    <h4>Salud: </h4>`+ formatterPeso.format(empleados[emp][11]["Salud"]) + `
    <h4>Pension: </h4>`+ formatterPeso.format(empleados[emp][11]["Pension"]) + `
    <h4>Fondo de Solidaridad: </h4>`+ formatterPeso.format(empleados[emp][11]["fondoSol"]) + `
    <h4>UVT: </h4>`+ formatterPeso.format(empleados[emp][11]["UVT"]) + `
    <h4>Retefuente: </h4>`+ formatterPeso.format(empleados[emp][11]["retefuente"]) + `
    <h4>Retepesos: </h4>`+ formatterPeso.format(empleados[emp][11]["retepesos"]) + `
    <h3>Total Deducido: </h3>`+ formatterPeso.format(empleados[emp][11]["totalDeducido"]) + `<hr>
    <h4>Salud Patron: </h4>`+ formatterPeso.format(empleados[emp][11]["saludPat"]) + `
    <h4>Pension Patron: </h4>`+ formatterPeso.format(empleados[emp][11]["pensionPat"]) + `
    <h3>Nivel Riesgo: </h3>`+ empleados[emp][9] + `
    <h4>ARL: </h4>`+ formatterPeso.format(empleados[emp][11]["ARL"]) + `
    <h4>SENA: </h4>`+ formatterPeso.format(empleados[emp][11]["SENA"]) + `
    <h4>ICBF: </h4>`+ formatterPeso.format(empleados[emp][11]["ICBF"]) + `
    <h4>Caja De Compensacion: </h4>`+ formatterPeso.format(empleados[emp][11]["CAJAS"]) + `
    <h3>Total Parafiscales: </h3>`+ formatterPeso.format(empleados[emp][11]["TotalPara"]) + `<hr>
    <h4>Cesantias: </h4>`+ formatterPeso.format(empleados[emp][11]["cesantias"]) + `
    <h4>Intereses Cesantias: </h4>`+ formatterPeso.format(empleados[emp][11]["IntCesan"]) + `
    <h4>Prima: </h4>`+ formatterPeso.format(empleados[emp][11]["Prima"]) + `
    <h4>Vacaciones: </h4>`+ formatterPeso.format(empleados[emp][11]["Vacaciones"]) + `
    <h3>Total Prestaciones: </h3>`+ formatterPeso.format(empleados[emp][11]["totalPresta"]) + `<hr>
    <h3>Total Nomina: </h3>`+ formatterPeso.format(empleados[emp][11]["TotalNomina"]) + `
    

    `


}

function imprimir1() {
    let btn = document.getElementById("botonImprimir")
    let btn2 = document.getElementById("regresarBtn")
    btn.style.display = "none"
    btn2.style.display = "none"
    window.print();
    btn.style.display = "Block"
    btn2.style.display = "Block"
}
mostrarEmp()