import Carousel from 'react-bootstrap/Carousel';

function CarouselHome() {
  return (
    <Carousel>
      <Carousel.Item>
      <img src='http://localhost:3000/images/banner1.webp' className='d-block w-100' alt='...' />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='http://localhost:3000/images/banner2.webp' className='d-block w-100' alt='...' />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='http://localhost:3000/images/banner3.webp' className='d-block w-100' alt='...' />
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

export default CarouselHome;