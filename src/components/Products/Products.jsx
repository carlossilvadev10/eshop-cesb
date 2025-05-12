import React from "react";
import Heading from "../Shared/Heading";
import ProductCard from "./ProductCard";
import Image1 from "../../assets/product/p-1.jpg";
import Image2 from "../../assets/product/p-2.jpg";
import Image3 from "../../assets/product/p-3.jpg";
import Image4 from "../../assets/product/p-4.jpg";
import Image5 from "../../assets/product/p-5.jpg";
import Image6 from "../../assets/product/p-6.jpg";
import Image7 from "../../assets/product/p-7.jpg";
import Image8 from "../../assets/product/p-8.jpg";

const ProductsData = [
    {
        id: 1,
        img: Image1,
        title: "Audífonos Blackwave",
        price: "120",
        aosDelay: "0",
    },
    {
        id: 2,
        img: Image2,
        title: " Smartwatch RoseGold",
        price: "420",
        aosDelay: "200",
    },
    {
        id: 3,
        img: Image3,
        title: "Audífonos Golden Tune",
        price: "320",
        aosDelay: "400",
    },
    {
        id: 4,
        img: Image4,
        title: "Audífonos Echo Black",
        price: "220",
        aosDelay: "600",
    },
    {
        id: 5,
        img: Image5,
        title: "Audífonos ThunderBass",
        price: "150",
        aosDelay: "0",
    },
    {
        id: 6,
        img: Image6,
        title: "Audífonos DeepBlue Sound",
        price: "250",
        aosDelay: "200",
    },
    {
        id: 7,
        img: Image7,
        title: "Audífonos Studio Pro",
        price: "380",
        aosDelay: "400",
    },
    {
        id: 8,
        img: Image8,
        title: "Audífonos Velvet Sound",
        price: "190",
        aosDelay: "600",
    },
];

const Products = () => {
    return (
        <section className = "scroll-mt-24" id = "shop">
            <div className = "container">
                <div className = "grid">
                    {/* Header section */}
                    <Heading title = "Nuestros productos" subtitle = {"Descubre nuestra selección de productos."} />
                    {/* Body section */}
                    <ProductCard data = {ProductsData} />
                </div>
            </div>
        </section>
    )
}

export default Products;