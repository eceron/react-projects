import React from 'react';

const Footer = ({fechaActual})=>{
  return(
    <footer>
      <p>Todos los derechos reservados &copy; {fechaActual }</p>
    </footer>
  );
}

export default Footer;
