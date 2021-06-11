var dataNom = JSON.parse(localStorage.getItem('Empleados'));


let empleados;

if (localStorage.getItem('Empleados') === null) {
    empleados = [];
} else {
    empleados = JSON.parse(localStorage.getItem('Empleados'));
}

/*Insertar*/
function agregarEmp(empleado) {

    var empleado = MetodoOperaciones(empleado);

    empleados.push(empleado);

    localStorage.setItem('Empleados', JSON.stringify(empleados))

    alert('Nuevo Empleado Guardado Con exito');
}

/*Actualizar*/
function CargarDatosEmp(id) {
    let form = document.forms["formDatos"];
    form.Name.value = dataNom[id][0];
    form.Document.value = dataNom[id][1];
    form.salary.value = dataNom[id][2];
    form.Days.value = dataNom[id][3];
    form.HED.value = dataNom[id][4];
    form.HEN.value = dataNom[id][5];
    form.HEDD.value = dataNom[id][6];
    form.HeDN.value = dataNom[id][7];
    form.Rec.value = dataNom[id][8];
    form.Riesgo.value = dataNom[id][9];
    form.id.value = id;

    document.querySelector('#formActualizar').style.display = "Block";
}

document.getElementById("cerrar").addEventListener('click', () => {
    document.querySelector('#formActualizar').style.display = "none";
})


function Actualizar(empleado, id) {
    var empleado = MetodoOperaciones(empleado);

    empleados[id] = empleado;

    localStorage.setItem('Empleados', JSON.stringify(empleados))

    alert('Empleado Actualizado Con exito');
    window.location.reload();
}


/*Borrar*/
function Eliminar(id) {

    let borrar = confirm("Parcero Seguro de eso?");
    if (borrar == true) {
        empleados[id] = [
            nombre = null
        ];
        localStorage.setItem('Empleados', JSON.stringify(empleados))

        alert('Empleado Eliminado Con exito');
        window.location.reload();
    }
}

/*Consultar Por Id */
function ConsultaId() {
    document.querySelector('#formActualizar2').style.display = "Block";
}

document.getElementById("cerrar2").addEventListener('click', () => {
    document.querySelector('#formActualizar2').style.display = "none";
})

function IdConsulta() {
    let form = document.forms["formDatosID"];
    var id = form.Id.value;

    let empleadoC;

    for (var i = 0; i < empleados.length; i++) {
        if (id == empleados[i][1]) {
            empleadoC = i;
        }
    }

    if (empleadoC == null) {
        alert("Empleado No encontrado");
        form.reset();
    } else {
        sessionStorage.setItem('empleadoC', empleadoC)
        window.location.href = "consultaemp.html";
    }
}
