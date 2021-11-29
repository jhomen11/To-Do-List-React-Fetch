import React, {useState} from 'react'

const Formulario = ({crearTarea, agregaTarea}) => {

    const [datosFormulario, setDatosFormulario] = useState({label: "", done: false})

    const [error, guardarError] = useState(false)
    
    //Capturar lo que se escribe en el formulario
    const actualizarTarea = (e) =>{
        setDatosFormulario({
            label: e.target.value, done:false
        })
    }

    const submitTarea= (e) =>{
        e.preventDefault();

        //Validacion del formulario
        if(datosFormulario.label === ""){
            guardarError(true)
            return;
        }
        guardarError(false)

        crearTarea(datosFormulario)

        setDatosFormulario({label: ""})
    }
    agregaTarea()

    return (
        <>
            

            {
                error ?(
                    <p className="error">El campo Tarea es obligatorio</p>
                )   :null
            }
            <form onSubmit={submitTarea}>
                <div className="contenido_formulario">
                    <input type="text"
                    autocomplete="off"
                    name="label"
                    onChange={(e)=>actualizarTarea(e)}
                    value={datosFormulario.label}
                    />
                    <button 
                    className="agregar">
                    <i className="fas fa-plus"></i>
                    </button>
                </div>
            </form>
        </>
    )
}

export default Formulario
