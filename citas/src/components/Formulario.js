import React,{Fragment, useState} from 'react';
import uuid from 'uuid/v4';
import PropTypes from 'prop-types';
const  Formulario = ({guardarCita}) => {

    //State para el formulario

    const [cita, setCita] = useState({
      mascota: '',
      propietario: '',
      fecha : '',
      hora: '',
      sintomas: ''
    });

    const actualizarState = e =>{
      setCita({
        ...cita,
        [e.target.name] : e.target.value
      });

    }

    const [error, setError] = useState(false);

    const {mascota,propietario,fecha,hora,sintomas} = cita;

    const submitCita = e =>{
      e.preventDefault();
      if(mascota.trim() === '' ||
        propietario.trim() === '' ||
        fecha.trim() === ''||
        hora.trim() === '' ||
        sintomas.trim() === ''){

          setError(true);
          return;
        }
        setError(false);
        cita.id = uuid();
        guardarCita(cita);
        setCita({
          mascota: '',
          propietario: '',
          fecha : '',
          hora: '',
          sintomas: ''
        });
    }

    return (
      <Fragment>
        <h2>Crear Cita</h2>
        {error ? <p className="alerta-error">Se requieren todos los datos del formulario</p>:null}
        <form onSubmit={submitCita}>
          <label>Nombre Mascota</label>
          <input
            type="text"
            name="mascota"
            className="u-full-width"
            placeholder="Nombre Mascota"
            onChange={actualizarState}
            value={mascota}
          />

          <label>Nombre Dueño</label>
          <input
            type="text"
            name="propietario"
            className="u-full-width"
            placeholder="Nombre Dueño"
            onChange={actualizarState}
            value={propietario}
          />

          <label>Fecha</label>
          <input
            type="date"
            name="fecha"
            className="u-full-width"
            onChange={actualizarState}
            value={fecha}
          />

          <label>Hora</label>
          <input
            type="time"
            name="hora"
            className="u-full-width"
            onChange={actualizarState}
            value={hora}
          />

          <label>Sintomas</label>
          <textarea
            className="u-full-width"
            name="sintomas"
            onChange={actualizarState}
            value={sintomas}>
          </textarea>

          <button
            type="submit"
            className="u-full-width button-primary">
            Agregar Cita
          </button>
        </form>
      </Fragment>
    );
};

Formulario.propTypes = {
  guardarCita : PropTypes.func.isRequired
}

export default Formulario;
