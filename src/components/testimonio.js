import React from 'react';
import react from 'react';
import'../hojas-de-estilo/testimonio.css';

// con componente de clase

class Testimonio extends React.Component{
  render(){
    return (
      <div className='contenedor-testimonio'>
        <img 
          className='imagen-testimonio'
          alt= {`Foto de ${this.props.nombre}`}
          src={require(`../imagenes/T-${this.props.imagen}.png`)} />
          <div className='contenedor-texto-testimonio'>
            <p className='nombre-testimonio'>
              <strong>{this.props.nombre}</strong> en {this.props.pais}
              </p>
            <p className='cargo-testimonio'>
              {this.props.cargo} en <strong>{this.props.empresa}</strong>
              </p>
            <p className='texto-testimonio'>
              "{this.props.testimonio}"
              </p>
          </div>
      </div>
    );

  }
}

export default Testimonio;

// con componente funcional

/*
function Testimonio(props){
  return (
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio'
        alt= {props.nombre}
        src={require(`../imagenes/T-${props.imagen}.png`)} />
        <div className='contenedor-texto-testimonio'>
          <p className='nombre-testimonio'>
            <strong>{props.nombre}</strong> en {props.pais}
            </p>
          <p className='cargo-testimonio'>
            {props.cargo} en <strong>{props.empresa}</strong>
            </p>
          <p className='texto-testimonio'>
            "{props.testimonio}"
            </p>
        </div>
    </div>
  );
}

export default Testimonio;
*/