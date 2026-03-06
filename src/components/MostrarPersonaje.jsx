import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css'
import { useState } from "react"
import Modal from "./Modal"
import img1 from '../images/images2.jpg'
import img2 from '../images/images3.jpg'

function MostrarPersonaje({ personajes }) {

    const [isOpen, setIsOpen] = useState(false)
    const [personaje, setPersonaje] = useState(null)
    const [seleccionado, setSeleccionado] = useState(null)
    const [detener, setDetener] = useState(false)

    return (
        <>
            {personajes && personajes?.length > 0 ? (
                <Swiper
                    style={{
                        '--swiper-navigation-color': '#fefae0'
                    }}
                    className="border border-[#000] m-5 bg-[#ecf39e]"
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={4}
                    pagination={{ clickable: true }}
                    navigation
                    autoplay={detener
                        ? false
                        : {
                            delay: 1500,
                            disableOnInteraction: false
                        }}
                    loop={true}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 }
                    }}
                >
                    {personajes.map((obj) => (
                        <SwiperSlide
                            className=""
                            key={obj.id}>
                            <div className={`m-10 flex flex-col items-center p-12 ${seleccionado === obj.id ? 'bg-[#e9c46a]' : 'bg-[#d0f4de]'} border-2 border-[#252422] rounded-2xl transition-transform duration-300 hover:scale-110`}>
                                <img
                                    className="w-40 h-40 object-cover rounded-xl border-2 border-[#000]"
                                    src={obj.image}
                                    alt={obj.name} />
                                <button
                                    onClick={() => {
                                        setPersonaje(obj)
                                        setIsOpen(true)
                                        setSeleccionado(obj.id)
                                        setDetener(true)
                                    }}
                                    className="mt-3 bg-[#2d6a4f] rounded-lg p-2 text-white hover:bg-[#90be6d] hover:text-black duration-300 shadow-lg"
                                >{obj.name}</button>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper >
            ) : <div
                className="flex flex-col items-center border border-[#000] p-5 rounded-2xl bg-[#9d0208] w-fit mx-auto shadow-lg group perspective">
                <div className="relative w-64 h-64 transition-transform duration-500 transform transform-style-preserve-3d flip">
                    <img
                        className="absolute w-full h-full object-cover rounded-3xl border border-white shadow-2xl backface-hidden"
                        src={img1} alt='Error' />

                    <img
                        className="absolute w-full h-full object-cover rounded-3xl border border-white shadow-2xl rotate-y-180 backface-hidden"
                        src={img2} alt='imagen alternativa' />

                </div>
                <h1 className="text-center text-[#fff] text-3xl mt-4">Error: No existe el personaje que solicitaste</h1>
            </div>
            }
            <Modal isOpen={isOpen}
                setIsOpen={setIsOpen}
                personaje={personaje}
                setSeleccionado={setSeleccionado}
                setDetener={setDetener}
            />
        </>
    )
}

export default MostrarPersonaje
