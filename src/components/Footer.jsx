import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const FooterComp = () => {
    return(
        <Footer style={{
            textAlign: "center", 
            background: "#C4C5A0", 
            fontFamily: "Pinyon Script, sans-serif",
        }}>
            Jared & Destiny's Wedding | &copy; 2026 | Designed and Developed by&nbsp;
            <a href="https://milehighcoding.com" target="_blank" rel="noopener noreferrer">
                Mile High Coding 
            </a>
        </Footer>
        
    )
}

export default FooterComp;