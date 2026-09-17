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
        listItems: ['WIP', 'WIP', 'WIP', 'WIP']
    },
    {
        key: '3',
        label: 'WIP',
        listItems: ['WIP', 'WIP', 'WIP', 'WIP']
    },
    {
        key: '4',
        label: 'WIP',
        listItems: ['WIP', 'WIP', 'WIP', 'WIP']
    }
]

class DetailsContainer extends Component {
    render() {
        return (
            <div className={classes.detailsContainer}>
                <div className={classes.bannerImg}>
                    <h1>Wedding Details</h1>
                    <p className={classes.dateTime}>January 22 at ?:00pm</p>
                    <div className={classes.countdownWrapper}>
                        <ClockCount deadline="January 22, 2027" />
                    </div>
                </div>
                <div className={classes.detailsContent}>
                    <Row className={classes.cardsContainer}>
                        <Col>
                            <Card className={classes.optionCard} title="Options" variant="borderless">
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
                </div>
            </div>          
        );
    }
}

export default DetailsContainer;