import React from "react";
import Brand1 from "../../assets/brand/br-1.png";
import Brand2 from "../../assets/brand/br-2.png";
import Brand3 from "../../assets/brand/br-3.png";
import Brand4 from "../../assets/brand/br-4.png";
import Brand5 from "../../assets/brand/br-5.png";

const Partners = () => {
    return (
        <section className = "py-8 my-12 md:block bg-gray-200 dark:bg-white/10" data-aos = "zoom-out">
            <div className = "container">
                <div className = "grid grid-cols-5 gap-3 place-items-center opacity-50">
                    <img src = {Brand1} alt = "br-1" className = "w-[80px] dark:invert" />
                    <img src = {Brand2} alt = "br-2" className = "w-[80px] dark:invert" />
                    <img src = {Brand3} alt = "br-3" className = "w-[80px] dark:invert" />
                    <img src = {Brand4} alt = "br-4" className = "w-[80px] dark:invert" />
                    <img src = {Brand5} alt = "br-5" className = "w-[80px] dark:invert" />
                </div>
            </div>
        </section>
    )
}

export default Partners;