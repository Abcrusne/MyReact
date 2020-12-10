import React, { useState } from 'react';

import { Button, Modal } from 'react-bootstrap';

const Delete = ({ item, deletItemFromCart, children }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="danger" className="mt-3" onClick={handleShow}></Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Pašalinti iš krepšelio</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              handleClose();
              deletItemFromCart(item.id);
            }}
          >
            Pašalinti
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Delete;
