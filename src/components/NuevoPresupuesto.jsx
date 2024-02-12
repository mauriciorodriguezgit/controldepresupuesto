import React, { useState } from 'react'
import Mensaje from './Mensaje'



const NuevoPresupuesto = ({
    presupuesto,
    setPresupuesto,
    setIsValidPresupuesto
}) => {

    const [mensaje, setMensaje] = useState('')

    const handlePresupuesto = (e) => {
        e.preventDefault()

        // si no hay presupuesto,o el numero es menor a 0 

        if (!(presupuesto) || (presupuesto) < 0) {
            setMensaje('no es un presupuesto valido')

            // en caso de que no cumpla ninguna de las anteriores
            return
        }
        setMensaje('')
        setIsValidPresupuesto(true)



    }
    return (
        <div className='contenedor-presupuesto contenedor sombra'>
            <form onSubmit={handlePresupuesto} className='formulario'>
                <div className='campo'>
                    <label>Definir Presupuesto</label>
                    {/* a type se le pone number para que solo se pueda
                    escribir numeros */}
                    <input className='nuevo-presupuesto'
                        type='number'
                        placeholder='Añade tu presupuesto'
                        value={presupuesto}
                        onChange={e => setPresupuesto(Number(e.target.value))}



                    />
                </div>
                <input type="submit" value="Añadir" />
                {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}

            </form>
        </div>
    )
}

export default NuevoPresupuesto