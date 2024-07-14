import React, { ReactNode, useEffect } from 'react';

interface ModalProps {
    show: boolean;
    onClose: () => void;
    children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, children }) => {
    useEffect(() => {
        const handleShow = () => {
            const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = `${scrollBarWidth}px`;
            const mainNav = document.getElementById("main-nav");
            if (mainNav != null) {
                mainNav.style.paddingRight = `${scrollBarWidth}px`;
            }
        };

        const handleHide = () => {
            document.body.style.overflow = 'auto';
            document.body.style.paddingRight = '0px';
            const mainNav = document.getElementById("main-nav");
            if (mainNav != null) {
                mainNav.style.paddingRight = `0px`;
            }
        };

        if (show) {
            handleShow();
        } else {
            handleHide();
        }

        return () => {
            handleHide();
        };
    }, [show]);
    return (
        <div className={`modal-overlay ${show ? 'show' : ''}`}>
            <div className={`modal-content ${show ? 'show' : ''} light-cyan-bg rounded-2xl`}>
                {children}
                <button className="close-button" onClick={onClose}>
                    <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <line x1="18" y1="6" x2="6" y2="18" />  <line x1="6" y1="6" x2="18" y2="18" /></svg>
                </button>
            </div>
        </div>
    );
};
export default Modal;