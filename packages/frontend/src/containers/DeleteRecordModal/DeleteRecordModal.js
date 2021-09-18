import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import "./DeleteRecordModal.css";

class DeleteRecordModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  openModal = () => this.setState({ showModal: true });
  closeModal = () => this.setState({ showModal: false });

  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.closeModal}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Body>
          <div className="alert-body">
            <h2> Our Team Is On The Way! </h2>
            <p>
              {" "}
              We'll be reaching out on your provide number within less than 1
              min and has also informed emergency contacts.{" "}
            </p>
          </div>
          <div className="alert-footer-box">
            <Button variant="danger" onClick={this.props.closeModal}>
              Dismiss
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}
export default DeleteRecordModal;
