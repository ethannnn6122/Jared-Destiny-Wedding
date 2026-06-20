import React from 'react';
import { Layout } from 'antd';

import classes from './Footer.module.css';

const { Footer } = Layout;

const FooterComp = () => {
    return(
        <Footer className={classes.footer}>
            Jared & Destiny's Wedding | &copy; 2026 | Designed and Developed by&nbsp;
            <a href="https://milehighcoding.com" target="_blank" rel="noopener noreferrer">
                Mile High Coding 
            </a>
        </Footer>
        
    )
}

export default FooterComp;