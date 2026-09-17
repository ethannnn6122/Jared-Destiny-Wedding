import React, { Component } from 'react';
import { Card } from 'antd';
import classes from './FaqContainer.module.css';

class FaqContainer extends Component {
    render() {
        return (
            <div className={classes.faqContainer}>
                <Card className={classes.faqCard} title="Frequently Asked Questions" bordered={false}>
                    <div className={classes.faqItem}>
                        <h3>When is the RSVP deadline?</h3>
                        <p>Please let us know your plans by December 20, 2026.</p>
                    </div>
                    <div className={classes.faqItem}>
                        <h3>Are children welcome?</h3>
                        <p>We love your little ones, but our wedding is an adults-only celebration.</p>
                    </div>
                    <div className={classes.faqItem}>
                        <h3>Is there parking at the venue?</h3>
                        <p>Yes, complimentary parking is available at Boojum Tree Hidden Gardens.</p>
                    </div>
                </Card>
            </div>
        );
    }
}

export default FaqContainer;
