import React from "react"
import { Col, Button } from "react-bootstrap"

interface ButtonProps {
    digit: string
    selectedDigit: (digit: string) => void
}

export function CalculatorButton({
    digit,
    selectedDigit,
}: ButtonProps) {
    const xs = 3
    const zero = digit === "0"
    return (
        <Col xs={zero ? 6 : xs} className="d-flex align-items-center justify-content-center mb-2">
            <Button variant="outline-secondary" className={"zero" ? "" : "rounded-circle"}
                style={{
                    borderRadius: zero ? "30px" : "50%",
                    width: zero ? "100%" : "50px",
                    height: "50px",
                    marginTop: "20px",
                    color: "white",
                    fontSize: "20px",
                    backgroundColor: "rgb(166, 166, 166)",
                    border: "none",
                    cursor: "pointer"
                }}
                onClick={() => selectedDigit(digit)}
            >
                {digit}
            </Button>
        </Col>
    )
}