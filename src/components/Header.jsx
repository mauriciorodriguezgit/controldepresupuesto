import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'

const Header = ({
    gastos,
    setGastos,
    presupuesto,
    setPresupuesto,
    isValidPresupuesto,
    setIsValidPresupuesto
}) => {
    return (
        <header>
            <h1>Planificador de Gastos</h1>
            {/* si el presupuesto es valido ,que retorne,
            el componente controlpresupuesto */}

            {isValidPresupuesto ? (<ControlPresupuesto
                gastos={gastos}
                setGastos={setGastos}
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                setIsValidPresupuesto ={setIsValidPresupuesto}
            />) :
                // si no es valido, entonces se hace un nuevo presupuesto
                (
                    <NuevoPresupuesto
                        presupuesto={presupuesto}
                        setPresupuesto={setPresupuesto}
                        setIsValidPresupuesto={setIsValidPresupuesto}
                    />
                )
            }
        </header>
    )
}

export default Header