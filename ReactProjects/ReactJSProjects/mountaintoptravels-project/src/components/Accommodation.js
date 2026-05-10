import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaMapMarkerAlt, FaTimes } from 'react-icons/fa';
import styles from '../styles/Accommodation.module.css';

const Accommodation = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const kashmirHotels = [
    {
      id: 1,
      name: "Radisson Collection Hotel & Spa, Riverfront",
      image: "/Images/RadissonCollectionHotel&SpaRiverfront.jpg", //Image is in public/Images
      description: "Luxury hotel destination featuring a world-class spa and premium amenities",
      rating: 4.7,
      location: "Srinagar, Rajbagh"
    },
    {
      id: 2,
      name: "Golden Tulip",
      image: "/Images/GoldenTulipSrinagar.jpg", //Image is in public/Images
      description: "Premium hotel offering elegant rooms and authentic Kashmiri hospitality",
      rating: 4.6,
      location: "Srinagar, Sonwar Bagh"
    },
    {
      id: 3,
      name: "The Vintage",
      image: "/Images/TheVintageSrinagar.jpg", //Image is in public/Images
      description: "Boutique heritage property with stunning Dal Lake waterfront location",
      rating: 4.5,
      location: "Srinagar, Dal Lake"
    },
    {
      id: 4,
      name: "The Khyber Himalayan Resort & Spa",
      image: "/Images/TheKhyberHimalayanResort&Spa.jpg", //Image is in public/Images
      description: "Ultra-luxury mountain resort with award-winning spa and gourmet dining",
      rating: 4.9,
      location: "Gulmarg"
    },
    {
      id: 5,
      name: "Hilltop",
      image: "/Images/HilltopHotel.png", //Image is in public/Images
      description: "Elegant rooms with modern comforts, stylish interiors, and a warm, relaxing ambiance.",
      rating: 4.5,
      location: "Gulmarg"
    },
    {
      id: 6,
      name: "Sonmarg Glacier",
      image: "/Images/HotelSonmargGlacier.jpg", //Image is in public/Images
      description: "Premium stay near Thajiwas Glacier with breathtaking mountain scenery",
      rating: 4.4,
      location: "Sonmarg"
    },
    {
      id: 7,
      name: "Lemon Tree",
      image: "/Images/LemonTreeHotel.jpg", //Image is in public/Images
      description: "Modern comfort with panoramic views of snow-capped peaks",
      rating: 4.3,
      location: "Sonmarg"
    },
    {
      id: 8,
      name: "Pine Spring Resort",
      image: "/Images/PineSpringResort.jpg", //Image is in public/Images
      description: "Comfortable rooms thoughtfully designed for a relaxing experience.",
      rating: 4.5,
      location: "Pahalgam"
    },
    {
      id: 9,
      name: "The Chinar Resort & Spa",
      image: "/Images/ChinarResort.jpg", //Image is in public/Images
      description: "Elegant resort style accommodation amidst pristine natural beauty",
      rating: 4.6,
      location: "Pahalgam"
    }
  ];

  const jammuHotels = [
    {
      id: 1,
      name: "The Vaishvik",
      image: "/Images/TheVaishvik.jpg", //Image is in public/Images
      description: "Modern business hotel with premium amenities in the heart of Jammu city",
      rating: 4.3,
      location: "Jammu City"
    },
    {
      id: 2,
      name: "Hotel Le ROI",
      image: "/Images/LeROI.jpg", //Image is in public/Images
      description: "Upscale city hotel offering refined hospitality and convenient location",
      rating: 4.2,
      location: "Jammu City"
    },
    {
      id: 3,
      name: "Fortune Inn Riviera",
      image: "/Images/FortuneInnRiviera.jpg", //Image is in public/Images
      description: "Elegant accommodation perfect for pilgrims visiting Vaishno Devi shrine",
      rating: 4.1,
      location: "Jammu"
    }
  ];

  const ladakhHotels = [
    {
      id: 1,
      name: "The Zen Ladakh",
      image: "/Images/TheZen.jpg", //Image is in public/Images
      description: "Serene boutique stay with traditional design and modern high-altitude amenities",
      rating: 4.5,
      location: "Leh"
    },
    {
      id: 2,
      name: "Grand Dragon Ladakh",
      image: "/Images/GrandDragon.jpg", //Image is in public/Images
      description: "Luxury hotel with world-class facilities in the heart of Leh valley",
      rating: 4.8,
      location: "Leh"
    },
    {
      id: 3,
      name: "The Himalayan Retreat",
      image: "/Images/HimalayanRetreat.jpg", //Image is in public/Images
      description: "Mountain resort providing comfort at high altitude with oxygen facilities",
      rating: 4.4,
      location: "Leh"
    }
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div className={styles.starsContainer}>
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={index < fullStars ? styles.starFilled : styles.starEmpty}
          />
        ))}
        {hasHalfStar && <span className={styles.halfStar}>½</span>}
      </div>
    );
  };

  const HotelCard = ({ hotel }) => (
    <motion.div
      className={styles.hotelCard}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div 
        className={styles.hotelImage}
        onClick={() => setSelectedImage({ url: hotel.image, name: hotel.name })}
        style={{ cursor: 'pointer' }}
      >
        <img src={hotel.image} alt={hotel.name} />
        <div className={styles.imageOverlay}></div>
      </div>
      <div className={styles.hotelContent}>
        <h3 className={styles.hotelName}>{hotel.name}</h3>
        <div className={styles.ratingRow}>
          {renderStars(hotel.rating)}
          <span className={styles.ratingNumber}>{hotel.rating}</span>
        </div>
        <div className={styles.locationTag}>
          <FaMapMarkerAlt />
          <span>{hotel.location}</span>
        </div>
        <p className={styles.hotelDescription}>{hotel.description}</p>
      </div>
    </motion.div>
  );

  return (
    <div className={styles.accommodation}>
      <section className={styles.heroSection}>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Accommodation</h1>
          <p>Premium stays across Kashmir, Jammu & Ladakh</p>
        </motion.div>
      </section>

      {/* Kashmir Hotels Section */}
      <section className={styles.regionSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Kashmir Hotels</h2>
            <p>Luxury and comfort in the paradise on earth</p>
          </motion.div>

          <div className={styles.hotelsGrid}>
            {kashmirHotels.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
        </div>
      </section>

      {/* Jammu Hotels Section */}
      <section className={styles.regionSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Jammu Hotels</h2>
            <p>Modern comfort in the city of temples</p>
          </motion.div>

          <div className={styles.hotelsGrid}>
            {jammuHotels.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
        </div>
      </section>

      {/* Ladakh Hotels Section */}
      <section className={styles.regionSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Ladakh Hotels</h2>
            <p>High-altitude luxury in the land of passes</p>
          </motion.div>

          <div className={styles.hotelsGrid}>
            {ladakhHotels.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <motion.div
          className={styles.ctaContent}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Need Help Choosing?</h2>
          <p>Contact us and we'll help you find the perfect accommodation for your journey</p>
        </motion.div>
      </section>

      {/* Image Preview Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className={styles.imagePreviewModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className={styles.previewContent}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.closePreviewBtn}
                onClick={() => setSelectedImage(null)}
              >
                <FaTimes />
              </button>
              <img src={selectedImage.url} alt={selectedImage.name} />
              <div className={styles.previewLabel}>
                <h3>{selectedImage.name}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accommodation;