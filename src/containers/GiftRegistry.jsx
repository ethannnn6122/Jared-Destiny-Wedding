import React, { Component } from 'react';
import {Row} from 'antd';
import classes from './GiftRegistry.module.css'

class GiftRegistry extends Component {
    render() {
        return (
            <>
                <div className={classes.centerContainer}>
                    <h1>Gift Registry</h1>
                </div>
            </>
        );
    }
}

export default GiftRegistry;