var fechas = [];
var fecha1 = {no: '1ra', fecha: '07/07/2020', partidos: [
    {cancha: 'Academia', hora: '11:00', equipo1: 'Equipo 1', equipo2: 'Equipo 2'},
    {cancha: 'Peñarol', hora: '10:00', equipo1: 'Equipo 4', equipo2: 'Equipo 4'},
    {cancha: 'XXXX', hora: '09:00', equipo1: 'Nacional', equipo2: 'Cuba'},
    {cancha: 'HHHHH', hora: '10:00', equipo1: 'Fulano', equipo2: 'Fulanito'}
]};
fechas.push(fecha1);

var fecha2 = {no: '2da', fecha: '08/07/2020', partidos: [
    {cancha: 'XXXX', hora: '09:00', equipo1: 'Nacional', equipo2: 'Cuba'},
    {cancha: 'HHHHH', hora: '10:00', equipo1: 'Fulano', equipo2: 'Fulanito'}
]};
fechas.push(fecha2);

var html = '';
fechas.forEach(fecha => {
    html += 
    ` <table>
        <tr>
            <td colspan="2" class="titulo">` + fecha.no + ` Fecha ` + fecha.fecha + `</td>
        </tr>
        <tr>
            <th>
                Cancha y Hora
            </th>
            <th>
                Partido
            </th>
        </tr>`;
    fecha.partidos.forEach(partido => {
        html += `<tr>
                <td>
                ` + partido.cancha + ` - ` + partido.hora + `
                </td>
                <td>
                ` + partido.equipo1 + ` VS ` + partido.equipo2 + `
                </td>
            </tr>`;
    });
    html += `</table>`;
});
document.getElementById("tablas").innerHTML = html;