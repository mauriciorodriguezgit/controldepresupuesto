import React from 'react'
import Gasto from './Gasto'

const ListadosGastos = ({ gastos,
    setGastoEditar,
    eliminarGasto,
    filtro,
    gastosFiltrados,

}) => {
    return (

        // si hay algo de gasto que lo muentre (length),
        // si no,'no hay gastos aun'
        <div className='listado-gasto contenedor'>
            

            {filtro ?
                (
                    <>
                        <h2>{gastosFiltrados.length ? 'Gastos' : 'No hay Gastos en esta categoria'}</h2>
                        {gastosFiltrados.map(gasto => (
                            <Gasto
                                key={gasto.id}
                                gasto={gasto}
                                setGastoEditar={setGastoEditar}
                                eliminarGasto={eliminarGasto}
                            />
                        ))}
                    </>
                ) : (
                    <>
                        <h2>{gastos.length ? 'Gastos' : 'No hay Gastos '}</h2>
                        {gastos.map(gasto => (
                            <Gasto
                                key={gasto.id}
                                gasto={gasto}
                                setGastoEditar={setGastoEditar}
                                eliminarGasto={eliminarGasto}
                            />
                        ))}
                    </>
                )

            }

        </div>
    )
}

export default ListadosGastos