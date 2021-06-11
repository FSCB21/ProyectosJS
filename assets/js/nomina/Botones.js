document.querySelector('#Boton1').addEventListener('click', Imprimir);
document.querySelector('#Boton2').addEventListener('click', genPDF);

/*function genPDF() {
    document.querySelector('#Boton1').style.display = 'none';
    document.querySelector('#Boton2').style.display = 'none';
    document.querySelector('#Boton3').style.display = 'none';

    document.querySelector('#Tabladiv').classList.toggle('imprimir');
    html2canvas(document.body, {
        onrendered: function (canvas) {

            var img = canvas.toDataURL("image/png");
            var doc = new jsPDF();
            doc.addImage(img, 'JPEG', 10, 10);
            doc.save('Nomina.pdf');

        }

    });

    document.querySelector('#Boton1').style.display = 'Block';
    document.querySelector('#Boton2').style.display = 'Block';
    document.querySelector('#Boton3').style.display = 'Block';

    document.querySelector('#Tabladiv').classList.toggle('imprimir');
}*/

function genPDF() {
    const element = document.getElementById("SeccionDiv");
    document.querySelector('#Boton1').style.display = 'none';
    document.querySelector('#Boton2').style.display = 'none';
    document.querySelector('#Boton3').style.display = 'none';
    document.querySelector('#Boton4').style.display = 'none';
    document.querySelector('#Boton5').style.display = 'none';
    document.querySelector('#Tabladiv').style.background = 'none';


    for (let i = 0; i < empleados.length; i++) {
        document.getElementById('accionesA' + i).style.display = 'none';
        document.getElementById('accionesB' + i).style.display = 'none';
    }


    //html2pdf()
    //.from(element)
    //.save()

    html2pdf()
        .set({
            margin: .5,
            filename: 'nomina.pdf',
            image: {
                type: 'jpeg',
                quality: 0.98
            },
            html2canvas: {
                scale: 3, // A mayor escala, mejores gráficos, pero más peso
                letterRendering: true,
            },
            jsPDF: {
                unit: "in",
                format: "a1",
                orientation: 'landscape' // landscape o portrait
            }
        })
        .from(element)
        .save()
        .catch(err => console.log(err));

    setTimeout(function () {
        aparecer()
    }, 1000);
}

function aparecer() {
    document.querySelector('#Boton1').style.display = 'block';
    document.querySelector('#Boton2').style.display = 'block';
    document.querySelector('#Boton3').style.display = 'block';
    document.querySelector('#Boton4').style.display = 'block';
    document.querySelector('#Boton5').style.display = 'block';



    document.querySelector('#acciones').style.display = 'block';

    for (let i = 0; i < empleados.length; i++) {
        document.getElementById('accionesA' + i).style.display = 'block';
        document.getElementById('accionesB' + i).style.display = 'block';
    }
}


function Imprimir() {
    document.querySelector('#Boton1').style.display = 'none';
    document.querySelector('#Boton2').style.display = 'none';
    document.querySelector('#Boton3').style.display = 'none';
    document.querySelector('#Boton4').style.display = 'none';
    document.querySelector('#Boton5').style.display = 'none';

    document.querySelector('#acciones').style.display = 'none';

    for (let i = 0; i < empleados.length; i++) {
        document.getElementById('accionesA' + i).style.display = 'none';
        document.getElementById('accionesB' + i).style.display = 'none';
    }

    document.querySelector('#Tabladiv').classList.toggle('imprimir');

    document.querySelector('#formularioConten').style.display = 'none';
    window.print()
    document.querySelector('#Boton1').style.display = 'block';
    document.querySelector('#Boton2').style.display = 'block';
    document.querySelector('#Boton3').style.display = 'block';
    document.querySelector('#Boton4').style.display = 'block';
    document.querySelector('#Boton5').style.display = 'block';
    document.querySelector('#acciones').style.display = 'block';

    for (let i = 0; i < empleados.length; i++) {
        document.getElementById('accionesA' + i).style.display = 'block';
        document.getElementById('accionesB' + i).style.display = 'block';
    }

    document.querySelector('#Tabladiv').classList.toggle('imprimir');

    document.querySelector('#formularioConten').style.display = 'block';
}

var tableToExcel = (function () {
    var uri = 'data:application/vnd.ms-excel;base64,'
        , template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>'
        , base64 = function (s) { return window.btoa(unescape(encodeURIComponent(s))) }
        , format = function (s, c) { return s.replace(/{(\w+)}/g, function (m, p) { return c[p]; }) }


    return function (table, name) {
        if (!table.nodeType) table = document.getElementById(table)
        var ctx = { worksheet: name || 'Worksheet', table: table.innerHTML }
        window.location.href = uri + base64(format(template, ctx))

        var link = document.createElement("a");
        link.download = "Nomina";
        link.href = uri + base64(format(template, ctx))
        link.click();
    }
})()