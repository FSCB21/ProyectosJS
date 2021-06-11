const SalMin = 908526, Transporte = 106454;


function MetodoOperaciones(empleado) {

    let sueldoDias = Sueldo_Dias(empleado[2], empleado[3]);
    let auxTransporte = Aux_Transporte(empleado[2], empleado[3]);
    let horaOrd = HoraOrd(empleado[2]);
    let totalExtras = TotalExtras(empleado[4], empleado[5], empleado[6], empleado[7], empleado[8], horaOrd);
    let TotalDevengado = Total_Devengado(sueldoDias, auxTransporte, totalExtras);
    let salud = Salud(TotalDevengado, auxTransporte);
    let pension = Pension(TotalDevengado, auxTransporte);
    let FondoSol = fondoSol(empleado[2]);
    let uvt = UVT(TotalDevengado, salud, pension, FondoSol);
    let reteFuente = Retefuente(uvt);
    let retePesos = Retepesos(reteFuente);
    let TotalDeducido = Total_Deducido(salud, pension, FondoSol, retePesos);
    let SaludPat = saludPat(TotalDevengado, auxTransporte);
    let PensionPat = pensionPat(TotalDevengado, auxTransporte);
    let arl = ARL(empleado[9], TotalDevengado, auxTransporte);
    let sena = SENA(TotalDevengado, auxTransporte);
    let icbf = ICBF(TotalDevengado, auxTransporte);
    let caja = CAJAS(TotalDevengado);
    let totalPara = TotalPara(arl, sena, icbf, caja);
    let Cesantias = cesantias(TotalDevengado);
    let intCesan = IntCesan(Cesantias);
    let prima = Prima(Cesantias);
    let vacaciones = Vacaciones(TotalDevengado, auxTransporte);
    let TotalPresta = totalPresta(Cesantias, intCesan, prima, vacaciones);
    let totalNomina = TotalNomina(TotalPresta, totalPara, TotalDevengado, TotalDeducido)

    empleado.push({
        "SueldoDias": sueldoDias,
        "auxTransporte": auxTransporte,
        "horaOrd": horaOrd,
        "totalExtras": totalExtras,
        "TotalDevengado": TotalDevengado,
        "Salud": salud,
        "Pension": pension,
        "fondoSol": FondoSol,
        "UVT": uvt,
        "retefuente": reteFuente,
        "retepesos": retePesos,
        "totalDeducido": TotalDeducido,
        "saludPat": SaludPat,
        "pensionPat": PensionPat,
        "ARL": arl,
        "SENA": sena,
        "ICBF": icbf,
        "CAJAS": caja,
        "TotalPara": totalPara,
        "cesantias": Cesantias,
        "IntCesan": intCesan,
        "Prima": prima,
        "Vacaciones": vacaciones,
        "totalPresta": TotalPresta,
        "TotalNomina": totalNomina
    }
    );
    return empleado;
}

function Sueldo_Dias(salario, dias) {
    let valorRetorno = salario * dias / 30;
    return valorRetorno;
}

function Aux_Transporte(salario, dias) {
    var valorRetorno = 0;
    if (salario <= SalMin * 2) {
        var valorRetorno = (Transporte / 30 * dias);
    }
    return valorRetorno;
}

function HoraOrd(salario) {
    let valorRetorno = (salario / 240);
    return valorRetorno;
}

function TotalExtras(HED, HEN, HEDD, HeDN, Rec, horaOrd) {
    let valorRetorno = (horaOrd * HED * 1.25) + (horaOrd * HEN * 1.75) + (horaOrd * HEDD * 2) + (horaOrd * HeDN * 2.5) + (horaOrd * Rec * 0.35);
    return valorRetorno;
}
function Total_Devengado(sueldoDias, auxTransp, totalExtras) {
    return sueldoDias + auxTransp + totalExtras;
}

function Salud(totalDevengado, auxTransp) {
    return (totalDevengado - auxTransp) * 0.04;
}

