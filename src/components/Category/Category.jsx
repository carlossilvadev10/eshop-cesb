import React from "react";
import Button from "../Shared/Button";
import Image1 from "../../assets/category/earphone.png";
import Image2 from "../../assets/category/watch.png";
import Image3 from "../../assets/category/macbook.png";

const Category = () => {
    return (
        <div className = "py-8">
            <div className = "container">
                <div className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* First col */}
                    <div className = "py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end" data-aos = "fade-up" data-aos-duration = "500">
                        <div className = "">
                            <div className = "mb-4">
                                <p className = "mb-[2px] text-gray-400">Disfruta</p>
                                <p className = "text-2xl font-semibold mb-[2px]">Tus</p>
                                <p className = "text-4xl xl:text-5xl font-bold opacity-20 mb-4">Earphones</p>
                                <Button text = "Explorar" bgColor = {"bg-primary"} textColor = {"text-white"} />
                            </div>
                        </div>
                        <img src = {Image1} alt = "img1C" className = "w-[320px] absolute bottom-0" data-aos = "fade-up" data-aos-duration = "600" />
                    </div>
                    {/* Second col */}
                    <div className = "py-10 pl-5 bg-gradient-to-br from-brandYellow to-brandYellow/90 text-white rounded-3xl relative h-[320px] flex items-end" data-aos = "fade-up" data-aos-duration = "1000">
                        <div className = "">
                            <div className = "mb-4">
                                <p className = "mb-[2px] text-white">Luce</p>
                                <p className = "text-2xl font-semibold mb-[2px]">Tu</p>
                                <p className = "text-4xl xl:text-5xl font-bold opacity-40 mb-4">Smartwatch</p>
                                <Button text = "Explorar" bgColor = {"bg-white"} textColor = {"text-brandYellow"} />
                            </div>
                        </div>
                        <img src = {Image2} alt = "img2C" className = "w-[320px] absolute -right-16 lg:top-[40px]" data-aos = "fade-up" data-aos-duration = "1100" />
                    </div>
                    {/* Third col */}
                    <div className = "sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-primary to-primary/90 text-white rounded-3xl relative h-[320px] flex items-end" data-aos = "fade-up" data-aos-duration = "1500">
                        <div className = "">
                            <div className = "mb-4">
                                <p className = "mb-[2px] text-white">Potencia</p>
                                <p className = "text-2xl font-semibold mb-[2px]">Tu</p>
                                <p className = "text-4xl xl:text-5xl font-bold opacity-40 mb-4">Laptop</p>
                                <Button text = "Explorar" bgColor = {"bg-white"} textColor = {"text-primary"} />
                            </div>
                        </div>
                        <img src = {Image3} alt = "img3C" className = "w-[250px] absolute top-8 -translate-y-1/2 right-8" data-aos = "fade-up" data-aos-duration = "1600" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category;