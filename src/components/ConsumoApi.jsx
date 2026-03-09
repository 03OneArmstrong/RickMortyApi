import { useEffect, useState } from 'react'
import MostrarPersonaje from './MostrarPersonaje'
import Navbar from './Navbar'
import Buscador from './Buscador'
import Footer from './Footer'

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
        <div className='min-h-screen flex flex-col'>
                <Navbar />
            <main className='flex-grow'>
                <Buscador busqueda={busqueda} setBusqueda={setBusqueda} />
                <MostrarPersonaje personajes={filtro} />
            </main>
                <Footer />

        </div>
    )
}

export default ConsumoApi
