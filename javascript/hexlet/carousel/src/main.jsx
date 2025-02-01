import { createRoot } from 'react-dom/client';
import Carousel from "./Carousel.jsx";

const images = ['1.jpeg', '2.jpeg', '3.jpeg'];

createRoot(document.getElementById('container')).render(
    <Carousel images={images} />
);

