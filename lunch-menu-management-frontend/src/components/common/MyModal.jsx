import { Modal } from 'antd';
import React from 'react';

const MyModal = ({ children, title, isModalOpen, handleOk, handleCancel, footer }) => {
    return (
        <>
            <Modal footer={footer} title={title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                {children}
            </Modal>
        </>
    );
};

export default MyModal;