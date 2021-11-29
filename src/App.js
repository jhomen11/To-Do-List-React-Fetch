import React, { useState, useEffect } from "react";
import "./App.css";
import Formulario from "./components/Formulario";
import Tareas from "./components/Tareas";

function App() {
  const [tareaInicial, setTareaIncial] = useState([]);

  const agregaTarea = () => {
    fetch("https://assets.breatheco.de/apis/fake/todos/user/jhonny", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tareaInicial),
    })
      .then((response) => response.json())
      //.then(result => console.log(result))
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    fetch("https://assets.breatheco.de/apis/fake/todos/user/jhonny")
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        //console.log(data);
        setTareaIncial(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //Funcion que recibe la tarea y se la agrega a las tareas anteriores
  const crearTarea = (data) => {
    setTareaIncial([...tareaInicial, data]);
  };

  //Funcion para eliminar una tarea
  const eliminarTarea = (e) => {
    let index = tareaInicial.indexOf(e);
    let ele = tareaInicial[index] = true;
    const tareaEliminada = tareaInicial.filter((tarea) => tarea !== ele);
    setTareaIncial(tareaEliminada);
  };

  //Mensaje condicional, muestra un mensaje dependiendo si hay tareas o no
	const titulo = tareaInicial.length === 0 ? "No hay Tareas" : "Listado de Tareas";

  return (
    <div className="contenido">
      <div className="main">
        <h1>To-Do List</h1>
        <Formulario crearTarea={crearTarea} agregaTarea={agregaTarea} />
        <h3>{titulo}</h3>
        
          {tareaInicial.map((tarea,index)=>{
            
            if(tarea.done==false){
            return(<Tareas key={index} tarea={tarea} eliminarTarea={eliminarTarea}/>)
            }
            })}        

        <h4>{tareaInicial.length -1} Tareas pendientes</h4>
      </div>
    </div>
  );
}

export default App;
