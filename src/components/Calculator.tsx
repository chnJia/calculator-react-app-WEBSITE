import React, { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { CalculatorOperationButton } from "./CalculatorOperationButton"
import { CalculatorButton } from "./CalculatorButton"
import { useNavigate } from "react-router-dom"
import { Support } from "../pages/Support"

export function Calculator() {
    const outputContainerStyle: React.CSSProperties = {
        width: "100%",
        textAlign: "right",
        height: "2em",
        padding: '16px',
        fontSize: "48px",
        overflow: "hidden",
    }

    const calculatorBaseStyle: React.CSSProperties = {
        padding: "16px",
        marginTop: "32px",
        backgroundColor: "rgb(115, 115, 115)",
        color: "white",
        maxWidth: "350px"
    }

    const [currNumber, setCurrNum] = useState("0")
    const [operator, setOperator] = useState("")
    const [prevNumber, setPrevNum] = useState("")

    const setDigit = (digit: string) => {
        if (currNumber === "0" || operator === "=") {
            setCurrNum(digit)
        } else {
            setCurrNum(`${currNumber}${digit}`)
        }
    }

    const navigate = useNavigate()

    const navigateToSupport = () => {
        // Use the navigate function to go to the Support page
        navigate("/Support");
    };

    const selectOperator = (operator: string) => {
        operator === "?" ? navigate("/Support") : (
            setOperator(operator)
        )
    }

    const clearAll = () => {
        setCurrNum("0")
        setOperator("")
        setPrevNum("")
    }

    const del = () => {
        currNumber.length > 1 ?
            setCurrNum(currNumber.slice(0, -1)) : (
                setCurrNum("0")
            )
    }

    const calculate = () => {
        let result

    }

    return (
        <>
            <Container className="mt-4" style={calculatorBaseStyle}>
                Hello
                <Row>
                    <Col>
                        <div style={outputContainerStyle}>
                            {currNumber}
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container style={{
                maxWidth: "350px",
                backgroundColor: "rgb(36, 36, 36)",
                marginTop: "0px",
                height: "100%"
            }}>
                <Row>
                    <CalculatorOperationButton
                        operator="C"
                        selectOperator={clearAll}
                        selectedOperator={operator}
                    />
                    <CalculatorOperationButton
                        operator="DEL"
                        selectOperator={del}
                        selectedOperator={operator}
                    />
                    <CalculatorOperationButton
                        operator="?"
                        selectOperator={selectOperator}
                        selectedOperator={operator}
                        onClick={navigateToSupport}

                    />
                    <CalculatorOperationButton
                        operator="/"
                        selectOperator={selectOperator}
                        selectedOperator={operator}
                    />
                </Row>
                <Row>
                    <CalculatorButton
                        digit="1"
                        selectedDigit={setDigit}
                    />
                    <CalculatorButton
                        digit="2"
                        selectedDigit={setDigit}
                    />
                    <CalculatorButton
                        digit="3"
                        selectedDigit={setDigit}
                    />
                    <CalculatorOperationButton
                        operator="x"
                        selectOperator={selectOperator}
                        selectedOperator={operator}
                    />
                </Row>
                <Row>
                    <CalculatorButton
                        digit="4"
                        selectedDigit={setDigit}
                    />
                    <CalculatorButton
                        digit="5"
                        selectedDigit={setDigit}
                    />
                    <CalculatorButton
                        digit="6"
                        selectedDigit={setDigit}
                    />
                    <CalculatorOperationButton
                        operator="-"
                        selectOperator={selectOperator}
                        selectedOperator={operator}
                    />
                </Row>
                <Row>
                    <CalculatorButton
                        digit="7"
                        selectedDigit={setDigit}
                    />
                    <CalculatorButton
                        digit="8"
                        selectedDigit={setDigit}
                    />
                    <CalculatorButton
                        digit="9"
                        selectedDigit={setDigit}
                    />
                    <CalculatorOperationButton
                        operator="+"
                        selectOperator={selectOperator}
                        selectedOperator={operator}
                    />
                </Row>
                <Row>
                    <CalculatorButton
                        digit="0"
                        selectedDigit={setDigit}
                    />
                    <CalculatorOperationButton
                        operator="="
                        selectOperator={selectOperator}
                        selectedOperator={operator}
                    />
                </Row>
            </Container>
        </>
    )
}