import React, { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaShoppingCart } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";
import { dropdownLinks, menuLinks } from "../../data/data";
import DarkMode from "./DarkMode";

const NavbarMain = ({ openMenu, handleOrderPopup }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className = {`bg-white dark:bg-gray-900 dark:text-white transition-all duration-200 fixed w-full z-10 ${isScrolled ? "shadow-md" : ""}`}>
            <div className = "py-4">
                <div className = "container flex justify-between items-center">
                    {/* Logo */}
                    <a href = "#" className = "text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl">
                        EShop CESB
                    </a>
                    {/* Menu Items */}
                    <div className = "hidden xl:flex items-center gap-4">
                        <ul className = "flex items-center gap-4">
                            {
                                menuLinks.map((data) => (
                                    <li key = {data.id}>
                                        <a href = {data.link} className = "px-4 font-semibold text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white duration-200">
                                            {data.name}
                                        </a>
                                    </li>
                                ))
                            }
                            {/* Dropdown */}
                            <li className = "relative group cursor-pointer ml-4">
                                <a href = "" className = "flex items-center py-2 gap-1 font-semibold text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white duration-200">
                                    Enlaces rápidos
                                    <span className  = "">
                                        <FaCaretDown className = "group-hover:rotate-180 duration-300" />
                                    </span>
                                </a>
                                {/* Dropdown Links */}
                                <div className = "absolute z-50 hidden group-hover:block w-56 rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white">
                                    <ul className = "space-y-2">
                                        {
                                            dropdownLinks.map((data) => (
                                                <li key = {data.id}>
                                                    <a href = {data.link} className = "block p-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-primary rounded-md font-semibold duration-200">
                                                        {data.name}
                                                    </a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/* Navbar right section */}
                    <div className = "flex items-center gap-4">
                        {/* Search Bar section */}
                        <div className = "relative group hidden sm:block">
                            <input type = "text" className = "search-bar" placeholder = "Buscar" />
                            <IoMdSearch className = "text-xl text-gray-600 dark:text-gray-400 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3 transition-colors duration-200" />
                        </div>
                        {/* Order-button section */}
                        <button className = "relative p-3" onClick = {handleOrderPopup}>
                            <FaShoppingCart className = "text-xl text-gray-600 dark:text-gray-400" />
                            <div className = "w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
                                4
                            </div>
                        </button>
                        {/* Dark mode section */}
                        <DarkMode />
                        {/* Burger menu */}
                        <HiBars3BottomRight className = "w-8 h-8 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200 xl:hidden cursor-pointer" onClick = {openMenu} />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavbarMain;