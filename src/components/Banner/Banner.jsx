import React from "react";

const Banner = ({ data }) => {
    return (
        <section className = "min-h-[550px] flex justify-center items-center py-12">
            <div className = "container">
                <div className = "grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl" style = {{ backgroundColor: data.bgColor }}>
                    {/* First col */}
                    <div className = "p-6 sm:p-8">
                        <p className = "text-sm mb-1" data-aos = "slide-right">{data.discount}</p>
                        <h1 className = "uppercase text-4xl lg:text-7xl font-bold mb-3" data-aos = "zoom-out">
                            {" "}
                            {data.title}
                        </h1>
                        <p className = "text-sm" data-aos = "fade-up">{data.date}</p>
                    </div>
                    {/* Second col */}
                    <div className = "h-full flex items-center" data-aos = "zoom-in">
                        <img src = {data.image} alt = "imgBanner" className = "scale-125 w-[250px] md:w-[340px] mx-auto drop-shadow-2xl object-cover" />
                    </div>
                    {/* Third col */}
                    <div className = "flex flex-col justify-center gap-4 p-6 sm:p-8">
                        <p className = "font-bold text-xl" data-aos = "zoom-out">{data.title2}</p>
                        <p className = "text-3xl sm:text-5xl font-bold mb-1" data-aos = "fade-up">{data.title3}</p>
                        <p className = "text-sm tracking-wide leading-5" data-aos = "fade-up">{data.title4}</p>
                        <div data-aos = "fade-up" data-aos-offset = "0">
                            <button className = "bg-white py-2 px-4 rounded-full hover:scale-105 duration-300" style = {{ color: data.bgColor }}>
                                Comprar ahora
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;