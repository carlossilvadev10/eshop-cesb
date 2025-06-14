import React from "react";
import { FaCarSide, FaHeadphonesAlt, FaWallet, FaCheckCircle } from "react-icons/fa";

const ServiceData = [
    {
        id: 1,
        icon: <FaCarSide className = "text-4xl md:text-5xl text-primary" />,
        title: "Envío gratis",
        description: "Envío gratis en todos los pedidos.",
        aosDelay: "0",
    },
    {
        id: 2,
        icon: <FaCheckCircle className = "text-4xl md:text-5xl text-primary" />,
        title: "Dinero seguro",
        description: "Garantía de 30 días en todos los productos.",
        aosDelay: "200",
    },
    {
        id: 3,
        icon: <FaWallet className = "text-4xl md:text-5xl text-primary" />,
        title: "Pago seguro",
        description: "Pago seguro con tarjeta de crédito.",
        aosDelay: "400",
    },
    {
        id: 4,
        icon: <FaHeadphonesAlt className = "text-4xl md:text-5xl text-primary" />,
        title: "Soporte en línea 24/7",
        description: "Soporte en línea 24 horas al día, 7 días a la semana.",
        aosDelay: "600",
    },
];

const Services = () => {
    return (
        <section className = "my-14 md:my-24">
            <div className = "container">
                <div className = "grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
                    {
                        ServiceData.map((data) => (
                            <div className = "flex flex-col items-center sm:flex-row gap-4" data-aos = "fade-up" data-aos-delay = {data.aosDelay}>
                                {data.icon}
                                <div className = "">
                                    <h1 className = "lg:text-xl font-bold">
                                        {data.title}
                                    </h1>
                                    <h1 className = "text-gray-400 text-sm">
                                        {data.description}
                                    </h1>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Services;