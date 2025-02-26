import React from "react";
import Button from "../Shared/Button";
import Image1 from "../../assets/category/gaming.png";
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets/category/speaker.png";

const Category2 = () => {
    return (
        <div className = "py-8">
            <div className = "container">
                <div className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* First col */}
                    <div className = "sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90 to-gray-100 text-white rounded-3xl relative h-[320px] flex items-end" data-aos = "fade-up" data-aos-duration = "500">
                        <div className = "">
                            <div className = "mb-4">
                                <p className = "mb-[2px] text-white">Explora</p>
                                <p className = "text-2xl font-semibold mb-[2px]">Tu</p>
                                <p className = "text-4xl xl:text-5xl font-bold opacity-40 mb-4">Consola</p>
                                <Button text = "Explorar" bgColor = {"bg-primary"} textColor = {"text-white"} />
                            </div>
                        </div>
                        <img src = {Image1} alt = "img1C2" className = "w-[250px] absolute top-10 -translate-y-1/2 right-8" data-aos = "fade-up" data-aos-duration = "600" />
                    </div>
                    {/* Second col */}
                    <div className = "py-10 pl-5 bg-gradient-to-br from-brandGreen/90 to-brandGreen/90 text-white rounded-3xl relative h-[320px] flex items-end" data-aos = "fade-up" data-aos-duration = "1000">
                        <div className = "">
                            <div className = "mb-4">
                                <p className = "mb-[2px] text-white">Siente</p>
                                <p className = "text-2xl font-semibold mb-[2px]">Tus</p>
                                <p className = "text-4xl xl:text-5xl font-bold opacity-20 mb-4">Lentes VR</p>
                                <Button text = "Explorar" bgColor = {"bg-white"} textColor = {"text-brandGreen"} />
                            </div>
                        </div>
                        <img src = {Image2} alt = "img2C2" className = "w-[320px] absolute bottom-0 right-0" data-aos = "fade-up" data-aos-duration = "1100" />
                    </div>
                    {/* Third col */}
                    <div className = "py-10 pl-5 bg-gradient-to-br from-brandBlue to-brandBlue/90 text-white rounded-3xl relative h-[320px] flex items-end" data-aos = "fade-up" data-aos-duration = "1500">
                        <div className = "">
                            <div className = "mb-4">
                                <p className = "mb-[2px] text-white">Escucha</p>
                                <p className = "text-2xl font-semibold mb-[2px]">Tu</p>
                                <p className = "text-4xl xl:text-5xl font-bold opacity-40 mb-4">Altavoz</p>
                                <Button text = "Explorar" bgColor = {"bg-white"} textColor = {"text-brandBlue"} />
                            </div>
                        </div>
                        <img src = {Image3} alt = "img3C2" className = "w-[200px] absolute bottom-4 right-0" data-aos = "fade-up" data-aos-duration = "1600" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category2;