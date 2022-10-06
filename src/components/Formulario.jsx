import React, { useState } from 'react'


const Formulario = () => {

  const [todo, setTodo] = useState({
    todoName: '',
    todoDescripcion: '',
    todoEstado: 'pendiente',
    todoCheck: false,

  })

  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const {todoName,todoDescripcion} = todo

    if(!todoDescripcion.trim() || !todoName.trim()){
      setError(true)
      return;
    }
    setError(false)

  }

  // onChange
  const handleChange = (e) => {

    setTodo((old) =>
    ({
      ...old,
      [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
    })
    )
  }

  const PintarError = () =>{
    return(
      <div className="alert alert-danger">obligatorios</div>
    )
   
  }

  return (
    <>
      <h1>No controlado</h1>
      {
        error ? <PintarError /> : null
      }
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese Todo"
          name="todoName"
          className="form-control mb-2"
          onChange={handleChange}
          value={todo.todoName}
        />
        <textarea
          name="todoDescripcion"
          className="form-control mb-2"
          id=""
          cols="30"
          rows="10"
          onChange={handleChange}
          value={todo.todoDescripcion}
        />
        <select
          name="todoEstado"
          className="form-control mb-2"
          onChange={handleChange}
          value={todo.todoEstado}
        >
          <option value="pendiente">Pendiente</option>
          <option value="completada">Completada</option>
        </select>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name='todoCheck'
            checked={todo.todoCheck}
            onChange={handleChange}
            id="flexCheckDefault" />
          <label
            className="form-check-label"
            htmlFor="flexCheckDefault">
            Default checkbox
          </label>
        </div>

        <button type='submit' className="btn btn-primary">Agregar</button>
      </form>
    </>
  )
}

export default Formulario
