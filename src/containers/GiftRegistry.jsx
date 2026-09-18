import React, { Component } from 'react';
import { Card, Row, Col, Button } from 'antd';
import classes from './GiftRegistry.module.css';

class GiftRegistry extends Component {
    render() {
        return (
            <div className={classes.registrySection}>
                <div className={classes.headerWrapper}>
                    <h1 className={classes.heading}>Gift Registry</h1>
                    <p className={classes.subTitle}>Your presence is our greatest present. If you wish to honor us with a gift, please explore our registry below.</p>
                </div>
                <Row className={classes.cardsContainer} justify="center" gutter={[16, 16]}>
                    <Col xs={24} sm={12}>
                        <Card className={classes.registryCard} title="PLACEHOLDER Registry" variant="borderless">
                            <p>Browse our Registry.</p>
                            <Button type="primary" href="https://www.zola.com" target="_blank" className={classes.registryBtn}>
                                View Registry
                            </Button>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12}>
                        <Card className={classes.registryCard} title="Honeymoon Fund" variant="borderless">
                            <p>Help us create unforgettable memories on our dream honeymoon.</p>
                            <Button type="primary" href="#rsvp" className={classes.registryBtn}>
                                Contribute
                            </Button>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default GiftRegistry;