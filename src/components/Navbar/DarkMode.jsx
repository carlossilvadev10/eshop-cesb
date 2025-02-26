import React from "react";
import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";

const DarkMode = () => {
    const [theme, setTheme] = React.useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
    const element = document.documentElement; // Acceso al elemento HTML

    // Establecer tema en localStorage y elemento HTML
    React.useEffect(() => {
        localStorage.setItem("theme", theme);
        if (theme === "dark") {
            element.classList.add("dark");
            element.classList.remove("light");
        } else {
            element.classList.add("light");
            element.classList.remove("dark");
        }
    }, [theme]);

    return (
        <div className = "relative">
            <img src = {LightButton} alt = "light-button" className = {`w-12 cursor-pointer absolute right-0 z-10 ${theme === "dark" ? "opacity-0" : "opacity-100"} transition-all duration-300`} onClick = {() => setTheme(theme === "dark" ? "light" : "dark")} />
            <img src = {DarkButton} alt = "dark-button" className = {`w-12 cursor-pointer`} onClick = {() => setTheme(theme === "dark" ? "light" : "dark")} />
        </div>
    )
}

export default DarkMode;