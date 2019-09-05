
import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from 'react';
import MyCalendar from "./MyCalendar";

function Booking() {
    const [resource, setResource] = useState(false);
    const [show, setShow] = useState(false); 
    const handleClose = () => {
        setShow(false)
        setResource(false);
        console.log(resource);
    };
    const handleShow = () => setShow(true);
    const handleReserve = () => {
        setShow(false);
        setResource(true);
        console.log(resource);
    };
  
    return (
      <>
        <MyCalendar createBooking={handleShow} book={resource}/>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Rezervace</Modal.Title>
          </Modal.Header>
          <Modal.Body>Ak si prajete rezervovat dany termin, kliknite na tlacitko rezervovat</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Zavrit
            </Button>
            <Button variant="primary" onClick={handleReserve}>
              Rezervovat
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default Booking;