function RecibirDatos() {
    let form = document.forms["formDatos"];
    var Datos = [
        Nombre = form.Name.value,
        Documento = form.Document.value,
        Sueldo = form.salary.value,
        Dias = form.Days.value,
        HED = form.HED.value,
        HEN = form.HEN.value,
        HEDD = form.HEDD.value,
        HeDN = form.HeDN.value,
        Rec = form.Rec.value,
        Riesgo = form.Riesgo.value,
        id = form.id.value

    ]
    return Datos;
}


function ObtenerDatos() {
    let SalMin = 877802;

    var Correcto = true;
    var Men = "";

    var Datos = RecibirDatos();

    if (Datos[0] == null || Datos[0].length == 0 || /^\s+$/.test(Datos[0]) || !isNaN(Datos[0]) || Datos[0].length > 50 || Datos[0].length < 5) {
        Correcto = false;
        Men = "Nombre";
    } else if (Datos[1] == null || Datos[1].length == 0 || isNaN(Datos[1]) || Datos[1].length > 15 || Datos[1].length < 10) {
        Correcto = false;
        Men = "Documento";
    } else if (Datos[2] == null || Datos[2].length == 0 || isNaN(Datos[2]) || Datos[2] <= SalMin) {
        Correcto = false;
        Men = "Sueldo";
    } else if (Datos[3] == null || Datos[3].length == 0 || isNaN(Datos[3]) || Datos[3] > 31) {
        Correcto = false;
        Men = "Dias Trabajados";
    } else if (Datos[4] == null || Datos[4].length == 0 || isNaN(Datos[4]) || Datos[4] > 12) {
        Correcto = false;
        Men = "Horas Extras Diurnas";
    } else if (Datos[5] == null || Datos[5].length == 0 || isNaN(Datos[5]) || Datos[5] > 12) {
        Correcto = false;
        Men = "Horas Extras Nocturnas";
    } else if (Datos[6] == null || Datos[6].length == 0 || isNaN(Datos[6]) || Datos[6] > 12) {
        Correcto = false;
        Men = "Horas Extras Diurnas Dominicales";
    } else if (Datos[7] == null || Datos[7].length == 0 || isNaN(Datos[7]) || Datos[7] > 12) {
        Correcto = false;
        Men = "Horas Extras Nocturnas Dominicales";
    } else if (Datos[8] == null || Datos[8].length == 0 || isNaN(Datos[8]) || Datos[8] > 12) {
        Correcto = false;
        Men = "Recargo Nocturno";

    } else if (Datos[9] == null || Datos[9].length == 0) {
        Correcto = false;
        Men = "Nivel De Riesgo";
    }



    if (Correcto == true) {

        if (Datos[10] == null) {
            agregarEmp(Datos);
            document.getElementById("formDatos").reset();
        } else {
            Actualizar(Datos, Datos[10]);
        }
    } else {
        alert("Datos Con Valores Incorrectos En El Campo " + Men);
    }

}

