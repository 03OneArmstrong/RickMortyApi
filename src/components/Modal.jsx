import React from 'react'
import { XCircleIcon } from '@heroicons/react/16/solid'

function Modal({ isOpen, setIsOpen, personaje, setSeleccionado, setDetener }) {
    return (
        <>
            {isOpen && personaje && (
                <div className='fixed inset-0 bg-black/70 flex items-center justify-center z-50'>
                    <div className='bg-white p-6 rounded-xl shadow-xl w-96 relative'>
                        {/* <div className='flex justify-end mb-2'>
                            <button
                                onClick={() => setIsOpen(false)}
                                className=''>
                                <XCircleIcon className='w-8 h-8 bg-[#fff] rounded-full text-[#890620] hover:text-[#c1121f] duration-300' />
                            </button>
                        </div> */}
                        <button
                            onClick={() => {
                                setIsOpen(false)
                                setSeleccionado(null)
                                setDetener(false)
                            }
                            }
                            className='absolute top-4 right-4'>
                            <XCircleIcon className='w-8 h-8 bg-[#fff] rounded-full text-[#780000] hover:text-[#e63946] duration-300' />
                        </button>
                        <div className='grid grid-cols-2 gap-5 mt-7 items-center'>
                            <div className='grid justify-center border-r border-[#000] p-4'>
                                <p className='mb-3 p-1.5 border-b border-[#000]'>Name: {personaje.name}</p>
                                <p className='mb-3 p-1.5 border-b border-[#000]'>Status: {personaje.status}</p>
                                <p className='mb-3 p-1.5 border-b border-[#000]'>Species: {personaje.species}</p>
                                <p className='mb-3 p-1.5 border-b border-[#000]'>Gender: {personaje.gender}</p>
                                <p className='mb-3 p-1.5 border-b border-[#000]'>Dimension: {personaje.origin.name}</p>
                                <p className='mb-3 p-1.5 border-b border-[#000]'>Appearances: {personaje.episode.length}</p>
                            </div>
                            <img
                                className='mx-auto w-96 h-80 object-cover border border-[#000] rounded-3xl shadow-2xl'
                                src={personaje.image} alt={personaje.name} />
                        </div>

                    </div>
                </div>
            )}
        </>
    )
}

export default Modal
