import React from 'react';
import PropTypes from 'prop-types';
const Cita = ({cita,eliminarCita}) => {
  return(
    <div className="cita">
      <p><span>Mascota: </span>{cita.mascota}</p>
      <p><span>Dueño: </span>{cita.propietario}</p>
      <p><span>Fecha: </span>{cita.fecha}</p>
      <p><span>Hora: </span>{cita.hora}</p>
      <p><span>Sintomas: </span>{cita.sintomas}</p>
      <button
        className="button eliminar u-full-width"
        onClick={()=>eliminarCita(cita.id)}
      >
      Eliminar &times;
      </button>
    </div>
  );
}

Cita.propTypes = {
  cita : PropTypes.object.isRequired,
  eliminarCita: PropTypes.func.isRequired
}

export default Cita;
