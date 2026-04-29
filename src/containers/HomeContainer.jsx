import React from 'react';
import { Carousel, Button, Card, Row } from 'antd';
import { Link } from 'react-router-dom';

import classes from './HomeContainer.module.css';

const HomeContainer = () => {

    const linkPath = "/rsvp";
    const slides = [
        {
            slideClass: classes.slideOne,
            subTextClass: classes.subTitle,
            headingClass: classes.heading,
            heading: "Destiny & Jared",
            btnClass: classes.btn,
            btnSize: 'large',
            btnText: 'RSVP Now'
        },
        {
            slideClass: classes.slideTwo,
            subTextClass: classes.subTitle,
            headingClass: classes.heading,
            heading: "Destiny & Jared",
            btnClass: classes.btn,
            btnSize: 'large',
            btnText: 'RSVP Now'
        },
        {
            slideClass: classes.slideThree,
            subTextClass: classes.subTitle,
            headingClass: classes.heading,
            heading: "Destiny & Jared",
            btnClass: classes.btn,
            btnSize: 'large',
            btnText: 'RSVP Now'
        },
        {
            slideClass: classes.slideFour,
            subTextClass: classes.subTitle,
            headingClass: classes.heading,
            heading: "Destiny & Jared",
            btnClass: classes.btn,
            btnSize: 'large',
            btnText: 'RSVP Now'
        },
    ];

    return (
        <div>
            <Carousel className={classes.carouselContainer} autoplay effect='fade'>
                {slides.map((item) => (
                    <div 
                        key={item.slideClass} 
                        className={item.slideClass}
                    >
                        <div className={classes.textOverlay}>
                            <h1 className={item.headingClass}>{item.heading}</h1>
                            <p className={item.subTextClass}>WEDDING DATE</p>
                        </div>
                    </div>
                ))}
            </Carousel>
            <Row className={classes.rsvpContainer} justify="center">
                <Link to={linkPath}>
                    <Button className={classes.btn} ghost>
                        RSVP Now
                    </Button>
                </Link>
                <p className={classes.subTitle}>
                    Any questions, please contact us at <a href="mailto:info@DOMAIN.com">info@DOMAIN.com</a>
                </p>
            </Row>
        </div>
    );
};

export default HomeContainer;
