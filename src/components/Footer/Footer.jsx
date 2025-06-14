import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";

const FooterLinks = [
    {
        title: "Inicio",
        link: "/#",
    },
    {
        title: "Sobre nosotros",
        link: "/#",
    },
    {
        title: "Contacto",
        link: "/#",
    },
    {
        title: "Blog",
        link: "/#",
    },
];

const QuickLinks = [
    {
        title: "Términos y condiciones",
        link: "/#",
    },
    {
        title: "Política de privacidad",
        link: "/#",
    },
    {
        title: "Envíos y devoluciones",
        link: "/#",
    },
    {
        title: "Preguntas frecuentes",
        link: "/#",
    },
];

const Footer = () => {
    return (
        <footer className = "dark:bg-gray-950">
            <div className = "container">
                <div className = "grid md:grid-cols-3 pb-20">
                    <div className = "pb-8 md:pb-0 px-4">
                        <a href = "#" className = "text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl">
                            EShop CESB
                        </a>
                        <p className = "text-gray-600 dark:text-white/70 lg:pr-24 pt-3 text-justify">
                            En <strong>EShop CESB</strong>, ofrecemos los últimos dispositivos tecnológicos para mejorar tu día a día.
                            Encuentra desde smartphones y laptops hasta accesorios innovadores con la mejor calidad y garantía.</p>
                        <p className = "text-gray-500 mt-4">
                            Hecho con ❤️ por <a href = "https://github.com/carlozzsilva10" target = "_blank" rel = "noopener noreferrer" className = "text-primary font-semibold hover:underline">carlozzsilva10</a>
                        </p>
                        <a href = "#" target = "_blank" className = "inline-block bg-primary/90 text-white px-4 py-2 mt-4 text-sm rounded-full">
                            Visita mi canal de Youtube
                        </a>
                    </div>
                    {/* Footer links */}
                    <div className = "col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-14">
                        <div className = "py-8 md:py-0 px-4">
                            <h1 className = "text-xl font-bold sm:text-left mb-3">
                                Links Importantes
                            </h1>
                            <ul className = "space-y-3">
                                {
                                    FooterLinks.map((data, index) => (
                                        <li key = {index}>
                                            <a href = {data.link} className = "text-gray-600 dark:text-gray-400 hover:text-black hover:dark:text-white duration-300">
                                                {data.title}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        {/* Second col links */}
                        <div className = "py-8 md:py-0 px-4">
                            <h1 className = "text-xl font-bold sm:text-left mb-3">
                                Links Rápidos
                            </h1>
                            <ul className = "space-y-3">
                                {
                                    QuickLinks.map((data, index) => (
                                        <li key = {index}>
                                            <a href = {data.link} className = "text-gray-600 dark:text-gray-400 hover:text-black hover:dark:text-white duration-300">
                                                {data.title}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        {/* Company address */}
                        <div className = "py-8 md:py-0 px-4 col-span-2 sm:col-auto">
                            <h1 className = "text-xl font-bold sm:text-left mb-3">
                                Dirección
                            </h1>
                            <div className = "">
                                <div className = "flex items-center gap-3">
                                    <FaLocationArrow />
                                    <p>Huacho, Lima</p>
                                </div>
                                <div className = "flex items-center gap-3 mt-6">
                                    <FaMobileAlt />
                                    <p>Perú</p>
                                    <p>+51 987 654 321</p>
                                </div>
                                {/* Social links */}
                                <div className = "flex items-center gap-3 mt-6">
                                    <a href = "#">
                                        <FaFacebook className = "text-3xl hover:text-primary duration-300" />
                                    </a>
                                    <a href = "#">
                                        <FaInstagram className = "text-3xl hover:text-primary duration-300" />
                                    </a>
                                    <a href = "#">
                                        <FaLinkedin className = "text-3xl hover:text-primary duration-300" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;