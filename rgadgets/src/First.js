import React from 'react'
import "./First.css"
import { Row, Col, Image } from 'react-bootstrap'
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Taps from './Taps';


function First() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dotsClass: "button__bar"
    };
    return (

        <div>

            <Row>
                <p className="h__2">Home {'>'} Bakery {">"} Organic Bread</p>
                <Col ><h2 className="h_2">Dave's Killer Bread® Organic 21 Whole Grain Bread</h2></Col>
            </Row>
            <Row>
                <Col md={"auto"} >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Rating style={{ fontSize: "45px" }} name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                        <Box sx={{ ml: 4 }}>5 Reviews</Box>
                    </Box>
                    <div className="slider__container mt-3">
                        <Slider {...settings}>

                            <Image src="./images/part1.svg" className="img__container" />


                            <Image src="./images/part2.svg" className="img__container" />


                            <Image src="./images/part3.svg" className="img__container" />


                            <Image src="./images/part4.svg" className="img__container" />


                        </Slider>
                    </div>
                </Col>
                <Col sm={12} md={12} lg={12} xl={7} xxl={8} >
                    <Taps />
                </Col>
            </Row>
        </div>
    )
}

export default First