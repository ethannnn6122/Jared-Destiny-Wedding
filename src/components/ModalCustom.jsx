import { Modal, Button } from 'antd';
import React from 'react';

const ModalCustom = ({ isOpen, toggle, handleOk, confirmLoading, modalText }) => {
    return (
        <Modal
            title="RSVP Confirmation"
            open={isOpen} 
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={toggle}
            footer={[
                <Button key="back" type="primary" onClick={handleOk}>
                    Return Home
                </Button>
            ]}
        >
            <p>{modalText}</p>
        </Modal>
    );
};

export default ModalCustom;