function Pension(totalDevengado, auxTransp) {
    return (totalDevengado - auxTransp) * 0.04;
}

function fondoSol(salario) {
    valorRetorno = 0;

    if (salario > SalMin * 20) {
        var valorRetorno = salario * 0.02;
    }
    else if (salario > SalMin * 19) {
        var valorRetorno = salario * 0.018;
    }
    else if (salario > SalMin * 18) {
        var valorRetorno = salario * 0.016;
    }
    else if (salario > SalMin * 17) {
        var valorRetorno = salario * 0.014;
    }
    else if (salario >= SalMin * 16) {
        var valorRetorno = salario * 0.012;
    }
    else if (salario >= SalMin * 4) {
        var valorRetorno = salario * 0.01;
    }

    return valorRetorno;
}

function UVT(TotalDevengado, salud, Pension, fondoSol) {
    return (((TotalDevengado - salud - Pension - fondoSol) * 0.75) / 36308);
}

function Retefuente(UVT) {

    var valorRetorno = 0;
    if (UVT > 2300) {
        var valorRetorno = (UVT - 2300) * 0.39 + 770;
    }
    else if (UVT > 945) {
        var valorRetorno = (UVT - 945) * 0.37 + 268;
    }
    else if (UVT > 640) {
        var valorRetorno = (UVT - 640) * 0.35 + 162;
    }
    else if (UVT > 360) {
        var valorRetorno = (UVT - 360) * 0.33 + 69;
    }
    else if (UVT > 150) {
        var valorRetorno = (UVT - 150) * 0.28 + 10;
    }
    else if (UVT > 95) {
        var valorRetorno = (UVT - 95) * 0.19;
    }

    return valorRetorno;

}

function Retepesos(retefuente) {
    return retefuente * 36308;
}



function Total_Deducido(Salud, Pension, fondoSol, retePesos) {
    return Salud + Pension + fondoSol + retePesos;
}

function saludPat(totalDevengado, auxTransp) {
    return (totalDevengado - auxTransp) * 8.5 / 100;

}

function pensionPat(totalDevengado, auxTransp) {
    return (totalDevengado - auxTransp) * 0.12;
}

function ARL(riesgo, totalDevengado, auxTransp) {
    let valorRetorno = 0;
    if (riesgo == 1) {
        valorRetorno = (totalDevengado - auxTransp) * 0.00522;
    }
    else if (riesgo == 2) {
        valorRetorno = (totalDevengado - auxTransp) * 0.01044;
    }
    else if (riesgo == 3) {
        valorRetorno = (totalDevengado - auxTransp) * 0.02436;
    }
    else if (riesgo == 4) {
        valorRetorno = (totalDevengado - auxTransp) * 0.0435;
    }
    else if (riesgo == 5) {
        valorRetorno = (totalDevengado - auxTransp) * 0.0696;
    }

    return valorRetorno;
}

function SENA(totalDevengado, auxTransp) {
    return (totalDevengado - auxTransp) * 0.02;
}

function ICBF(totalDevengado, auxTransp) {
    return (totalDevengado - auxTransp) * 0.03;
}

function CAJAS(totalDevengado) {
    return totalDevengado * 0.04;
}

function TotalPara(ARL, SENA, ICBF, CAJAS) {
    return ARL + SENA + ICBF + CAJAS;
}

function cesantias(totalDevengado) {
    return totalDevengado * 0.0833;
}

function IntCesan(cesantias) {
    return cesantias * 1 / 100;
}

function Prima(cesantias) {
    return cesantias;
}

function Vacaciones(totalDevengado, auxTransp) {
    return (totalDevengado - auxTransp) * 0.0417;
}

function totalPresta(cesantias, IntCesan, Prima, Vacaciones) {
    return cesantias + IntCesan + Prima + Vacaciones
}



function TotalNomina(totalPresta, TotalPara, totalDevengado, totalDeducido) {
    return totalPresta + TotalPara + totalDevengado - totalDeducido;
}