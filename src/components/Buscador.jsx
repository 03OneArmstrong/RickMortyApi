import React from 'react'

function Buscador({busqueda, setBusqueda}) {

    const handleChangeNombre = (e) => {
        const input = e.target.value;
        const result = input.replace(/[^a-zA-ZáéíóúÁÉÍÓÚ\s]/g, '')
        setBusqueda(result)
    }

    return (
        <>
            <div className='flex flex-col items-center m-5 p-5'>
                <input
                    value={busqueda}
                    onChange={handleChangeNombre}
                    className='border-2 border-[#000] rounded-3xl text-center p-2 w-96 text-2xl'
                    placeholder='Buscar'
                    type="text" />
            </div>
        </>
    )
}

export default Buscador
