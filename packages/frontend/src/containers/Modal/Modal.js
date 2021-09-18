import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
const Modals = (props) => {
  return (
    <Modal size="lg" show={props.state} onHide={props.onHide} >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.data}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary"  onClick={props.onHide}>
          Close
        </Button>
        <Button  className="btn btn-blue" variant="primary">Submit</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Modals;
