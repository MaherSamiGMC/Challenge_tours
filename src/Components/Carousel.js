import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './carousel.css'

function Slides() {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.routard.com/image/92/2/tours.1582922.w740.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Sijoumi</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.touraineloirevalley.com/wp-content/uploads/2019/11/parcours_lumiere_tours_credit_adt_touraine_jc_coutand_2029-9.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>ksar hlel</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl2i446xjtwbfsMQZDC91vwWWW3JoygzKL2w&usqp=CAU"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Echkel</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default Slides
