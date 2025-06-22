import React from "react";
import Button from "../Shared/Button";

const ProductCard = ({ data }) => {
    return (
        <section className = "">
            <div className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
                {/* Card section */}
                {
                    data.map((data) => (
                        <div key = {data.id} className = "group" data-aos = "fade-up" data-aos-delay = {data.aosDelay}>
                            <div className = "relative">
                                <img src = {data.img} alt = "imgPC" className = "h-[180px] w-[260px] object-cover rounded-md" />
                                <div className = "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full text-center flex justify-center items-center backdrop-blur-0 transition-all duration-200 ease-in-out opacity-0 group-hover:backdrop-blur-sm group-hover:opacity-100">
                                    <Button text = "Agregar al carrito" bgColor = "bg-primary" textColor = "text-white" />
                                </div>
                            </div>
                            <div className = "leading-7">
                                <h2 className = "font-semibold">
                                    {data.title}
                                </h2>
                                <h2 className = "font-bold">
                                    ${data.price}
                                </h2>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default ProductCard;