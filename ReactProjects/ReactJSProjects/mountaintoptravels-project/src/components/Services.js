import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import { 
  FaShieldAlt, FaMapMarkedAlt, FaCar, FaUtensils, FaCamera, FaMountain,
  FaSkiing, FaWater, FaUmbrellaBeach, FaShoppingBag, FaHiking, FaSnowflake
} from 'react-icons/fa';
import styles from '../styles/Services.module.css';

const Services = () => {
  const coreServices = [
    {
      icon: <FaShieldAlt />,
      title: "Safety & 24/7 Emergency Support",
      description: "24/7 emergency help and continuous safety support to keep you safe throughout your entire journey."
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "Guided Tours",
      description: "Expert local guides who bring destinations to life with fascinating stories and insider knowledge."
    },
    {
      icon: <FaCar />,
      title: "Transportation Services",
      description: "Comfortable, well-maintained vehicles with experienced drivers for safe and convenient travel."
    },
    {
      icon: <FaUtensils />,
      title: "Culinary Experiences",
      description: "Authentic Kashmiri cuisine, local delicacies, and dining at the finest restaurants in the region."
    },
    {
      icon: <FaCamera />,
      title: "Photography Tours",
      description: "Specially curated routes to capture breathtaking landscapes and create lasting visual memories."
    },
    {
      icon: <FaMountain />,
      title: "Mountain Adventures",
      description: "Trekking, mountaineering, and expedition packages for adventure enthusiasts of all levels."
    }
  ];

  const activities = [
    {
      icon: <FaSkiing />,
      title: "Skiing in Gulmarg",
      description: "Experience world-class skiing on pristine Himalayan slopes with professional instructors."
    },
    {
      icon: <FaWater />,
      title: "River Rafting",
      description: "Thrilling white-water rafting adventures in Pahalgam's scenic rivers."
    },
    {
      icon: <FaUmbrellaBeach />,
      title: "Shikara Rides",
      description: "Peaceful boat rides on Dal Lake with stunning views of the surrounding mountains."
    },
    {
      icon: <FaHiking />,
      title: "Trekking Expeditions",
      description: "Multi-day treks through pristine valleys, meadows, and high-altitude passes."
    },
    {
      icon: <FaSnowflake />,
      title: "Snow Activities",
      description: "Snowboarding, sledding, and snow games in Kashmir's winter wonderland."
    },
    {
      icon: <FaShoppingBag />,
      title: "Shopping Tours",
      description: "Guided visits to local markets for authentic handicrafts, carpets, and souvenirs."
    }
  ];



  return (
    <div className={styles.services}>
      <section className={styles.heroSection}>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Our Services</h1>
          <p>Comprehensive solutions for unforgettable journeys</p>
        </motion.div>
      </section>

      <section className={styles.coreServicesSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Core Services</h2>
            <p>Everything you need for a perfect vacation</p>
          </motion.div>

          <div className={styles.servicesGrid}>
            {coreServices.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.activitiesSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Adventure Activities</h2>
            <p>Thrilling experiences for adventure seekers</p>
          </motion.div>

          <div className={styles.servicesGrid}>
            {activities.map((activity, index) => (
              <ServiceCard
                key={index}
                icon={activity.icon}
                title={activity.title}
                description={activity.description}
                delay={index * 0.1}
              />
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
          <h2>Need a Custom Package?</h2>
          <p>We can create a personalized itinerary tailored to your preferences and budget</p>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;