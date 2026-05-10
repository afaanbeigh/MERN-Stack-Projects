import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX } from 'react-icons/hi';
import styles from '../styles/Gallery.module.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      url: 'https://images.pexels.com/photos/6739193/pexels-photo-6739193.jpeg?_gl=1*11dzh7u*_ga*MzU5NTI1MjM1LjE3NzAyOTAzNTk.*_ga_8JE65Q40S6*czE3NzAyOTk2MTUkbzIkZzEkdDE3NzAzMDA2OTMkajU0JGwwJGgw',
      title: 'Dal Lake',
      category: 'Kashmir'
    },
    {
      url: 'https://images.unsplash.com/photo-1662218752292-848395536ba9?q=80&w=1603&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Gulmarg Mountains',
      category: 'Kashmir'
    },
    {
      url: 'https://images.unsplash.com/photo-1619103801164-1166263cb3b6?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Pangong Lake',
      category: 'Ladakh'
    },
    {
      url: 'https://images.unsplash.com/photo-1713951579234-3bfee80f3d9b?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Mountain Peaks',
      category: 'Ladakh'
    },
    {
      url: 'https://plus.unsplash.com/premium_photo-1668369169008-5fe928f9939b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Valley View',
      category: 'Kashmir'
    },
    {
      url: 'https://images.unsplash.com/photo-1671047895517-6397123ce483?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Himalayan Range',
      category: 'Ladakh'
    },
    {
      url: 'https://images.unsplash.com/photo-1603979649806-5299879db16b?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Mountain Lake',
      category: 'Kashmir'
    },
    {
      url: 'https://images.unsplash.com/photo-1667899984222-6fa1c09419b3?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Snow Peaks',
      category: 'Ladakh'
    },
    {
      url: 'https://images.unsplash.com/photo-1732383968793-5ae0bca0d79b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Scenic Beauty',
      category: 'Kashmir'
    }
  ];

  return (
    <div className={styles.gallery}>
      <section className={styles.heroSection}>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Photo Gallery</h1>
          <p>Capturing the beauty of our destinations</p>
        </motion.div>
      </section>

      <section className={styles.gallerySection}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Explore Our Destinations</h2>
            <p>A visual journey through breathtaking landscapes</p>
          </motion.div>

          <div className={styles.galleryGrid}>
            {images.map((image, index) => (
              <motion.div
                key={index}
                className={styles.galleryItem}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedImage(image)}
              >
                <img src={image.url} alt={image.title} />
                <div className={styles.overlay}>
                  <div className={styles.overlayContent}>
                    <h3>{image.title}</h3>
                    <p>{image.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className={styles.lightboxContent}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.closeBtn}
                onClick={() => setSelectedImage(null)}
              >
                <HiX />
              </button>
              <img src={selectedImage.url} alt={selectedImage.title} />
              <div className={styles.lightboxInfo}>
                <h3>{selectedImage.title}</h3>
                <p>{selectedImage.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className={styles.ctaSection}>
        <motion.div
          className={styles.ctaContent}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Want to Experience This?</h2>
          <p>Book your journey to these stunning destinations today</p>
        </motion.div>
      </section>
    </div>
  );
};

export default Gallery;