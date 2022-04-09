import React from 'react'
import "./ThirdSlider.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function ThirdSlider() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        arrowsClass:"arrow",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 2,
                  infinite: true
                }
              },
            {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 549,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div > 
    <h3 className="toggle__1 my-4"> Related Product </h3>
    <h3 className="toggle__2 my-4"> Recommended Products </h3>
    <div className="ms-5">
        <Slider {...settings} className="slider__margin">
    
        
           
    
        <Card sx={{ maxWidth: 345 }} >
          <CardActionArea>
            <CardMedia
              component="img"
              height="292"
              image="./images/part1.svg"
              alt="green iguana"
            />
            <CardContent >
              <Typography gutterBottom variant="p" align="center" component="div" color="text.dark">
              Organic Thin-Sliced Bread
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center"  marginTop="10px">1123307722</Typography>
              <Typography gutterBottom variant="h5" align="center" component="div" marginTop="10px">
              $2.89
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
    
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="292"
              image="./images/part2.svg"
              alt="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="p" align="center" component="div" color="text.dark">
              Organic Thin-Sliced Bread
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center"  marginTop="10px">1123307722</Typography>
              <Typography gutterBottom variant="h5" align="center" component="div" marginTop="10px">
              $2.89
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
    
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="292"
              image="./images/part3.svg"
              alt="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="p" align="center" component="div" color="text.dark">
              Organic Thin-Sliced Bread
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center"  marginTop="10px">1123307722</Typography>
              <Typography gutterBottom variant="h5" align="center" component="div" marginTop="10px">
              $2.89
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
    
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="292"
              image="./images/part4.svg"
              alt="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="p" align="center" component="div" color="text.dark">
              Organic Thin-Sliced Bread
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center"  marginTop="10px">1123307722</Typography>
              <Typography gutterBottom variant="h5" align="center" component="div" marginTop="10px">
              $2.89
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
    
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="292"
              image="./images/part5.svg"
              alt="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="p" align="center" component="div" color="text.dark">
              Organic Thin-Sliced Bread
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center"  marginTop="10px">1123307722</Typography>
              <Typography gutterBottom variant="h5" align="center" component="div" marginTop="10px">
              $2.89
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        
        </Slider>
      </div>
    </div>
  )
}

export default ThirdSlider