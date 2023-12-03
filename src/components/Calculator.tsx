import React, { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { CalculatorOperationButton } from "./CalculatorOperationButton"
import { CalculatorButton } from "./CalculatorButton"
import { useNavigate } from "react-router-dom"
import "./Calculator.css"

export function Calculator() {
    const outputContainerStyle: React.CSSProperties = {
        width: "100%",
        textAlign: "right",
        height: "2em",
        padding: "16px",
        fontSize: "48px",
        overflow: "hidden",
    }

    const calculatorBaseStyle: React.CSSProperties = {
        padding: "10px",
        marginTop: "32px",
        backgroundColor: "rgb(115, 115, 115)",
        color: "white",
        maxWidth: "350px",
    }
    const [currNumber, setCurrNum] = useState("0");
    const [operator, setOperator] = useState("");
    const [prevNumber, setPrevNum] = useState("");
    const [history, setHistory] = useState<string[]>([]);

    const setDigit = (digit: string) => {
        if (operator === "=") {
            setCurrNum(digit);
            setPrevNum("");
            setOperator("");
        } else if (currNumber === "0" || operator === "=") {
            setCurrNum(digit);
        } else {
            setCurrNum(`${currNumber}${digit}`);
        }
    }

    const navigate = useNavigate();

    const navigateToSupport = () => {
        navigate("/Support");
    }

    const selectOperator = (operator: string) => {
        if (operator === "?") {
            navigateToSupport();
        } else if (operator === "=") {
            calculate();
            setOperator("");
        } else {
            // If there's a previous number and current number, perform the calculation
            if (prevNumber !== "" && currNumber !== "") {
                calculate();
            }
            setOperator(operator);
            setPrevNum(currNumber); // Save the current number as the previous number
            setCurrNum(""); // Clear the current number for the next input
        }
    }

    const clearAll = () => {
        setCurrNum("0");
        setOperator("");
        setPrevNum("");
    }

    const del = () => {
        currNumber.length > 1
            ? setCurrNum(currNumber.slice(0, -1))
            : setCurrNum("0");
    }

    const calculate = () => {
        if (!isNaN(parseFloat(prevNumber)) && !isNaN(parseFloat(currNumber))) {
            let result;

            switch (operator) {
                case "+":
                    result = parseFloat(prevNumber) + parseFloat(currNumber);
                    break;
                case "-":
                    result = parseFloat(prevNumber) - parseFloat(currNumber);
                    break;
                case "/":
                    result = parseFloat(prevNumber) / parseFloat(currNumber);
                    break;
                case "x":
                    result = parseFloat(prevNumber) * parseFloat(currNumber);
                    break;
                default:
                    return;
            }
            setHistory([...history, `${result}`]);
            setCurrNum(result.toString());
            setOperator("");
            setPrevNum("");
        }
    }

    return (
        <>
            <Container className="mt-4" style={calculatorBaseStyle}>
                <Row>
                    <Col>
                        <div className="history" style={{
                            color: "white",
                            marginTop: "10px",
                            overflow: "auto",
                            maxHeight: "120px",
                        }}>
                            <ul style={{
                                listStyleType: "none",
                                padding: "0px",
                                marginLeft: "5px",
                                fontSize: "32px",
                            }}>
                                {history.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </Col>
                </Row>
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
                        selectOperator={calculate}
                        selectedOperator={operator}
                    />
                </Row>
            </Container>
        </>
    )
}