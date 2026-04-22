import React, { Component } from 'react';
import { Card, Col, Flex, Row, Tabs } from 'antd';
import classes from './DetailsContainer.module.css';

//Components

const tabItems = [
    {
        key: '1',
        label: 'Chicken Meal',
        mealItem: <div>Chicken</div>,
        listItems: ['Spinach stuffed chicken breast', 'Candied tomatoes', 'Prosciutto', 'Caramelized onion and Boursin cheese sauce']
    },
    {
        key: '2',
        label: 'Steak Meal',
        mealItem: <div>Steak</div>,
        listItems: ['6 oz. Filet', 'Prepared medium', 'Cabernet Demi-Glaze']
    },
    {
        key: '3',
        label: 'Vegetarian Meal',
        mealItem: <div>Vegetarian</div>,
        listItems: ['Mushroom Ravioli', 'Alfredo sauce, Roasted tomatoes', 'Fresh herbs and Truffle oil']
    },
    {
        key: '4',
        label: 'Sides',
        mealItem: <div>Sides</div>,
        listItems: ['Roasted Garlic-herb Fingerling Potatoes', 'Grilled Asparagus']
    }
]

class DetailsContainer extends Component {
    render() {
        return (
            <div>
                <div className={classes.bannerImg}>
                    Wedding Details
                    <p className={classes.dateTime}>November 12 at 4:00pm</p>
                </div>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col span={24}>
                        <Card title="Meal Options" variant="borderless">
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
                    <Col span={24}>
                        <Card title="Location Info" variant="borderless">
                            <iframe title='maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.840046997477!2d-112.33342378506137!3d33.738952041622625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b5eabecc45d6d%3A0xd3ae4c2eb7908809!2sKiva%20Club%20Weddings!5e0!3m2!1sen!2sus!4v1653572373804!5m2!1sen!2sus" style={{ border: '0'}} width="250" height="250" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> 
                        </Card>
                    </Col>
                </Row>
            </div>          
        );
    }
}

export default DetailsContainer;