import React, { Component } from "react";
import { Container } from "react-bootstrap";
import './Footer.css';
class Footer extends Component {
    render() {
        return (
            <>
                <div className="pms-footer">
                    <Container fluid>
                        <div className="pms-footer-wrap">
                            <div className="pms-footer-copyright">© 2021 All Rights Reserved.</div>
                        </div>
                    </Container>
                </div>
            </>

        );
    }
}
export default Footer;