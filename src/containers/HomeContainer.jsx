import React from 'react';
import { Carousel, Button } from 'antd';
import { Link } from 'react-router-dom';

import classes from './HomeContainer.module.css';

const HomeContainer = () => {
    const slides = [
        {
            slideClass: classes.slideOne,
            subTextClass: classes.subTitle,
            headingClass: classes.heading,
            heading: "Destiny & Jared",
            linkPath: "/rsvp",
            btnClass: classes.btn,
            btnSize: 'large',
            btnText: 'RSVP Now',
            imageUrl: "https://images.unsplash.com/photo-1519225421980-715cb0215aed"
        },
        {
            slideClass: classes.slideTwo,
            subTextClass: classes.subTitle,
            headingClass: classes.heading,
            heading: "Destiny & Jared",
            linkPath: "/rsvp",
            btnClass: classes.btn,
            btnSize: 'large',
            btnText: 'RSVP Now',
            imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552"
        },
        {
            slideClass: classes.slideThree,
            subTextClass: classes.subTitle,
            headingClass: classes.heading,
            heading: "Destiny & Jared",
            linkPath: "/rsvp",
            btnClass: classes.btn,
            btnSize: 'large',
            btnText: 'RSVP Now',
            imageUrl: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8"
        },
        {
            slideClass: classes.slideFour,
            subTextClass: classes.subTitle,
            headingClass: classes.heading,
            heading: "Destiny & Jared",
            linkPath: "/rsvp",
            btnClass: classes.btn,
            btnSize: 'large',
            btnText: 'RSVP Now',
            imageUrl: "https://images.unsplash.com/photo-1510076857177-7470076d4098"
        },
    ];

    return (
        <div className={classes.carouselContainer}>
            <Carousel autoplay effect='fade'>
                {slides.map((item) => (
                    <div 
                        key={item.slideClass} 
                        className={item.slideClass}
                        style={{ backgroundImage: `url(${item.imageUrl})` }}
                    >
                        <div className={classes.textOverlay}>
                            <h1 className={item.headingClass}>{item.heading}</h1>
                            <p className={item.subTextClass}>WEDDING DATE at 4:00pm</p>
                            <Link to={item.linkPath}>
                                <Button className={item.btnClass} size={item.btnSize} ghost>
                                    {item.btnText}
                                </Button>
                            </Link>
                            <p className={item.subTextClass}>
                                Any questions, please contact us at <a href="mailto:info@DOMAIN.com">info@DOMAIN.com</a>
                            </p>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default HomeContainer;
