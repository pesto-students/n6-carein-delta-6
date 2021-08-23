import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
const Modals = ({ state = false, handleSubmit, classNames, onHide, title, data  }) => {
  return (
    <Modal size="lg" show={state} onHide={onHide} className={classNames}>
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {data}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary"  onClick={onHide}>
          Close
        </Button>
        <Button onClick={handleSubmit} className="btn btn-blue" variant="primary">Submit</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Modals;
