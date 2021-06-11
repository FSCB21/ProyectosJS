
const formatterPeso = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 })

function generarTabla() {

    var empleados = JSON.parse(localStorage.getItem('Empleados'));

    var InfoTabla = document.getElementById("Tabla")


    for (let i = 0; i < empleados.length; i++) {

        if (empleados[i][0] != null) {
            let newRow = InfoTabla.insertRow(1);


            let newCell = newRow.insertCell(0);
            newCell.textContent = empleados[i][1];

            newCell = newRow.insertCell(1);
            newCell.textContent = empleados[i][0];

            newCell = newRow.insertCell(2);
            newCell.textContent = formatterPeso.format(empleados[i][2]);

            newCell = newRow.insertCell(3);
            newCell.textContent = empleados[i][3];

            newCell = newRow.insertCell(4);
            newCell.textContent = formatterPeso.format(empleados[i][11]["SueldoDias"]);

            newCell = newRow.insertCell(5);
            newCell.textContent = formatterPeso.format(empleados[i][11]["auxTransporte"]);

            newCell = newRow.insertCell(6);
            newCell.textContent = formatterPeso.format(empleados[i][11]["horaOrd"]);

            newCell = newRow.insertCell(7);
            newCell.textContent = empleados[i][4];

            newCell = newRow.insertCell(8);
            newCell.textContent = empleados[i][5];

            newCell = newRow.insertCell(9);
            newCell.textContent = empleados[i][6];

            newCell = newRow.insertCell(10);
            newCell.textContent = empleados[i][7];

            newCell = newRow.insertCell(11);
            newCell.textContent = empleados[i][8];

            newCell = newRow.insertCell(12);
            newCell.textContent = formatterPeso.format(empleados[i][11]["totalExtras"]);

            newCell = newRow.insertCell(13);
            newCell.textContent = formatterPeso.format(empleados[i][11]["TotalDevengado"]);

            newCell = newRow.insertCell(14);
            newCell.textContent = formatterPeso.format(empleados[i][11]["Salud"]);

            newCell = newRow.insertCell(15);
            newCell.textContent = formatterPeso.format(empleados[i][11]["Pension"]);

            newCell = newRow.insertCell(16);
            newCell.textContent = formatterPeso.format(empleados[i][11]["fondoSol"]);

            newCell = newRow.insertCell(17);
            newCell.textContent = formatterPeso.format(empleados[i][11]["UVT"]);

            newCell = newRow.insertCell(18);
            newCell.textContent = formatterPeso.format(empleados[i][11]["retefuente"]);

            newCell = newRow.insertCell(19);
            newCell.textContent = formatterPeso.format(empleados[i][11]["retepesos"]);

            newCell = newRow.insertCell(20);
            newCell.textContent = formatterPeso.format(empleados[i][11]["totalDeducido"]);

            newCell = newRow.insertCell(21);
            newCell.textContent = formatterPeso.format(empleados[i][11]["saludPat"]);

            newCell = newRow.insertCell(22);
            newCell.textContent = formatterPeso.format(empleados[i][11]["pensionPat"]);

            newCell = newRow.insertCell(23);
            newCell.textContent = empleados[i][9];

            newCell = newRow.insertCell(24);
            newCell.textContent = formatterPeso.format(empleados[i][11]["ARL"]);

            newCell = newRow.insertCell(25);
            newCell.textContent = formatterPeso.format(empleados[i][11]["SENA"]);

            newCell = newRow.insertCell(26);
            newCell.textContent = formatterPeso.format(empleados[i][11]["ICBF"]);

            newCell = newRow.insertCell(27);
            newCell.textContent = formatterPeso.format(empleados[i][11]["CAJAS"]);

            newCell = newRow.insertCell(28);
            newCell.textContent = formatterPeso.format(empleados[i][11]["TotalPara"]);

            newCell = newRow.insertCell(29);
            newCell.textContent = formatterPeso.format(empleados[i][11]["cesantias"]);

            newCell = newRow.insertCell(30);
            newCell.textContent = formatterPeso.format(empleados[i][11]["IntCesan"]);

            newCell = newRow.insertCell(31);
            newCell.textContent = formatterPeso.format(empleados[i][11]["Prima"]);

            newCell = newRow.insertCell(32);
            newCell.textContent = formatterPeso.format(empleados[i][11]["Vacaciones"]);

            newCell = newRow.insertCell(33);
            newCell.textContent = formatterPeso.format(empleados[i][11]["totalPresta"]);

            newCell = newRow.insertCell(34);
            newCell.textContent = formatterPeso.format(empleados[i][11]["TotalNomina"]);

            newCell = newRow.insertCell(35);
            newCell.innerHTML = '<button onClick="CargarDatosEmp(' + i + ')" id="accionesA' + i + '">Editar</button>'

            newCell = newRow.insertCell(35);
            newCell.innerHTML = '<button onClick="Eliminar(' + i + ')" id="accionesB' + i + '">Eliminar</button > ';
        }
    }

}

generarTabla();