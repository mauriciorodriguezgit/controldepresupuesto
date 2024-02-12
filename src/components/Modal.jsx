import { useState, useEffect } from 'react'
import Mensaje from './Mensaje'
import React from 'react'
import CerrarBtn from '../img/cerrar.svg'



const Modal = ({
    setModal,
    animarModal,
    setAnimarModal,
    guardarGasto,
    gastoEditar,
    setGastoEditar
}) => {

    const [mensaje, setMensaje] = useState('')
    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [categoria, setCategoria] = useState('')
    const [fecha, setFecha] = useState('')
    const [id, setId] = useState('')

    useEffect(() => {
        if (Object.keys(gastoEditar).length > 0) {
            setNombre(gastoEditar.nombre)
            setCantidad(gastoEditar.cantidad)
            setCategoria(gastoEditar.categoria)
            setFecha(gastoEditar.fecha)
            setId(gastoEditar.id)

        }
    }, [])


    const ocultarModal = () => {
        setAnimarModal(false)
        setGastoEditar({})
        setTimeout(() => {
            setModal(false)
        }, 500);
    }
    const handleSumit = e => {
        e.preventDefault()

        // nombre,cantidad y categoria tiene que ser obligatorios
        // por eso includes , si alguno esta vacio ,salta una alerta

        if ([nombre, cantidad, categoria].includes('')) {
            setMensaje('todos los campos son obligatorios')

            setTimeout(() => {
                setMensaje('')
            }, 3000);
        }
        guardarGasto({ nombre, cantidad, categoria, id, fecha })

    }

    return (
        <div className='modal'>
            <div className='cerrar-modal'>
                <img src={CerrarBtn}
                    alt="cerrar-modal"
                    onClick={ocultarModal} />
            </div>
            {/* si animarmodal es true ,que agregua el css de animar ,si no,
            se este vacio */}
            <form
                onSubmit={handleSumit}
                className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}>
                <legend>{gastoEditar.nombre ? 'Editar Gasto' : 'Nuevo Gasto'}</legend>
                {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}



                <div className='campo'>
                    <label htmlFor="nombre">Nombre Gasto</label>
                    <input
                        id='nombre'
                        type="text"
                        placeholder='Añade el Nombre Del Gasto'
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>
                <div className='campo'>
                    <label htmlFor="cantidad">Cantidad</label>
                    <input
                        id='cantidad'
                        type="number"
                        placeholder='Añade la cantidad del Gasto ej. 300'
                        value={cantidad}
                        onChange={e => setCantidad(Number(e.target.value))}
                    />
                </div>
                <div className='campo'>
                    <label htmlFor="categoria">Categoria</label>
                    <select id="categoria"
                        value={categoria}
                        onChange={e => setCategoria(e.target.value)}>


                        <option value="">---seleciones---</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos Varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>
                <input
                    type="submit"
                    value={gastoEditar.nombre ? 'Guardar Cambios' : 'Añadir Gasto'} />
            </form>
        </div>
    )
}

export default Modal