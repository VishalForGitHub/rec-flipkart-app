import '../styles/sliding-images.css'
import React, { useState, useEffect } from "react";
import slidePic1 from '../assets/slidePic1.webp'
import slidePic2 from '../assets/slidePic2.webp'
import slidePic3 from '../assets/slidePic3.webp'
import slidePic4 from '../assets/slidePic4.webp'

export default function SlidingImages(){
    const images = [
      slidePic1,
      slidePic2,
      slidePic3,
      slidePic4
    ]; // Add your image paths here
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // Change image every 2 seconds
  
      return () => clearInterval(interval); // Cleanup the interval on unmount
    }, [images.length]);
  
    return (
      <div className="slider">
        <div
          className="slides"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Slide ${index + 1}`} className="slide" />
          ))}
        </div>
      </div>
    );
  };
  