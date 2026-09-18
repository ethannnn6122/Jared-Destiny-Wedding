import React, { Component } from 'react';
import { Row, Button, Modal } from 'antd';
import classes from './RsvpContainer.module.css';

// Components
import Form from '../components/Form';

class RsvpContainer extends Component {
    state = {
        isModalVisible: false,
    };

    showModal = () => {
        this.setState({ isModalVisible: true });
    };

    handleCancel = () => {
        this.setState({ isModalVisible: false });
    };

    render() {
        return (
            <Row className={classes.rsvpContainer}>
                <div className={classes.titleWrapper}>
                    <h1>RSVP</h1>
                    <p className={classes.subText}>We would love to celebrate with you! Please click below to RSVP.</p>
                    <div className={classes.buttonGroup}>
                        <Button className={classes.btnClass} type="primary" onClick={this.showModal}>
                            RSVP Now
                        </Button>
                        <Button className={classes.btnClassSecondary} type="ghost" href="#details">
                            Details
                        </Button>
                    </div>
                </div>

                <Modal
                    title="RSVP for Wedding"
                    open={this.state.isModalVisible}
                    onCancel={this.handleCancel}
                    footer={null}
                    destroyOnHidden
                    width={700}
                    className={classes.rsvpModal}
                >
                    <Form />
                </Modal>
            </Row>
        );
    }
}

export default RsvpContainer;
