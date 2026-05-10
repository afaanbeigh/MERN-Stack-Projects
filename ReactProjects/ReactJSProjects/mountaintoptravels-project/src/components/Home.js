import React from 'react';
import { motion } from 'framer-motion';
import Hero from './Hero';
import ServiceCard from './ServiceCard';
import { FaClipboardList, FaMapMarkedAlt, FaCar, FaUtensils, FaCamera, FaMountain } from 'react-icons/fa';
import styles from '../styles/Home.module.css';

const Home = () => {
  const services = [
    {
      icon: <FaClipboardList />,
      title: "Travel Planning",
      description: "Complete itinerary planning and booking assistance for hassle-free travel experiences."
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "Sightseeing Tours",
      description: "Expertly curated tours to the most breathtaking destinations in the region."
    },
    {
      icon: <FaCar />,
      title: "Transportation",
      description: "Reliable and comfortable vehicles for your entire journey with experienced drivers."
    },
    {
      icon: <FaUtensils />,
      title: "Local Cuisine",
      description: "Experience authentic Kashmiri flavors at the best restaurants and eateries."
    },
    {
      icon: <FaCamera />,
      title: "Photography Tours",
      description: "Capture stunning landscapes and memorable moments at picturesque locations."
    },
    {
      icon: <FaMountain />,
      title: "Adventure Activities",
      description: "Thrilling adventures including trekking, skiing, rafting, and paragliding."
    }
  ];

  const packages = [
    {
      title: "Kashmir Paradise",
      image: "https://images.unsplash.com/photo-1620293967466-36d1a62e353d?q=80&w=812&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Explore Dal Lake, Gulmarg, Pahalgam, and more"
    },
    {
      title: "Ladakh Adventure",
      image: "https://images.unsplash.com/photo-1648851460314-ba293ba2cdcf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Leh, Nubra Valley, Pangong Lake expedition"
    },
    {
      title: "Jammu Heritage",
      image: "https://images.unsplash.com/photo-1719377678428-d9bcec6976f3?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Visit Vaishno Devi and historical landmarks"
    }
  ];

  return (
    <div className={styles.home}>
      <Hero />

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.sectionHeader}
          >
            <h2 className={styles.sectionTitle}>Our Services</h2>
            <p className={styles.sectionSubtitle}>
              Comprehensive travel solutions tailored to make your journey unforgettable
            </p>
          </motion.div>

          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
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

      {/* Packages Section */}
      <section className={styles.packagesSection}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.sectionHeader}
          >
            <h2 className={styles.sectionTitle}>Popular Packages</h2>
            <p className={styles.sectionSubtitle}>
              Choose from our carefully crafted tour packages
            </p>
          </motion.div>

          <div className={styles.packagesGrid}>
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                className={styles.packageCard}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className={styles.packageImage}>
                  <img src={pkg.image} alt={pkg.title} />
                  <div className={styles.packageOverlay}></div>
                </div>
                <div className={styles.packageContent}>
                  <h3>{pkg.title}</h3>
                  <p className={styles.duration}>{pkg.duration}</p>
                  <p className={styles.description}>{pkg.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <motion.div
          className={styles.ctaContent}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Ready for an Adventure?</h2>
          <p>Let us help you plan your perfect getaway to the mountains</p>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;