import React from "react";
import { Container, Carousel, Form, InputGroup } from "react-bootstrap";


import banner from "../../../photos/bannerbg.jpg";
import carousel1 from "../../../photos/carousel1.jpg";
import carousel2 from "../../../photos/carousel2.jpg";
import carousel3 from "../../../photos/carousel3.jpg";

const Banner = () => {
  return (
    <div>
      <Container
        fluid
        style={{
          backgroundImage: `url(${banner})`,
          backgroundRepeat: "no-repeat",
          height: "40rem",
        }}
      >
        <div>
          <h1 id="bannerText">WATCH SHOP</h1>
        </div>
      </Container>

      <Container fluid className="bg-dark">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100 p-5"
              src={carousel1}
              height="600"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              className="d-block w-100 p-5"
              src={carousel2}
              height="600"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 p-5"
              src={carousel3}
              height="600"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Container>

      <Container fluid style={{ backgroundColor: "Brown", height: "400px" }}>
        <div id="promotion">
          <h1>Get promotions & updates!</h1>
          <p>
            Seamlessly empower fully researched growth strategies and
            interoperable internal or “organic” sources <br /> credibly innovate
            granular internal .
          </p>
        </div>
        <div>
        <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">Subscribe</InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
