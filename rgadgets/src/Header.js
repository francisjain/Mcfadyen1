import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { Image, InputGroup, FormControl, Button, Row, Col, } from 'react-bootstrap';
import IconButton from '@mui/material/IconButton';
import "./Header.css"

function Header() {
    const [sidebar, setSidebar] = useState(false);

    const toggleSideBar = () => {
        setSidebar(prevState => !prevState)
    }
    return (

        <div className="header">
            <Row style={{ backgroundColor: "#F7F7F7", alignItems: "center", padding: "15px" }}>

                <Col xs={{ span: 6, order: 1 }} sm={{ span: 6, order: 1 }} md={{ span: 6, order: 1 }} xl={{ span: 2, order: 1 }} xxl={{ span: 2, order: 1 }} className="flex">
                    <div className="menu__icon "><IconButton onClick={ toggleSideBar }><MenuIcon style={{ color: "green" }} /></IconButton></div>
                    <Image style={{ width: "150px", objectFit: "contain" }} src="/images/logo main.png" />
                </Col>

                <Col xs={{ span: 12, order: 3 }} sm={{ span: 12, order: 3 }} md={{ span: 12, order: 3 }} xl={{ span: 8, order: 2 }} xxl={{ span: 8, order: 2 }}>
                    <InputGroup size="sm" >
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                        <Button variant="secondary  opacity-60" id="button-addon2">
                            <SearchIcon style={{ fontSize: 28 }} />
                        </Button>
                    </InputGroup>
                </Col>

                <Col style={{ textAlign: "end" }} xs={{ span: 6, order: 2 }} sm={{ span: 6, order: 2 }} md={{ span: 6, order: 2 }} xl={{ span: 2, order: 3 }} xxl={{ span: 2, order: 3 }}>
                    <IconButton><Image style={{ width: "30px", height: "30px" }} src="/images/user.svg" /></IconButton>
                    <IconButton><Image style={{ width: "30px", height: "30px" }} src="/images/cart.svg" /></IconButton>
                </Col>

            </Row>
            <Row >
                <ul className={sidebar ? "second__header  second_header_open" : "second__header"}>

                    <li >Bakery</li>
                    <li >Nuts & Seeds</li>
                    <li >Vegetables</li>
                    <li >Cheeses</li>
                    <li >Sea Food</li>
                    <li >Dairy</li>
                    <li >Meast</li>
                    <li >Snacks</li>
                </ul>
            </Row>
        </div>



    )
}

export default Header