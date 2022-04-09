import React from 'react'
import "./Footer.css"
import { Col, Row, InputGroup, FormControl } from 'react-bootstrap'
import Button from '@mui/material/Button';
import CallIcon from '@mui/icons-material/Call';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import FacebookIcon from '@mui/icons-material/Facebook';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <footer className="p-2 mt-5" >
      <Row className="first__footer">

        <Col xs={{ span: 12, order: 2 }} md={{ span: 12, order: 2 }} xl={{ span: 1, order: 1 }} xxl={{ span: 1, order: 1 }} >
          <h3 style={{ color: "white" }}>COMPANY</h3>
          <p style={{ color: "white" }}>About Us Sell With Us Our Sellers</p>
        </Col>

        <Col xs={{ span: 12, order: 3 }} md={{ span: 12, order: 3 }} xl={{ span: 2, order: 2 }} xxl={{ span: 2, order: 2 }}>
          <h3 style={{ color: "white" }}>CUSTOMER SERVICE</h3>
          <p style={{ color: "white" }}>  Help and FAQs Exchange and Returns Policy Privacy Policy Terms and Conditions </p>
        </Col>

        <Col xs={{ span: 12, order: 4 }} md={{ span: 12, order: 4 }} xl={{ span: 2, order: 3 }} xxl={{ span: 2, order: 3 }}>
          <h3 style={{ color: "white" }}>OUR STORES</h3>
          <p style={{ color: "white" }}>Stores and Services Location and Hours Catalogs </p>
        </Col>

        <Col xs={{ span: 12, order: 1 }} md={{ span: 12, order: 1 }} xl={{ span: 4, order: 4 }} xxl={{ span: 3, order: 4 }} className="res__border">
          <h3 style={{ color: "white" }}>Subscribe Newsletter</h3>
          <div style={{ display: "flex", gap: "10px", height: "31px" }}>
            <InputGroup size="sm" className="mb-3" >
              <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Enter Your Email Address" />
            </InputGroup>
            <Button variant="contained" size="small">Submit</Button>
          </div>
        </Col>

      </Row>
      <Row className="first__footer second__footer">
        <Col sm={12} md={12} xl={2} xxl={2}>
          <p style={{ color: "white", lineHeight: "0px" }}><CallIcon />{" "} 1800 420 0707</p>
          <p style={{ color: "white", lineHeight: "0px" }}><span style={{ fontSize: '20px', fontWeight: '500' }}>@</span>{" "}
            customercare@company.com</p>
        </Col>
        <Col sm={12} md={12} xl={2} xxl={2}>
          <p style={{ color: "white", lineHeight: "0px" }}><AddLocationIcon />{" "} Address line 1</p>
          <p style={{ color: "white", lineHeight: "0px" }} className="ms-4"> Address line 2</p>
        </Col>
        <Col sm={12} md={12} xl={2} xxl={1} style={{ color: "#707070", marginTop: "10px" }}>
          <FacebookIcon />
          <PlayArrowIcon />
          <LinkedInIcon />
          <TwitterIcon />
        </Col>
      </Row>
      <Row className="third__footer">
        <p style={{ color: "#8A8A8A" }} className="footer__size"> Copyrights © 2021 Company Ltd. All rights reserved.</p>
      </Row>
    </footer>
  )
}

export default Footer