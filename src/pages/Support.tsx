import React, { ChangeEvent, useState } from "react"
import { Container, Form, Row, Col, Button } from "react-bootstrap"
import "./Support.css"

export function Support() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        description: "",
        topic: "general" || "bug"
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        // Update formData state using the spread operator
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }))
    }

    return (
        <Container>
            <h1 style={{ color: "white", marginTop: "15px" }}>Support Ticket Form</h1>
            <hr style={{ color: "white", borderWidth: "2px", marginBottom: "0px" }} />
            <Form style={{ color: "white", marginTop: "15px" }}>
                <Row className="mb-3">
                    <Col md={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>
                                First Name
                                <span style={{ color: "red", marginLeft: "5px" }}>*</span>
                            </Form.Label>
                            <Form.Control
                                style={{
                                    backgroundColor: "black",
                                    border: "1px solid white",
                                    borderRadius: "5px",
                                }}
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                            <Form.Text style={{ color: "gray" }}>First</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>
                                Email
                                <span style={{ color: "red", marginLeft: "5px" }}>*</span>
                            </Form.Label>
                            <Form.Control
                                style={{
                                    backgroundColor: "black",
                                    border: "1px solid white",
                                    borderRadius: "5px",
                                }}
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Topic
                                <span style={{ color: "red", marginLeft: "5px" }}>*</span>
                            </Form.Label>
                            <div className="mt-2 dashed">
                                <p style={{ display: "block", padding: "10px", paddingBottom: "0px" }}>
                                    What can we help you today?</p>
                                <div style={{ display: "flex", alignItems: "center", paddingLeft: "10px" }}>
                                    <input
                                        style={{
                                            appearance: "none",
                                            width: "7px",
                                            height: "7px",
                                            borderRadius: "50%",
                                            backgroundColor: "white",
                                            border: "1px solid black",
                                            marginRight: "5px",
                                            cursor: "pointer",
                                        }}
                                        type="radio"
                                        name="topic"
                                        value="general"
                                        checked={formData.topic === "general"}
                                        onChange={handleChange}
                                    />
                                    <label>General</label>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", paddingLeft: "10px" }}>
                                    <input
                                        style={{
                                            appearance: "none",
                                            width: "7px",
                                            height: "7px",
                                            borderRadius: "50%",
                                            backgroundColor: "white",
                                            border: "1px solid black",
                                            marginRight: "5px",
                                            cursor: "pointer",
                                        }}
                                        type="radio"
                                        name="topic"
                                        value="bug"
                                        checked={formData.topic === "bug"}
                                        onChange={handleChange}
                                    />
                                    <label>Bug</label>
                                </div>
                            </div>
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group>
                            <Form.Label>
                                Last Name
                                <span style={{ color: "red", marginLeft: "5px" }}>*</span>
                            </Form.Label>
                            <Form.Control
                                style={{
                                    backgroundColor: "black",
                                    border: "1px solid white",
                                    borderRadius: "5px",
                                }}
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                            <Form.Text style={{ color: "gray" }}>Last</Form.Text>
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group>
                            <Form.Label>
                                Description
                                <span style={{
                                    color: "gray",
                                    marginLeft: "5px",
                                    position: "relative",
                                    top: "-10px",
                                    fontSize: "15px"
                                }}>
                                    optional</span>
                            </Form.Label>
                            <Form.Control
                                style={{
                                    backgroundColor: "black",
                                    border: "1px solid white",
                                    borderRadius: "2px",
                                    height: "330px",
                                    textAlign: "left",

                                }}
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Col md={12} className="d-flex justify-content-end">
                    <Button type="submit" style={{
                        backgroundColor: "rgb(255,141,26)",
                        border: "none",
                        borderRadius: "20px",
                        width: "100px"
                    }}>
                        SEND
                    </Button>
                </Col>

            </Form>
        </Container>
    )
}