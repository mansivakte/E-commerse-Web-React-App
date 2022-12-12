import React from "react";
import s1 from "../Img/i1.png";
import s2 from "../Img/i2.jpg";
import s3 from "../Img/i3.jpg";
import s4 from "../Img/i4.jpg";
import s5 from "../Img/i5.jpg";
// import s1 from "../Img/s9.jpg";
// import s2 from "../Img/s6.png";
// import s3 from "../Img/si1.jpg";
// import s4 from "../Img/si2.jpg";

import Carousel from "react-bootstrap/Carousel";

function UncontrolledExample() {
  return (
    <Carousel>
      {/* 1 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={s1}
          alt="First slide"
          height="500px"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>

      {/* 2 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={s2}
          alt="Second slide"
          height="500px"
        />
      </Carousel.Item>

      {/* 3 */}

      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={s3}
          alt="Third slide"
          height="500px"
        />
      </Carousel.Item>

      {/* 4 */}
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={s4}
          alt="Forth slide"
          height="500px"
        />
      </Carousel.Item>

      {/* 5 */}
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={s5}
          alt="Fifth slide"
          height="500px"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
