import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Products from "./components/Products/Products";
import Blogs from "./components/Blogs/Blogs";
import Partners from "./components/Partners/Partners";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import headphone from "./assets/hero/headphone.png";
import smartwach from "./assets/category/smartwatch.png";

const BannerData = {
    discount: "30% OFF",
    title: "Vibración Única",
    date: "Del 10 de enero hasta 31 de enero",
    image: headphone,
    title2: "Pure Sound Smile",
    title3: "Venta de invierno",
    title4: "Sonríe con estilo y disfruta del mejor sonido con 30% de descuento.",
    bgColor: "#f42c37",
};

const BannerData2 = {
    discount: "50% OFF",
    title: "Horas felices",
    date: "Del 15 de enero hasta 10 de febrero",
    image: smartwach,
    title2: "Smartwatch Pro",
    title3: "Venta de invierno",
    title4: "Lleva la innovación en tu muñeca con hasta un 50% de descuento.",
    bgColor: "#2dcc6f",
};

const App = () => {
    const [orderPopup, setOrderPopup] = React.useState(false);
    const handleOrderPopup = () => {
        setOrderPopup(!orderPopup);
    }

    React.useEffect(() => {
        AOS.init({
            duration: 800,
            easing: "ease-in-sine",
            delay: 100,
            offset: 100,
        })
        AOS.refresh();
    }, []);

    return (
        <div className = "bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
            <Navbar handleOrderPopup = {handleOrderPopup} />
            <Hero handleOrderPopup = {handleOrderPopup} />
            <Category />
            <Category2 />
            <Services />
            <Banner data = {BannerData} />
            <Products />
            <Banner data = {BannerData2} />
            <Blogs />
            <Partners />
            <Footer />
            <Popup orderPopup = {orderPopup} handleOrderPopup = {handleOrderPopup} />
        </div>
    )
}

export default App;