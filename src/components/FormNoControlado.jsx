import React from "react";
import { useRef } from "react";
const FormNoControlado = () => {

  const formulario = useRef(null);

  const handleSubmit = (e) =>{
    e.preventDefault();
    const datos = new FormData(formulario.current)
    //console.log(...datos.entries())

    const objetoDatos = Object.fromEntries([...datos.entries()])
    console.log(objetoDatos)
    const {todoName, todoEstado, todoDescription} = objetoDatos;

    if(todoDescription.trim() ===""){
      console.log("Esta VAcio")
      return
    }
  }

  return (
    <div>
      <h1>No controlado</h1>
      <form ref={formulario} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese Todo"
          name="todoName"
          className="form-control mb-2"
          defaultValue="Tarea #01"
        />
        <textarea
          name="todoDescription"
          className="form-control mb-2"
          id=""
          cols="30"
          rows="10"
          defaultValue="Descripcion Tarea #01"
        />
      
      <select name="todoEstado" className="form-control mb-2"
      defaultValue="pendiente"
      >
        <option value="pendiente">Pendiente</option>
        <option value="completada">Completada</option>
      </select>
      <button className="btn btn-primary">Agregar</button>
      </form>
    </div>
  );
};

export default FormNoControlado;
