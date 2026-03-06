import { useEffect, useState } from 'react'
import MostrarPersonaje from './MostrarPersonaje'
import Navbar from './Navbar'
import Buscador from './Buscador'

function ConsumoApi() {

    const [personajes, setPersonajes] = useState([])
    const [busqueda, setBusqueda] = useState('')

    const filtro = personajes.filter((obj) => (
        obj.name?.toLowerCase().includes(busqueda.toLowerCase())
    ))

    useEffect(() => {
        const consultarData = async () => {
            try {
                const res = await fetch('https://rickandmortyapi.com/api/character')
                if (!res.ok) {
                    console.log('Se ha generado un error');
                    return
                }
                const data = await res.json();
                setPersonajes(data.results)
                console.log(data.results);
            } catch (error) {
                console.error(error);
            }
        }
        consultarData()
    }, [])

    return (
        <>
            <Navbar />
            <Buscador busqueda={busqueda} setBusqueda={setBusqueda} />
            <MostrarPersonaje personajes={filtro} />
        </>
    )
}

export default ConsumoApi
