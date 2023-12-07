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

    const [randNum, setRandNum] = useState<string | null>(null)
    const [formSubmitted, setFormSubmitted] = useState(false)

    const areRequiredFieldsFilled = () => {
        const { firstName, lastName, email, topic } = formData;
        return firstName.trim() !== "" && lastName.trim() !== "" && email.trim() !== "" && topic.trim() !== ""
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }))
    }

    const generateRandNum = () => {
        const randNum = Math.floor(1000 + Math.random() * 9000)
        setRandNum(randNum.toString())
    }

    const sendTicket = (e: React.FormEvent) => {
        e.preventDefault()
        if (areRequiredFieldsFilled()) {
            generateRandNum()
            setFormSubmitted(true)
        }
    }

    return (
        <Container>
            <h1 style={{ color: "white", marginTop: "15px" }}>Support Ticket Form</h1>
            <hr style={{ color: "white", borderWidth: "2px", marginBottom: "0px" }} />

            {formSubmitted ? (
                <div className="text-center" style={{ marginTop: "150px", color: "white" }}>
                    <h2 style={{ color: "rgb(255,191,0)", marginBottom: "20px" }}
                    >Thank you for sending us your report, we will track the problem now</h2>
                    <p style={{ fontSize: "22px" }}>
                        <span style={{ color: "gray" }}>ticket number: </span>
                        {randNum}
                    </p>
                </div>
            ) : (
                <Form style={{ color: "white", marginTop: "15px" }} onSubmit={sendTicket}>
                    <Row className="mb-3">
                        <Col md={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>
                                    First Name
                                    <span style={{ color: "red", marginLeft: "5px" }}>*</span>
                                </Form.Label>
                                <Form.Control className="border-custom"
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
                                <Form.Control className="border-custom"
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
                                        What can we help you today?
                                    </p>
                                    <div>
                                        <label style={{ display: "flex", alignItems: "center", paddingLeft: "15px" }}>
                                            <input style={{ marginRight: "7px" }}
                                                type="radio"
                                                name="topic"
                                                value="general"
                                                checked={formData.topic === "general"}
                                                onChange={handleChange}
                                            />
                                            General
                                        </label>
                                    </div>
                                    <div>
                                        <label style={{ display: "flex", alignItems: "center", paddingLeft: "15px" }}>
                                            <input style={{ marginRight: "7px" }}
                                                type="radio"
                                                name="topic"
                                                value="bug"
                                                checked={formData.topic === "bug"}
                                                onChange={handleChange}
                                            />
                                            Bug
                                        </label>
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
                                <Form.Control className="border-custom"
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
                                <Form.Control className="border-custom"
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
                        <Button
                            type="submit"
                            style={{
                                backgroundColor: areRequiredFieldsFilled() ? "rgb(255,141,26)" : "gray",
                                border: "none",
                                borderRadius: "20px",
                                width: "120px",
                                fontSize: "23px"
                            }}
                            disabled={!areRequiredFieldsFilled()}
                        >
                            SEND
                        </Button>
                    </Col>

                </Form>
            )}
        </Container>
    )
}