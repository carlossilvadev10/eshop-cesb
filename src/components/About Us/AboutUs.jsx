import React from "react";
import Heading from "../Shared/Heading";
import ImageAbout from "../../assets/about/about-us.jpg"; // Verifica que esta imagen esté en tu carpeta

const AboutUs = () => {
    return (
        <section className = "scroll-mt-28" id = "about-us">
            <div className = "container">
                {/* Header section */}
                <div className = "mb-10">
                    <Heading title = "Sobre EShop CESB" subtitle = "Ofrecemos los últimos dispositivos tecnológicos para mejorar tu día a día." />
                </div>
                {/* Body section */}
                <div className = "grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Descripción de la tienda */}
                    <div data-aos = "slide-right" data-aos-duration = "1000">
                        <p className = "text-md text-justify leading-relaxed">
                            EShop CESB nació con la idea de acercar la tecnología de calidad a todos, impulsado por un equipo apasionado por la innovación, comenzamos como un pequeño emprendimiento
                            con la misión de ofrecer soluciones tecnológicas modernas, accesibles y confiables, con el tiempo crecimos gracias a la confianza de nuestros clientes, quienes encuentran
                            en nosotros smartphones, laptops y accesorios seleccionados por su funcionalidad, durabilidad y diseño, en EShop CESB creemos que la tecnología transforma vidas.
                        </p>
                    </div>
                    {/* Imagen de la tienda */}
                    <div data-aos = "slide-left" data-aos-duration = "1000">
                        <img src =  {ImageAbout} alt = "Imagen de EShop CESB" className = "rounded-lg shadow-lg w-full h-auto" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;