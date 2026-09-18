import React, { Component } from 'react';
import { Card } from 'antd';
import classes from './FaqContainer.module.css';

class FaqContainer extends Component {
    render() {
        return (
            <div className={classes.faqContainer}>
                <Card className={classes.faqCard} title="Frequently Asked Questions" variant="borderless">
                    <div className={classes.faqItem}>
                        <h3>When is the RSVP deadline?</h3>
                        <p>Please let us know your plans by December 20, 2026.</p>
                    </div>
                    <div className={classes.faqItem}>
                        <h3>Are children welcome?</h3>
                        <p>We love your little ones, but our wedding is an adults-only celebration.</p>
                    </div>
                    <div className={classes.faqItem}>
                        <h3>What is the schedule?</h3>
                        <p>PLACEHOLDER: Outdoor Ceremony & Cocktail Hour, & Reception. Dinner indoors. </p>
                    </div>
                    <div className={classes.faqItem}>
                        <h3>What will be served for dinner?</h3>
                        <p>PLACEHOLDER: Description of Entree</p>
                    </div>
                    <div className={classes.faqItem}>
                        <h3>What is the expected attire?</h3>
                        <p>PLACEHOLDER: Description of dress code</p>
                    </div>
                </Card>
            </div>
        );
    }
}

export default FaqContainer;
