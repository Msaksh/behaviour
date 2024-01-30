import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const ControlledCarousel = ({ slides }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} indicators={true} controls={false}>
      {slides && slides.map((slide, index) => (
        <Carousel.Item className='carouselItem rounded-4' style={{ backgroundColor: slide.backgroundColor }} key={index}>
          <div className='row p-4 inheritHeight'>
            <div className='col-12 d-flex align-items-center justify-content-start'>
              <img src={slide.image} alt="" width={80} className='rounded-circle' />
              <p className='display-6 fs-3 mb-0 ms-3 text-dark fw-medium'>{slide.name}</p>
            </div>
            <div className='col-12 d-flex align-items-start justify-content-start'>
              <p className='fs-4 mb-0  fw-medium' style={{ color: slide.textColor }}>{slide.message}</p>
            </div>
          </div>
        </Carousel.Item>
      ))}

      {/* <Carousel.Item className='carouselItem rounded-4'>
        <div className='row p-4 inheritHeight'>
          <div className='col-12 d-flex align-items-center justify-content-start'>
            <img src="assets/img/katrina.jpeg" alt="" width={80} />
            <p className='display-6 fs-3 mb-0 ms-3'>Katrina</p>
          </div>
          <div className='col-12 d-flex align-items-start justify-content-start'>
            <p className='fs-4 mb-0'>I am always on time so that my colleagues don't suffer.</p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className='carouselItem rounded-4'>
        <div className='row p-4 inheritHeight'>
          <div className='col-12 d-flex align-items-center justify-content-start'>
            <img src="assets/img/katrina.jpeg" alt="" width={80} />
            <p className='display-6 fs-3 mb-0 ms-3'>Katrina</p>
          </div>
          <div className='col-12 d-flex align-items-start justify-content-start'>
            <p className='fs-4 mb-0'>I am always on time so that my colleagues don't suffer.</p>
          </div>
        </div>
      </Carousel.Item> */}

    </Carousel>
  );
}

export default ControlledCarousel;