import React, {Component} from 'react';
import {Row, Button} from 'antd';
import classes from './RsvpContainer.module.css';

//Components
import Form from '../components/Form';

class RsvpContainer extends Component {
    render() {
        return(
            <Row className={classes.rsvpContainer}>
                <div className={classes.titleWrapper}>
                    <h3>RSVP</h3>
                    <p className={classes.subText}>Check out the details page to see the menu options.</p>
                    <Button className={classes.btnClass} type="ghost" href="#details">Details</Button>
                </div>
                <Form /> 
            </Row> 
        )
    }
}

export default RsvpContainer;