import React, {Component} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Layout } from 'antd';
import classes from './LayoutNav.module.css';
import {
    MenuOutlined,
    CloseOutlined,
} from '@ant-design/icons';

// Components
import Footer from './Footer';

// Containers
import HomeContainer from '../containers/HomeContainer';
import GiftRegistry from '../containers/GiftRegistry';
import DetailsContainer from '../containers/DetailsContainer';
import RsvpContainer from '../containers/RsvpContainer';

const { Header } = Layout;

class LayoutNav extends Component {
    componentDidMount() {
        AOS.init();
    }

    state = {
        mobileMenuOpen: false,
        deadline: "January 22, 2027"
    };
    
    toggle = () => {
        this.setState({
            mobileMenuOpen: !this.state.mobileMenuOpen,
        });
    };

    closeMobileMenu = () => {
        this.setState({ mobileMenuOpen: false });
    };

    render() {
        return (
            <>
                <Layout>
                    <Layout style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
                        <Header className={classes.siteLayoutBackground}>
                            <div className={classes.headerInner}>
                                {/* <div className={classes.brand}>J&D</div> */}
                                <nav className={classes.navMenu}>
                                    <a href="#home" onClick={this.closeMobileMenu}>Home</a>
                                    <a href="#details" onClick={this.closeMobileMenu}>Details</a>
                                    <a href="#registry" onClick={this.closeMobileMenu}>Registry</a>
                                    <a href="#rsvp" onClick={this.closeMobileMenu}>RSVP</a>
                                </nav>
                                <button className={classes.mobileMenuButton} onClick={this.toggle}>
                                    {React.createElement(this.state.mobileMenuOpen ? CloseOutlined : MenuOutlined)}
                                </button>
                            </div>
                            {this.state.mobileMenuOpen && (
                                <div className={classes.mobileNav}>
                                    <a href="#home" onClick={this.closeMobileMenu}>Home</a>
                                    <a href="#details" onClick={this.closeMobileMenu}>Details</a>
                                    <a href="#registry" onClick={this.closeMobileMenu}>Registry</a>
                                    <a href="#rsvp" onClick={this.closeMobileMenu}>RSVP</a>
                                </div>
                            )}
                        </Header>
                        <div style={{ flex: 1 }}>
                            <main className={classes.mainContent}>
                                <section id="home" data-aos="fade-up" data-aos-duration="1000">
                                    <HomeContainer />
                                </section>
                                <section id="rsvp" data-aos="fade-up" data-aos-duration="1000">
                                    <RsvpContainer />
                                </section>
                                <section id="registry" data-aos="fade-up" data-aos-duration="1000">
                                    <GiftRegistry />
                                </section>
                                <section id="details" data-aos="fade-up" data-aos-duration="1000">
                                    <DetailsContainer />
                                </section>
                            </main>
                        </div>
                    </Layout>
                    <Footer />
                </Layout>
            </>
        );
    }
}

export default LayoutNav;