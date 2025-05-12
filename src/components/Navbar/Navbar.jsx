import React, { useEffect, useState } from "react";
import DarkMode from "./DarkMode";
import { IoMdSearch } from "react-icons/io";
import { FaShoppingCart, FaCaretDown } from "react-icons/fa";

const MenuLinks = [
    {
        id: 1,
        name: "Inicio",
        link: "/#",
    },
    {
        id: 2,
        name: "Tienda",
        link: "/#shop",
    },
    {
        id: 3,
        name: "Sobre nosotros",
        link: "/#about-us",
    },
    {
        id: 4,
        name: "Blogs",
        link: "/#blog",
    },
];

const DropdownLinks = [
    {
        id: 1,
        name: "Productos en tendencia",
        link: "/#",
    },
    {
        id: 2,
        name: "Más vendidos",
        link: "/#",
    },
    {
        id: 3,
        name: "Mejor valorados",
        link: "/#",
    },
];

const Navbar = ({ handleOrderPopup }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className = {`bg-white dark:bg-gray-900 dark:text-white duration-200 fixed w-full z-10 ${isScrolled ? "shadow-md" : ""}`}>
            <div className = "py-4">
                <div className = "container flex justify-between items-center">
                    {/* Logo and Links section */}
                    <div className = "flex items-center gap-4">
                        <a href = "#" className = "text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl">
                            EShop CESB
                        </a>
                        {/* Menu Items */}
                        <div className = "hidden lg:block">
                            <ul className = "flex items-center gap-4">
                                {
                                    MenuLinks.map((data, index) => (
                                        <li key = {index}>
                                            <a href = {data.link} className = "inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200">{data.name}</a>
                                        </li>
                                    ))
                                }
                                {/* Dropdown */}
                                <li className = "relative cursor-pointer group">
                                    <a href = "" className = "flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2">
                                        Enlaces rápidos
                                        <span>
                                            <FaCaretDown className = "group-hover:rotate-180 duration-300" />
                                        </span>
                                    </a>
                                    {/* Dropdown Links */}
                                    <div className = "absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white">
                                        <ul className = "space-y-2">
                                            {
                                                DropdownLinks.map((data, index) => (
                                                    <li>
                                                        <a href = {data.link} className = "text-gray-500 hover:text-black dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold">{data.name}</a>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Navbar right section */}
                    <div className = "flex justify-between items-center gap-4">
                        {/* Search Bar section */}
                        <div className = "relative group hidden sm:block">
                            <input type = "text" className = "search-bar" name = "search-bar" id = "search-bar" placeholder = "Buscar" />
                            <IoMdSearch className = "text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
                        </div>
                        {/* Order-button section */}
                        <button className = "relative p-3" onClick = {handleOrderPopup}>
                            <FaShoppingCart className = "text-xl text-gray-600 dark:text-gray-400" />
                            <div className = "w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
                                4
                            </div>
                        </button>
                        {/* Dark Mode section */}
                        <div className = "">
                            <DarkMode />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;