import React from "react";
import { Button, Form, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Educational() {
  return (
    <div className="LoginSignup">
      <Card classname="mb-3 box-shadow" style={{ color: "#000" }}>
        <Card.Body>
          <Card.Title className="text-center heading text-uppercase">
            {" "}
            <h2 className="mb-4">Professional Information</h2>{" "}
          </Card.Title>
          <Form>
            <Form.Group controlId="fromEmail">
              <Form.Label>Educational Qualification*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter qualification"
                name="Enter Qualifaction"
              />
            </Form.Group>
            <Form.Group controlId="fromEmail" className="mt-3">
              <Form.Label>Skills and Interests*</Form.Label>
              <Form.Control
                type="textarea"
                placeholder="Enter skills and interests"
                name="mobile"
              />
            </Form.Group>
            <Form.Group controlId="fromEmail" className="mt-3">
              <Form.Label>Experience*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Experience"
                name="Experience"
              />
            </Form.Group>
            <Form.Group controlId="fromEmail" className="mt-3">
              <Form.Label style={{ display: "block" }}>
                Sample photo/video of work (Optional)
              </Form.Label>
              <Form.Control
                type="file"
                placeholder="Example@email.com"
                name="Experience"
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-4">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
