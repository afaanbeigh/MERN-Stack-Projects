import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Hero.module.css';

const Hero = () => {
  const slides = [
    {
      title: "Discover the Majestic Beauty of Kashmir",
      subtitle: "Experience unforgettable journeys through breathtaking landscapes with MountainTop",
      background: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2400&q=80"
    },
    {
      title: "Explore the Wonders of Ladakh",
      subtitle: "Embark on an adventure through high-altitude deserts, pristine lakes, and ancient monasteries",
      background: "https://images.unsplash.com/photo-1633259422382-5ead30efb697?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Experience Authentic Himalayan Culture",
      subtitle: "Immerse yourself in rich traditions, warm hospitality, and breathtaking mountain vistas",
      background: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?auto=format&fit=crop&w=2400&q=80"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isHovering, slides.length]);

  const handleIndicatorClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroBg}>
        <motion.img
          key={currentSlide}
          src={slides[currentSlide].background}
          alt="Mountain scenery"
          className={styles.heroBgImage}
          initial={{ opacity: 0.7 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        />
        <div className={styles.heroOverlay}></div>
      </div>

      <div className={styles.heroContainer}>
        <div 
          className={styles.heroContent}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <motion.div 
            className={styles.carouselIndicators}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {slides.map((_, index) => (
              <div
                key={index}
                className={`${styles.indicator} ${currentSlide === index ? styles.active : ''}`}
                onClick={() => handleIndicatorClick(index)}
              />
            ))}
          </motion.div>

          <motion.h1
            key={`title-${currentSlide}`}
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {slides[currentSlide].title}
          </motion.h1>

          <motion.p
            key={`subtitle-${currentSlide}`}
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {slides[currentSlide].subtitle}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;