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
                    <div>
                        <p className = "text-lg text-justify leading-relaxed">
                            EShop CESB nació con la visión de facilitar el acceso a la tecnología de calidad para todos.
                            Fundada por un grupo de apasionados por la innovación, nuestra tienda en línea comenzó como
                            un pequeño emprendimiento con la misión de brindar soluciones tecnológicas confiables, accesibles
                            y modernas. Con el paso del tiempo, nos consolidamos gracias al compromiso con nuestros clientes,
                            quienes confían en nosotros para encontrar los últimos smartphones, laptops, wearables y accesorios
                            tecnológicos. Cada producto que ofrecemos está cuidadosamente seleccionado para garantizar
                            funcionalidad, durabilidad y un diseño innovador. En EShop CESB, creemos que la tecnología
                            no solo mejora la vida, sino que la transforma.
                        </p>
                    </div>

                    {/* Imagen de la tienda */}
                    <div>
                        <img src =  {ImageAbout} alt = "Imagen de EShop CESB" className = "rounded-lg shadow-lg w-full h-auto" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;