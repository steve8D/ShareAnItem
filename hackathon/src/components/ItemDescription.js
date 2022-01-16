import React, {Component, useState} from 'react';
import {Container, Col, Row, Card, Button, Modal} from 'react-bootstrap';

class ItemDescription extends Component{
    render(){
        const {items, removeItem} = this.props;
        return(
            <Container>
                <Row md={4} className="g-4">
                {items.map((item, idx) => <ItemCard item = {item} removeItem = {removeItem} idx = {idx}/> )}
            </Row>
            </Container>
        )
    }

}

const ItemCard = (props) => {
    const {item, removeItem, idx} = props;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Col>
        <Card>
            <Card.Img variant="top" src = {item.imgLink}/>
            <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
                    {item.desc.length > 100 ? item.desc.substring(0, 100) + '...' : item.desc}
            </Card.Text>
            <Card.Footer>{item.loc} - {item.time}</Card.Footer>
            </Card.Body>
            <Button onClick={() => removeItem(idx)}>Take it</Button>
            <Button onClick={()=>{handleShow();console.log("hit show")}}>Details</Button>
        </Card>
        </Col>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>{item.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{item.desc}</Modal.Body>
        <Modal.Footer>
            <Button variant="primary" onClick={
                function(event){
                    handleClose();
                    removeItem(idx);
                    }}>
                Take
            </Button>
        </Modal.Footer>
    </Modal>
    </>
    )

}

export default ItemDescription;