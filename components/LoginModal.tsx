import React, { useEffect } from 'react';
import Modal from "@/components/common/Modal";
import LoginComp from "@/components/Login";

interface LoginModalProps {
    show: boolean;
    onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ show, onClose }) => {
    return (
        <Modal show={show} onClose={onClose}>
            <LoginComp />
        </Modal>
    );
};

export default LoginModal;