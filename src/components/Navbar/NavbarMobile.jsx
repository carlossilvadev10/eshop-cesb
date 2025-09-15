import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { FaCaretDown } from "react-icons/fa";
import { dropdownLinks, menuLinks } from "../../data/data";

const NavbarMobile = ({ isMenuOpen, closeMenu }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const navOpen = isMenuOpen ? "translate-x-0" : "-translate-x-full";

    return (
        <div className = "xl:hidden">
            {/* Overlay */}
            <div className = {`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[1002] bg-black opacity-70 w-full h-screen`} onClick = {closeMenu}/>
            {/* Sidebar */}
            <div className = {`fixed ${navOpen} top-0 left-0 z-[1050] w-[80%] sm:w-[60%] h-full bg-white dark:bg-gray-900 text-gray-800 dark:text-white flex flex-col justify-center space-y-6 transition-all duration-500 delay-300 px-8 py-12`}>
                {/* Close Button */}
                <CgClose className = "absolute top-[2rem] right-[1.5rem] sm:w-8 sm:h-8 w-6 h-6 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary cursor-pointer duration-200" onClick = {closeMenu} />
                {/* Menu Links */}
                {
                    menuLinks.map((data) => (
                        <a key = {data.id}  href = {data.link} className = "text-[20px] sm:text-[30px] font-semibold text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white duration-200" onClick = {closeMenu}>
                            <span className = "inline-block border-b-[2px] border-gray-300 pb-1">
                                {data.name}
                            </span>
                        </a>
                    ))
                }
                {/* Dropdown */}
                <div className = "">
                    <button className = "w-full flex items-center justify-between text-[20px] sm:text-[30px] font-semibold pb-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white duration-200" onClick = {() => setShowDropdown(!showDropdown)}>
                        <span className = "inline-block border-b-[2px] border-gray-300 pb-1">
                            Enlaces rápidos
                        </span>
                        <FaCaretDown className = {`transition-transform duration-300 ${showDropdown ? "rotate-180" : ""}`} />
                    </button>
                    {
                        showDropdown && (
                            <div className = "flex flex-col space-y-3 mt-2 pl-2 ">
                                {
                                    dropdownLinks.map((data) => (
                                        <a key = {data.id} href = {data.link} className = "text-[20px] sm:text-[30px] block p-2 text-gray-500 hover:text-black dark:hover:text-white hover:bg-primary rounded-md font-semibold duration-200" onClick = {closeMenu}>
                                            {data.name}
                                        </a>
                                    ))
                                }
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default NavbarMobile;