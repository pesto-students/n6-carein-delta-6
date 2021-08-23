import React, { Component } from 'react';
import { Modal, Button } from "react-bootstrap";
import './DeleteRecordModal.css';

class DeleteRecordModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false
        }
    }

    openModal = () => this.setState({ showModal: true });
    closeModal = () => this.setState({ showModal: false });

    render() {

        return (
            <Modal
                show={this.state.showModal}
                onHide={this.closeModal}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Body>
                    <div className="alert-body">
                        <div className="alert-icon">
                            <i className="flaticon-close"></i>
                        </div>
                        <h2> Are you sure? </h2>
                        <p> Do you really want to delete these records? This process cannot be undone. </p>
                    </div>
                    <div className="alert-footer-box">
                        <Button variant="secondary" onClick={this.closeModal}>Cancel</Button>
                        <Button variant="danger" className="btn"> Delete </Button>
                    </div>
                </Modal.Body>
            </Modal>
        )
    }
}
export default DeleteRecordModal;