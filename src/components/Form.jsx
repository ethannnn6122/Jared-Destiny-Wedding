import React, { useState } from 'react';
import { Form, Input, Button, Space, Select, Radio } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import axios from 'axios';
import classes from './Form.module.css';
import { useNavigate } from 'react-router-dom';
import ModalCustom from './ModalCustom';

const RSVPForm = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();

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
            navigate("/", { replace: true });
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
            } else {
                console.error("Script Error:", response.data.error);
            }
        } catch (err) {
            console.error('Submission Failed:', err);
            setModalText("Something went wrong. Please try again or contact us directly.");
            toggleModal();
        } finally {
            setSubmitting(false); // Stop loading regardless of success/fail
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

            <Form.List name="inputs">
                {(fields, { add, remove }) => (
                    <>
                        {fields.map(({ key, name, ...restField }) => (
                            <Space key={key} className={classes.guestForm} align="baseline" wrap>
                                <MinusCircleOutlined onClick={() => remove(name)} />
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
                                
                                <Form.Item
                                    {...restField}
                                    label="Preferred Meal"
                                    name={[name, 'meal']}
                                    rules={[{ required: !attendField, message: 'Missing Meal Selection' }]}
                                >
                                    <Radio.Group disabled={attendField}>
                                        <Space vertical>
                                            <Radio value="Chicken">Chicken</Radio>
                                            <Radio value="Steak">Steak</Radio>
                                            <Radio value="Vegetarian">Vegetarian</Radio>
                                        </Space>
                                    </Radio.Group>
                                </Form.Item>

                                <Form.Item 
                                    label="Allergies" 
                                    {...restField} 
                                    name={[name, 'allergies']}
                                >
                                    <Input.TextArea disabled={attendField} placeholder='List any allergies here' />
                                </Form.Item>
                            </Space>
                        ))}

                        <Form.Item>
                            <Button
                                disabled={fields.length >= 3}
                                type="dashed"
                                onClick={() => add()}
                                icon={<PlusOutlined />}
                            >
                                Add Guest
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>

            <Form.Item>
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
            </Form.Item>
        </Form>
    );
};

export default RSVPForm;