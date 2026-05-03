import React, { Component } from 'react';
import {Row} from 'antd';
import classes from './GiftRegistry.module.css'

class GiftRegistry extends Component {
    render() {
        return (
            <Row className={classes.giftContainer}>
                <div className={classes.centerContainer}>
                    <h1>Gift Registry</h1>
                </div>
            </Row>
        );
    }
}

export default GiftRegistry;