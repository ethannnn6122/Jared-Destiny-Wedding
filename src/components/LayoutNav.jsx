import React, {Component} from 'react';
import { Layout } from 'antd';
import { Routes, Route } from 'react-router-dom';
import classes from './LayoutNav.module.css';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';

//Components
import NavSider from './NavSider';
import Footer from './Footer';
import ClockCount from "./ClockCount";

// Containers
import HomeContainer from '../containers/HomeContainer';
import GiftRegistry from '../containers/GiftRegistry';
import DetailsContainer from '../containers/DetailsContainer';
import RsvpContainer from '../containers/RsvpContainer';

const { Header } = Layout;

class LayoutNav extends Component {
    state = {
        collapsed: false,
        deadline: "January 22, 2027"
    };
    
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    onFinish = () => {
        console.log("Wedding Day!!");
    };

    render() {
        return (
            <>
                <Layout>
                    <NavSider isCollapsed={this.state.collapsed}/>
                    <Layout style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
                        <Header className={classes.siteLayoutBackground}>
                            {React.createElement(!this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: classes.trigger,
                            onClick: this.toggle,
                            })}
                            <ClockCount className={classes.countdown} deadline={this.state.deadline} />
                        </Header>
                        <div style={{ flex: 1 }}>
                            <Routes>
                                <Route path="/" element={<HomeContainer />}/>
                                <Route disabled path="/rsvp" element={<RsvpContainer />}/>
                                <Route path="/registry" element={<GiftRegistry />}/>
                                <Route path="/details" element={<DetailsContainer />}/>
                            </Routes>
                        </div>
                        <Footer />
                    </Layout>
			    </Layout>
            </>
        );
    }
}

export default LayoutNav;