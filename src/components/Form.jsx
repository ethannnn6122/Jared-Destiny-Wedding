import React, { useState } from 'react';
import { Form, Input, Button, Space, Select, Radio } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import axios from 'axios';
import classes from './Form.module.css';
import ModalCustom from './ModalCustom';

const RSVPForm = () => {
    const [form] = Form.useForm();

    // Modal & Loading State
    const [modalVis, setModalVis] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Thank You!');
    const [attendField, setField] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const toggleModal = () => setModalVis(!modalVis);

    const handleOk = () => {
        setModalText('You will now be redirected to the home page.');
        setConfirmLoading(true);
        setTimeout(() => {
            window.location.hash = '#home';
            setModalVis(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const onSubmit = async (formData) => {
        setSubmitting(true);
        try {
            // Combine form data with the current date before sending
            const payload = {
                ...formData,
                currentDate: new Date().toLocaleString(),
            };

            console.log("Submitting Payload:", payload);

            const GOOGLE_SCRIPT_URL = import.meta.env.VITE_API_WEBAPP_URL;

            const response = await axios.post(GOOGLE_SCRIPT_URL, JSON.stringify(payload), {
                headers: {
                    'Content-Type': 'text/plain;charset=utf-8',
                },
            });

            if (response.data.result === 'success') {
                setModalText("We've received your RSVP. We can't wait to see you!");
                toggleModal();
                form.resetFields();
            } else {
                console.error("Script Error:", response.data.error);
            }
        } catch (err) {
            console.error('Submission Failed:', err);
            setModalText("Something went wrong. Please try again or contact us directly.");
            toggleModal();
        } finally {
            setSubmitting(false);
        }
    };

    const onAttenChange = (value) => {
        setField(value === 'no');
    };

    return (
        <Form
            className={classes.formWrapper}
            form={form}
            name="rsvp_form"
            layout='vertical'
            onFinish={onSubmit}
            // Initialize the form with one guest field automatically if you want
            initialValues={{ inputs: [{}] }}
        >
            <Form.Item
                label="Attending?"
                name="attendance"
                rules={[{ required: true, message: 'Missing attendance' }]}
            >
                <Select placeholder="Select Yes or No" onChange={onAttenChange}>
                    <Select.Option value="yes">Yes</Select.Option>
                    <Select.Option value="no">No</Select.Option>
                </Select>
            </Form.Item>

            <Form.Item
                label="Contact Email"
                name="email"
                rules={[
                    { required: true, message: 'Please input your email!' },
                    { type: 'email', message: 'Invalid email address' }
                ]}
            >
                <Input placeholder='Type a contact email address.' />
            </Form.Item>

            <Form.Item
                rules={[
                    {
                        validator: (_, inputs) => {
                            if (!inputs || inputs.length === 0) {
                                return Promise.reject('At least one guest with first and last name is required');
                            }
                            const hasValidGuest = inputs.some(guest => guest?.first && guest?.last);
                            if (!hasValidGuest) {
                                return Promise.reject('At least one guest with first and last name is required');
                            }
                            return Promise.resolve();
                        }
                    }
                ]}
                name="inputs"
            >
                <Form.List name="inputs">
                    {(fields, { add, remove }) => (
                        <>
                            {fields.map(({ key, name, ...restField }) => (
                                <div key={key} className={classes.guestForm}>
                                    <MinusCircleOutlined onClick={() => remove(name)} />
                                    <Space align="baseline" wrap>
                                        <Form.Item
                                            {...restField}
                                            label="First Name"
                                            name={[name, 'first']}
                                            rules={[{ required: true, message: 'Missing first name' }]}
                                        >
                                            <Input placeholder="First Name" />
                                        </Form.Item>
                                        <Form.Item
                                            {...restField}
                                            label="Last Name"
                                            name={[name, 'last']}
                                            rules={[{ required: true, message: 'Missing last name' }]}
                                        >
                                            <Input placeholder="Last Name" />
                                        </Form.Item>
                                    </Space>
                                </div>
                            ))}
                            <Space className={classes.btns}>
                                <Button
                                    disabled={fields.length >= 2}
                                    onClick={() => add()}
                                    icon={<PlusOutlined />}
                                >Add Guest</Button>
                                <Button type="primary" htmlType="submit" loading={submitting}>
                                    Submit RSVP
                                </Button>
                                <ModalCustom
                                    isOpen={modalVis}
                                    toggle={toggleModal}
                                    confirmLoading={confirmLoading}
                                    modalText={modalText}
                                    handleOk={handleOk}
                                    handleCancel={() => setModalVis(false)}
                                />
                            </Space>
                        </>
                    )}
                </Form.List>
            </Form.Item>
        </Form>
    );
};

export default RSVPForm;
