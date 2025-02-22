import React from "react";
import Heading from "../Shared/Heading";
import Img1 from "../../assets/blogs/blog-1.jpg";
import Img2 from "../../assets/blogs/blog-2.jpg";
import Img3 from "../../assets/blogs/blog-3.jpg";

const BlogData = [
    {
        title: "Guía definitiva para elegir el mejor smartwatch",
        subtitle: "Descubre cómo elegir el smartwatch perfecto según tu estilo de vida, necesidades y presupuesto. Analizamos características como duración de batería, compatibilidad con tu teléfono, sensores de salud y más.",
        published: "20 de enero de 2024 por Dilshad",
        image: Img1,
        aosDelay: "0",
    },
    {
        title: "Cómo elegir el gadget ideal para ti",
        subtitle: "Desde smartphones hasta dispositivos inteligentes para el hogar, te ayudamos a seleccionar el gadget perfecto. Conoce las últimas innovaciones, compara especificaciones y encuentra el mejor equilibrio entre funcionalidad y precio.",
        published: "20 de enero de 2024 por Satya",
        image: Img2,
        aosDelay: "200",
    },
    {
        title: "Los mejores auriculares VR: Guía de compra",
        subtitle: "Sumérgete en el mundo de la realidad virtual con los mejores auriculares VR. Comparamos modelos, características como resolución, tasa de refresco y compatibilidad para que encuentres la opción ideal para juegos, simulaciones y más.",
        published: "20 de enero de 2024 por Zahir",
        image: Img3,
        aosDelay: "400",
    },
]

const Blogs = () => {
    return (
        <div className = "my-12">
            <div className = "container">
                {/* Header section */}
                <Heading title = "Noticias recientes" subtitle = {"Explora nuestras últimas novedades y lanzamientos."} />
                {/* Body section */}
                <div className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sn:gap.4 md:gap-7">
                    {/* Blog card */}
                    {
                        BlogData.map((data) => (
                            <div key = {data.title} className = "bg-white dark:bg-gray-900" data-aos = "fade-up" data-aos-delay = {data.aosDelay}>
                                {/* Img section */}
                                <div className = "overflow-hidden rounded-2xl mb-2">
                                    <img src = {data.image} alt = "imgBlog" className = "w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500" />
                                </div>
                                {/* Content section */}
                                <div className = "space-y-2">
                                    <p className = "text-xs text-gray-500">{data.published}</p>
                                    <p className = "font-bold line-clamp-1">{data.title}</p>
                                    <p className = "line-clamp-2 text-sm text-gray-600 dark:text-gray-400 text-justify">{data.subtitle}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Blogs