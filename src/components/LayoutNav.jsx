import React, {Component} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Col, Layout, Row, Button, Modal } from 'antd';
import classes from './LayoutNav.module.css';
import {
    MenuOutlined,
    CloseOutlined,
} from '@ant-design/icons';

// Components
import Footer from './Footer';
import Form from './Form';

// Containers
import GiftRegistry from '../containers/GiftRegistry';
import DetailsContainer from '../containers/DetailsContainer';
import FaqContainer from '../containers/FaqContainer';
import jd1_2 from '../assets/JD1-2.jpg';
import jd5 from '../assets/JD5.jpg';
import jd2 from '../assets/JD2.jpg';
import ClockCount from './ClockCount';

const { Header } = Layout;

class LayoutNav extends Component {
    state = {
        mobileMenuOpen: false,
        deadline: "January 22, 2027",
        scrolled: false,
        isModalVisible: false
    };

    componentDidMount() {
        AOS.init();
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if (window.scrollY > 50) {
            this.setState({ scrolled: true });
        } else {
            this.setState({ scrolled: false });
        }
    };
    
    toggle = () => {
        this.setState({
            mobileMenuOpen: !this.state.mobileMenuOpen,
        });
    };

    closeMobileMenu = () => {
        this.setState({ mobileMenuOpen: false });
    };

    showModal = () => {
        this.setState({ isModalVisible: true });
    };

    handleCancel = () => {
        this.setState({ isModalVisible: false });
    };

    render() {
        return (
            <>
                <Layout>
                    <Layout style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
                        <div className={classes.heroSection}>
                            <Header className={`${classes.siteLayoutBackground} ${this.state.scrolled ? classes.siteLayoutScrolled : ''}`}>
                                <div className={classes.headerInner}>
                                    <nav className={classes.navMenu}>
                                        {/* <a href="#home" onClick={this.closeMobileMenu}>Home</a> */}
                                        <a href="#faq" onClick={this.closeMobileMenu}>FAQ</a>
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
                                        {/* <a href="#home" onClick={this.closeMobileMenu}>Home</a> */}
                                        <a href="#faq" onClick={this.closeMobileMenu}>FAQ</a>
                                        <a href="#details" onClick={this.closeMobileMenu}>Details</a>
                                        <a href="#registry" onClick={this.closeMobileMenu}>Registry</a>
                                        <a href="#rsvp" onClick={this.closeMobileMenu}>RSVP</a>
                                    </div>
                                )}
                            </Header>
                            <div className={classes.homeOverlay}>
                                <div className={classes.heading}>
                                    <span className={classes.destiny}>Destiny</span>
                                    <span className={classes.ampersand}>and</span>
                                    <span className={classes.jared}>Jared</span>
                                </div>
                            </div>
                        </div>
                        <div style={{ flex: 1 }}>
                            <main className={classes.mainContent}>
                                {/* Row 1: Two columns - Left: JD1-2.jpg, Right: Location/Date Time & RSVP Button */}
                                <section id="rsvp" className={classes.rowSection} data-aos="fade-up" data-aos-duration="1000">
                                    <Row gutter={[32, 32]} align="middle" justify="center" className={classes.rowOne}>
                                        <Col xs={24} md={12} className={classes.imageCol}>
                                            <div className={classes.imgWrapper}>
                                                <img src={jd1_2} alt="Destiny and Jared" className={classes.coupleImg} />
                                            </div>
                                        </Col>
                                        <Col xs={24} md={12} className={classes.infoCol}>
                                            <div className={classes.infoWrapper}>
                                                <h2>Join Us</h2>
                                                <p className={classes.locationText}>Boojum Tree Hidden Gardens</p>
                                                <p className={classes.dateText}>January 22, 2027</p>
                                                <Button type="primary" size="large" onClick={this.showModal} className={classes.rsvpBtn}>
                                                    RSVP Now
                                                </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </section>
                                {/* Row 2 */}
                                <section id="faq" className={classes.faqRowSection} data-aos="fade-up" data-aos-duration="1000">
                                    <Row justify="center" align="stretch" className={classes.rowTwo} style={{ height: '100%' }}>
                                        <Col xs={24} sm={22} md={18} lg={14} style={{ display: 'flex', flexDirection: 'column' }}>
                                            <FaqContainer />
                                        </Col>
                                    </Row>
                                </section>

                                {/* Row 3: two columns. Left col Registry right col image: JD5.jpg */}
                                <section id="registry" className={classes.rowSection} data-aos="fade-up" data-aos-duration="1000">
                                    <GiftRegistry />
                                </section>

                                {/* Row 4: one centered col with JD2.jpg background image and the wedding countdown going across in large font */}
                                <section id="details" className={classes.rowSection} data-aos="fade-up" data-aos-duration="1000">
                                    <DetailsContainer />
                                </section>

                                <Modal
                                    title="RSVP for Wedding"
                                    open={this.state.isModalVisible}
                                    onCancel={this.handleCancel}
                                    footer={null}
                                    destroyOnClose
                                    width={700}
                                >
                                    <Form />
                                </Modal>
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
