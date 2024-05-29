import { Modal } from 'antd';
import React from 'react';

const MyModal = ({ children, title, isModalOpen, handleOk, handleCancel }) => {
    return (
        <>
            <Modal title={title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                {children}
            </Modal>
        </>
    );
};

export default MyModal;