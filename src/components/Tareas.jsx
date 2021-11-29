import React from 'react'

const Tareas = ({tarea, eliminarTarea}) => {
    
    
    return (
        <div className="contenido_tarea">
            <p>{tarea.label}</p>
            <button
            className="eliminar"
            onClick={()=>eliminarTarea(tarea)}
            ><i className="far fa-trash-alt"></i></button>
        </div>
    )
}

export default Tareas
