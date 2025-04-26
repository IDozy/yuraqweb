'use client'; // Solo si usas Next.js App Router

import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const carouselItems = [
  {
    src: '/Slide3.JPG',
    alt: 'Primera imagen',
    title: 'Primera imagen',
    description: 'Descripción breve de la primera imagen.'
  },
  {
    src: '/Slide2.JPG',
    alt: 'Segunda imagen',
    title: 'Segunda imagen',
    description: 'Texto de ejemplo para la segunda imagen.'
  },
  {
    src: '/Slide1.JPG',
    alt: 'Tercera imagen',
    title: 'Tercera imagen',
    description: 'Algo más aquí para la tercera imagen.'
  }
];

export default function MyCarousel() {
  return (
    <div className="w-full relative" style={{ marginTop: '-50px' }}> {/* Aquí usamos margen negativo inline */}
      <Carousel fade>
        {carouselItems.map((item, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-full h-[500px] object-cover"
              src={item.src}
              alt={item.alt}
            />
            <Carousel.Caption>
              <h3 className="text-white text-xl font-semibold relative top-[-200px]">{item.title}</h3>
              <p className="text-white">{item.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
