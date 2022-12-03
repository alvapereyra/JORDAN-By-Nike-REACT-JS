import Carousel from 'react-bootstrap/Carousel';
import jo from "../assets/img/michael-jordan-chicago-bulls.jpg"
import jo1 from "../assets/img/michael-jordan-smoking-and-laughing.jpg"
import jo2 from "../assets/img/michael-jordan-smoking.jpg"

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={jo}
          alt="First slide"
        />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={jo1}
          alt="Second slide"
        />

        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={jo2}
          alt="Third slide"
        />

        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;