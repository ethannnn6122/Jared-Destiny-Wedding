import React, { Component } from 'react';
import { Card, Col, Flex, Row, Tabs } from 'antd';
import ClockCount from '../components/ClockCount';
import classes from './DetailsContainer.module.css';

const tabItems = [
    {
        key: '1',
        label: 'Dinner',
        listItems: ['WIP', 'WIP', 'WIP', 'WIP']
    },
    {
        key: '2',
        label: 'WIP',
        listItems: ['WIP', 'WIP', 'WIP']
    },
    {
        key: '3',
        label: 'WIP',
        listItems: ['WIP', 'WIP', 'WIP']
    },
    {
        key: '4',
        label: 'WIP',
        listItems: ['WIP', 'WIP', 'WIP']
    }
]

class DetailsContainer extends Component {
    render() {
        return (
            <div className={classes.detailsContainer}>
                <div className={classes.bannerImg}>
                    Wedding Details
                    <p className={classes.dateTime}>January 22 at ?:00pm</p>
                </div>
                <div className={classes.detailsContent}>
                    <Row className={classes.cardsContainer}>
                        <Col span={24} className={classes.venueCard}>
                            <Card title="Options" variant="borderless">
                                <Tabs 
                                    tabPlacement='left' 
                                    items={tabItems.map((item) => ({
                                        key: item.key,
                                        label: item.label,
                                        children: (
                                            <Flex vertical gap="middle">
                                                {item.listItems.map((listItem, index) => (
                                                    <div key={index} className={classes.listItemStyles}>
                                                        {listItem}
                                                    </div>
                                                ))}
                                            </Flex>
                                        )
                                    }))} 
                                />                   
                            </Card>
                        </Col> 
                    </Row>
                    <div className={classes.countdownWrapper}>
                        <ClockCount deadline="January 22, 2027" />
                    </div>
                    <Row className={classes.cardsContainer}>
                        <Card title="Wedding Venue" className={classes.venueCard}>
                            <div className={classes.iframeWrapper}>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.9649418484732!2d-112.0058846!3d33.63215099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b7183e187cdeb%3A0xa89f219ede6eb957!2sBoojum%20Tree%20Hidden%20Gardens!5e0!3m2!1sen!2sus!4v1777435399408!5m2!1sen!2sus" loading="lazy"></iframe>
                            </div>
                            <p>16026 N 36th St, Phoenix, AZ 85032</p>
                        </Card>
                    </Row>
                </div>
            </div>          
        );
    }
}

export default DetailsContainer;