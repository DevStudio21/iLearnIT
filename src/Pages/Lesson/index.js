import React from 'react'
import './styles.css'

export default function Lesson () {
    return (
      <div id="blackboard" className="mt-10 h-4/5 w-11/12 mx-auto p-20 rounded-md bg-white border border-black relative">
        <p className="text-white text-3xl text-center">Tabla de multiplicar del número 3</p>
        <p className="text-white text-8xl text-center mt-56"> 3 x 2</p>
        <div className="flex justify-between border border-white w-11/12 absolute bottom-20 ">
          <button className="text-white text-3xl text-center border border-white rounded p-3">Volver a empezar</button>
          <button className="text-white text-3xl text-center border border-white rounded p-3">Volver a intentar</button>
          <button className="text-white text-3xl text-center border border-white rounded p-3">Siguiente</button>
        </div>
      </div>
    )
}