import React from "react";
import { Button, Form, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Login() {

    return (
        <div>
        <Card classname="mb-3" style={{ color: "#000"}}>
            <Card.Body>
                <Card.Title>
                    Sign In
                </Card.Title>
                <Form>
                    <Form.Group controlId="fromEmail">
                        <Form.Label>
                            Email Address
                        </Form.Label>
                        <Form.Control type="email" placeholder="Example@email.com"/>
                    </Form.Group>
                    <Form.Group controlId="fromPassword">
                        <Form.Label>
                            Password
                        </Form.Label>
                        <Form.Control type="password" placeholder="password"/>
                    </Form.Group>
                    <Button variant="secondary" type="submit">
                        Login
                    </Button>
                </Form>
            </Card.Body>
        </Card>

        </div>
    )
}