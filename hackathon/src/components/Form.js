import React from "react";
import { Form, Button } from "react-bootstrap";

const UserForm = ({ values, onType, onSumbit }) => {
  return (
    <Form>
      <Form.Group
        value={values.itemDescription}
        className="m-3"
        controlId="formBasicDescription"
      >
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="A Basic Description of Your Item"
        />
      </Form.Group>

      <Form.Group className="m-3" controlId="formBasicQuantity">
        <Form.Label>Quantity</Form.Label>
        <Form.Control
          value={values.quantity}
          type="text"
          placeholder="How much of that item do you have?"
        />
      </Form.Group>

      <Form.Group
        value={values.location}
        className="m-3"
        controlId="formBasicLocation"
      >
        <Form.Label>Location</Form.Label>
        <Form.Control
          type="text"
          placeholder="Where do you want to meet (UBC Bus Loop, IKB Building, etc.)?"
        />
      </Form.Group>

      <Form.Group className="m-3" controlId="formBasicTime">
        <Form.Label>Time</Form.Label>
        <Form.Control
          value={values.time}
          type="text"
          placeholder="What time do you want to meet with the other student?"
        />
      </Form.Group>
      <Button
        className="m-3"
        variant="primary"
        type="submit"
        onClick={onSumbit}
      >
        Submit
      </Button>
    </Form>
  );
};

export default UserForm;
