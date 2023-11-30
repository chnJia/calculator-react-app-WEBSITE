import React from "react"
import { Col, Button } from "react-bootstrap"

interface OperationButtonProps {
    operator: string,
    selectOperator: (operator: string) => void,
    selectedOperator: string
    onClick?: () => void
}

export function CalculatorOperationButton({
    operator,
    selectOperator,
    selectedOperator,
    onClick,
}: OperationButtonProps) {
    const xs = 3
    const equal = operator === "="

    return (
        <Col xs={equal ? 6 : xs} className="d-flex align-items-center justify-content-center mb-2" >
            <Button variant="outline-secondary" className={"equal" ? "" : "rounded-circle"}
                style={{
                    borderRadius: equal ? "30px" : "50%",
                    width: equal ? "100%" : "50px",
                    height: "50px",
                    marginTop: "20px",
                    color: "white",
                    fontSize: "20px",
                    backgroundColor: operator === "C" || operator === "DEL" ? "rgb(166, 166, 166)" : "rgb(255,153,0)",
                    border: "none",
                    cursor: "pointer"
                }}
                onClick={() => selectOperator(operator)}
            >
                {operator}
            </Button>
        </Col>
    )
}