import React, {Component} from 'react';
import {Container, Col, Row, Card, Button} from 'react-bootstrap';
import potato from '../potato.png';

class ItemDescription extends Component{

    render(){
        const {items, removeItem} = this.props;
        return(
            <Container>
                <Row md={4} className="g-4">
                {items.map((item, idx) => (
                    <Col>
                    <Card>
                        <Card.Img variant="top" src = {item.imgLink}/>
                        <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                            {item.desc}
                        </Card.Text>
                        <Card.Footer>{item.loc} - {item.time}</Card.Footer>
                        </Card.Body>
                        <Button onClick={() => removeItem(idx)}>Take it</Button>
                    </Card>
                    </Col>
                ))}
            </Row>
            </Container>
        )
    }

}

export default ItemDescription;