import React, { Component, useState } from 'react';
import { Col, Row, Card, Button, Modal, ListGroup, ListGroupItem } from 'react-bootstrap';

const MarketListsTable = ({ items, onTaken }) => {
    return (
      <Row className='g-3'>
        {items.map((item, idx) =>
          <Col xs="12" sm="6" md lg className='d-flex'>
            <ItemCard item={item} onTaken={onTaken} idx={idx} />
          </Col>)}
      </Row>
    )
  }



// Information card for each item
const ItemCard = (props) => {
  const { item, onTaken, idx } = props;

  // Set states and get a handle to state change callbacks
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card onClick={handleShow} className='info-card'>
        <Card.Img variant="top" src={item.imgLink} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            {item.itemDescription.length > 100 ? item.desc.substring(0, 100) + '...' : item.itemDescription}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Location: {item.location}</ListGroupItem>
          <ListGroupItem>Time: {item.time}</ListGroupItem>
        </ListGroup>
        <Card.Footer style={{ backgroundColor: 'white' }}>
          <Button variant='none' className='take-it-button' onClick={() => onTaken(idx)}>Take it</Button>
        </Card.Footer>
      </Card>


      {/* Note: Modal is a controlled component, so we need to set the state of show to false when the modal is closed
      CSS matching is not working for some reason for item within <Modal /> */}

      <Modal show={show} onHide={handleClose} size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          <Modal.Title>{item.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><b>Posted by: {item.user} </b></p>
          <p><b>Quantity: {item.quantity} </b></p>
          <p><b>Description: </b> <span>{item.itemDescription}</span></p>
          <p><b>Location: </b> <span>{item.location}</span></p>
          <p><b>Time:</b> <span>{item.time}</span></p>
        </Modal.Body>
        <Modal.Footer>
          <Button className='cancel-modal-button' variant="none" onClick={
            (_) => {
              handleClose();
            }} >
            Cancel
          </Button>
          <Button className='take-it-modal-button' variant="none" onClick={
            (_) => {
              handleClose();
              onTaken(idx);
            }}>
            Take
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )

}

export default MarketListsTable;