import React, { useState } from "react";
import styles from "./Carousel.module.css";

const Carousel = ({ images, visibleCount = 1 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  const visibleImages = [];
  for (let i = 0; i < visibleCount; i++) {
    const index = (currentIndex + i) % totalImages;
    visibleImages.push(images[index]);
  }

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselImages}>
        {visibleImages.map((image, index) => (
          <img
            key={index}
            src={image.image}
            alt={`Slide ${index + 1}`}
            className={styles.carouselImage}
          />
        ))}
      </div>
      <div class={styles.arrows}>
        <button onClick={handlePrev} className={styles.carouselButton}>
          <p class={styles.prev}></p>
        </button>
        <button onClick={handleNext} className={styles.carouselButton}>
          <p class={styles.next}></p>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
