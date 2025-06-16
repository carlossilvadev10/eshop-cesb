import React from "react";
import Slider from "react-slick";
import Button from "../Shared/Button";
import Imagen1 from "../../assets/hero/headphone.png";
import Imagen2 from "../../assets/category/vr.png";
import Imagen3 from "../../assets/category/macbook.png";
import Imagen4 from "../../assets/category/cellphone.png";

const HeroData = () => [
    {
        id: 1,
        img: Imagen1,
        subtitle: "Audio Pro",
        title: "Inalámbricos",
        title2: "Audífonos",
    },
    {
        id: 2,
        img: Imagen2,
        subtitle: "VR Max",
        title: "Interactivas",
        title2: "Virtual",
    },
    {
        id: 3,
        img: Imagen3,
        subtitle: "NextGen",
        title: "Profesional",
        title2: "Laptops",
    },
    {
        id: 4,
        img: Imagen4,
        subtitle: "Infinity",
        title: "Premium",
        title2: "Celulares",
    },
]

const Hero = ({ handleOrderPopup }) => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    }

    return (
        <section className = "container pt-20">
            <div className = "overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center">
                <div className = "container pb-8 sm:pb-0">
                    {/* Hero section */}
                    <Slider {...settings}>
                        {
                            HeroData().map((data) => (
                                <div key = {data.id}>
                                    <div className = "grid grid-cols-1 sm:grid-cols-2 overflow-hidden">
                                        {/* Text content section */}
                                        <div className = "flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                                            <h1 className = "text-2xl sm:text-6xl lg:text-2xl font-bold" data-aos = "zoom-out" data-aos-duration = "500" data-aos-once = "true">
                                                {data.subtitle}
                                            </h1>
                                            <h1 className = "text-5xl sm:text-6xl lg:text-7xl font-bold" data-aos = "zoom-out" data-aos-duration = "500" data-aos-once = "true">
                                                {data.title}
                                            </h1>
                                            <h1 className = "text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold" data-aos = "zoom-out" data-aos-duration = "500" data-aos-once = "true">
                                                {data.title2}
                                            </h1>
                                            <div data-aos = "fade-up" data-aos-offset = "0" data-aos-duration = "500" data-aos-delay = "300">
                                                <Button text = "Comprar ahora" bgColor = "bg-primary" textColor = "text-white" handler = {handleOrderPopup} />
                                            </div>
                                        </div>
                                        {/* Image section */}
                                        <div className = "order-1 sm:order-2">
                                            <div className = "relative z-10" data-aos = "zoom-in" data-aos-once = "true">
                                                <img src = {data.img} alt = "img1" className = "w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto relative z-40" style = {{ filter: 'drop-shadow(-8px 4px 6px rgba(0, 0, 0, 0.4))' }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Hero;