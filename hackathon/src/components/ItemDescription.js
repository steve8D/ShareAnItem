import React, {Component} from 'react';
import {Container, Col, Row, Card, Button} from 'react-bootstrap';
import potato from '../potato.png';

class ItemDescription extends Component{

    render(){
        return(
            <Container>
                <Row xs="auto" md={4} className="g-4">
                {Array.from({ length: 16 }).map((_, idx) => (
                    <Col>
                    <Card>
                        <Card.Img variant="top" src = {potato}/>
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                        <Button>Take it</Button>
                    </Card>
                    </Col>
                ))}
            </Row>
            </Container>
        )
    }

}

export default ItemDescription;