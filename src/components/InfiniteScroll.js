import React, { useState, useEffect, useRef } from "react";
import "../style/inifinitescroll.css";
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from 'components/ExampleCarouselImage';
import image1 from '../images/5fa47320f7d1cb0019e3a18c-1.png';
import image2 from '../images/-m8b7371-final-1.png';
import image3 from '../images/85ecc02fe64f1b41b48fe573bb2f04d5-1.png';
import image4 from '../images/c20ebb1fb37dad7508c237358b38abce-1.png';
import image5 from '../images/herme-s-1.png';
import image6 from '../images/4978bdf8e06210b91a2b9699ccc283c8.jpg';
import image7 from '../images/4104970701b49f1f966f176545f8b2c1.jpg';
import image8 from '../images/cd68428df16da61f43de19ecf4948b9f.jpg';
import image9 from '../images/cd68428df16da61f43de19ecf4948b9f.jpg';


function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;