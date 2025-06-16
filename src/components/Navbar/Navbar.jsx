import React, { useState } from "react";
import NavbarMain from "./NavbarMain";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const openMenu = () => setIsMenuOpen(true);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <>
            <NavbarMain openMenu = {openMenu} />
            <NavbarMobile isMenuOpen = {isMenuOpen} closeMenu = {closeMenu} />
        </>
    );
};

export default Navbar;