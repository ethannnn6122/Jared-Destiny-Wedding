import React from 'react';
import { Button, Row } from 'antd';

import classes from './HomeContainer.module.css';

const HomeContainer = () => {
    return (
        <div className={classes.landingImage}>
            <Row className={classes.centerContainer} justify="center">
                <div className={classes.textOverlay}>
                    <h1 className={classes.heading}>Destiny & Jared</h1>
                    <p className={classes.subTitle}>January 22, 2026</p>
                </div>
            </Row>
            <Row className={classes.centerContainer} justify="center">
                <Button className={classes.btn} type="ghost" href="#rsvp">
                    RSVP Now
                </Button>
            </Row>
        </div>
    );
};

export default HomeContainer;
