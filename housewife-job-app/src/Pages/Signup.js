import React from "react";
import { Button, Form, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Signup() {
  return (
    <div className="LoginSignup">
      <Card classname="mb-3 box-shadow" style={{ color: "#000" }}>
        <Card.Body>
          <Card.Title className="text-center heading text-uppercase">
            {" "}
            <h2>Sign Up</h2>{" "}
          </Card.Title>
          <Form>
            <Form.Group controlId="fromEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="name" name="name" />
            </Form.Group>
            <Form.Group controlId="fromEmail">
              <Form.Label>Phone No</Form.Label>
              <Form.Control
                type="number"
                placeholder="Mobile No"
                name="mobile"
              />
            </Form.Group>
            <Form.Group controlId="fromEmail" className="mt-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Example@email.com"
                name="email"
              />
            </Form.Group>
            <Form.Group controlId="fromPassword" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="password"
                name="password"
              />
            </Form.Group>
            <Form.Group controlId="fromPassword" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="password"
                name="confirm-password"
              />
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
