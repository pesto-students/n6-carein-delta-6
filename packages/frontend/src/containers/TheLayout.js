import React from 'react'
import { Container } from "react-bootstrap";
import {
    TheContent,
    TheHeader,
    TheFooter
} from './index'

const TheLayout = () => {
    return (
        <>

            <div className="c-wrapper">

                <TheHeader />

                <div className="c-body c-main pms-mc-wrapper">
                    <Container fluid>
                        <div clas="pms-content-body">
                            <TheContent />
                        </div>
                    </Container>
                </div>

                <TheFooter />
            </div>
        </>
    )
}

export default TheLayout
