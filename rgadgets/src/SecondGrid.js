import React from 'react'
import { Col, Row } from 'react-bootstrap'
import "./SecondGrid.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruckDroplet } from "@fortawesome/free-solid-svg-icons"
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

function SecondGrid() {
    return (
        <Row>

            <Col xs={{ span: 12, order: 2 }} md={{ span: 12, order: 2 }} xl={{ span: 6, order: 1 }} xxl={{ span: 6, order: 1 }} className="first p-4">
                <h3>Description</h3>

                <p>
                    Ingredients: Water, Organic Whole Wheat Flour,
                    Organic Cracked Whole Wheat, Organic Cane Sugar, Organic
                    Grain and Seed Topping Mix (Organic Flax Seeds, Organic Sunflower Seeds,
                    Organic Brown Sesame Seeds, Organic Triticale Flakes [Wheat], Organic Barley Flakes,
                    Organic Oat Flakes, Organic Pumpkin Seeds, Organic Rye Flakes, Organic Black Sesame Seeds,
                    Organic Millet, Organic Spelt Flakes [Wheat], Organic Yellow Cornmeal, Organic Kamut Khorasan Wheat Flakes,
                    Organic Quinoa, Organic Poppy Seeds), Organic Wheat Gluten.
                </p>
            </Col>
            <Col xs={{ span: 12, order: 1 }} md={{ span: 12, order: 1 }} xl={{ span: 6, order: 2 }} xxl={{ span: 6, order: 2 }} className="second p-4">
               
                <p><FontAwesomeIcon icon={faTruckDroplet} style={{fontSize:"25px"}}></FontAwesomeIcon> &nbsp;&nbsp; 15th - 17th September (Expedited shipping)</p>
                <p><AirportShuttleIcon style={{fontSize:"30px"}}/>&nbsp;&nbsp; 20th - 21st September (Standard shipping)<span style={{color:"blue"}}> Select Standard Shipping</span></p>
                <p><AccountBalanceIcon style={{fontSize:"30px"}}/>&nbsp;&nbsp; Secured Packing </p>

            </Col>

        </Row>
    )
}

export default SecondGrid