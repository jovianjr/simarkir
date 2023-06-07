import { useEffect, useState } from "react";
import { FaTimes } from 'react-icons/fa';

 const Modal = ({
    modalContent,
    modalTrigger,
	  children,
    className,
    modalSize = 'w-[100vw] md:w-[100vw] h-[100vh] -ml-[50vw] -mt-[50vh]',
    triggerModal = () => {},
}) => {


	return (
        <div className={`fixed w-screen transition-opacity duration-200 ease-in-out h-screen z-40  ${modalTrigger ? 'visible opacity-100 block' : 'invisible opacity-0 hidden'}`}>
            <div className={`fixed bg-black w-screen h-screen bg-opacity-50 z-30 cursor-pointer backdrop-blur-sm`} onClick={()  => triggerModal(!modalTrigger)}/>
            <div className={`fixed ${modalSize}  left-1/2 top-1/2 z-50 bg-black bg-opacity-50 ${className}`}>
				<div className={`fixed cursor-pointer ${modalSize} left-1/2 top-1/2`} onClick={()  => triggerModal(!modalTrigger)}/>
				{modalContent}
				{children}
            </div>
        </div>
	);
};

export default Modal;
