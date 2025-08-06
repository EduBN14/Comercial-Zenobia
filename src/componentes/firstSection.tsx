import { useState, useEffect } from 'react';

export function FirstSection() {
    const [activeSlide, setActiveSlide] = useState(0);
    
    // Array con las rutas de las imágenes en public/
    const images = [
        "/Imagenes/P_1.png",
        "/Imagenes/P_2.png", 
        "/Imagenes/P_3.png",
        "/Imagenes/P_4.png",
        "/Imagenes/P_5.png"
    ];

    // Auto-avance cada 3 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide(prev => (prev + 1) % images.length);
        }, 3000); // 3 segundos

        return () => clearInterval(interval); // Limpiar el interval al desmontar
    }, [images.length]);

    return(
        <section className="grid grid-cols-2 items-center p-8 container mx-auto">
            <div>
                <h1 className="text-4xl font-bold text-gray-800 leading-tight mb-6">
                    COLCHONES<br /> 
                    TARIMAS<br /> 
                    BAULES
                </h1>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                    Learn More
                </button>
            </div>
            <div className='w-xl'>
                <img 
                    src={images[activeSlide]} 
                    alt={`Producto ${activeSlide + 1}`}
                    className="w-full h-auto object-cover transition-all duration-500 ease-in-out" 
                />
                <div className="flex space-x-2 mt-8 justify-center">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveSlide(index)}
                            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                                activeSlide === index 
                                    ? 'bg-blue-500' 
                                    : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}