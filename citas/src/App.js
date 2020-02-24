import React,{Fragment,useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';
function App() {

  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales){
    citasIniciales = [];
  }

  const [citas, setCitas] = useState(citasIniciales);

  useEffect(()=>{
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));
    if(citasIniciales){
      localStorage.setItem('citas',JSON.stringify(citas));
    }else{
      localStorage.setItem('citas',JSON.stringify([]));
    }
  },[citas]);

  const guardarCita = cita =>{
      setCitas([
        ...citas,
        cita
      ]);
      console.log('Array de citas ', ...citas);
  }

  const eliminarCita = id =>{
    const newArray = citas.filter(cita=> cita.id !== id);
    setCitas(newArray);
  }

  return (
    <Fragment>
      <h1>Administrador de citas</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              guardarCita={guardarCita}
            />
          </div>
          <div className="one-half column">
            {citas.length === 0 ? <h2>Agrega una nueva cita</h2> : <h2>Adminstra tus citas</h2>}
            {citas.map(cita =>(
              <Cita
              key={cita.id}
              cita={cita}
              eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>

  );
}
export default App;
