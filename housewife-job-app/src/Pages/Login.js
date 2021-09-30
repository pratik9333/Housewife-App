import React from "react";
import { Button, Form, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Login() {
  return (
    <div className="LoginSignup">
      <Card classname="mb-3" style={{ color: "#000" }}>
        <Card.Body>
          <Card.Title className="text-center heading text-uppercase">
            {" "}
            <h2>Log In</h2>{" "}
          </Card.Title>
          <Form>
            <Form.Group controlId="fromEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Example@email.com" />
            </Form.Group>
            <Form.Group controlId="fromPassword" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="password" />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
