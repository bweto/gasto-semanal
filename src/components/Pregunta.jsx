import React, { Fragment, useState } from "react";

const [cantidad, guardarCantidad] = useState(0);

const [error, guardarError] = useState(false);
//Funcion que lle el presupuesto
const definirPresupuesto = e => {
    guardarCantidad( parseInt(e.target.value, 10))
}

//Funcion para agregar presupuesto
const agregarPresupuesto = e => {
    e.preventDefault();
    //validar
    if(cantidad < 1 || isNaN(cantidad)){
        guardarError(true);
        return;
    }
    //si pasa la validación
}

const Pregunta = () => {
  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>

      <form 
        onSubmit={agregarPresupuesto}
      >
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={definirPresupuesto}
        />
        <button
          type="submit"
          className="button-primary u-full-width"
        >Definir Presupuesto</button>
      </form>
    </Fragment>
  );
};

export default Pregunta;
