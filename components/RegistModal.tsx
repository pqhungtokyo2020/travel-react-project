import React, { useEffect } from 'react';
import Modal from "@/components/common/Modal";
import RegistComp from "@/components/Regist";

interface RegistModalProps {
    show: boolean;
    onClose: () => void;
}

const LoginModal: React.FC<RegistModalProps> = ({ show, onClose }) => {
    return (
        <Modal show={show} onClose={onClose}>
            <RegistComp />
        </Modal>
    );
};

export default LoginModal;