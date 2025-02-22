import React from "react";
import Button from "../Shared/Button";
import { IoCloseOutline } from "react-icons/io5";

const Popup = ({ orderPopup, handleOrderPopup }) => {
    return (
        <>
            {
                orderPopup && (
                    <div className = "">
                        <div className = "h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
                            <div className = "w-[300px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 rounded-xl">
                                {/* Header section */}
                                <div className = "flex items-center justify-between">
                                    <h1 className = "">
                                        Ordenar ahora
                                    </h1>
                                    <div className = "">
                                        <IoCloseOutline className = "text-2xl cursor-pointer" onClick = {handleOrderPopup} />
                                    </div>
                                </div>
                                {/* Form section */}
                                <div className = "mt-4">
                                    <input type = "text" className = "form-input" name = "txtNombre" id = "txtNombre" placeholder = "Nombres" />
                                    <input type = "text" className = "form-input" name = "txtApellido" id = "txtApellido" placeholder = "Apellidos" />
                                    <input type = "email" className = "form-input" name = "txtEmail" id = "txtEmail" placeholder = "Email" />
                                    <input type = "text" className = "form-input" name = "txtDirección" id = "txtDirección" placeholder = "Dirección" />
                                    <div className = "flex justify-center">
                                        <Button text = "Ordenar ahora" bgColor = {"bg-primary"} textColor = {"text-white"} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Popup