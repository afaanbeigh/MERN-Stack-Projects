import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaUsers, FaGlobeAsia, FaHeart } from 'react-icons/fa';
import styles from '../styles/About.module.css';

const About = () => {
  const stats = [
    { icon: <FaAward />, number: "5+", label: "Years Experience" },
    { icon: <FaUsers />, number: "2K+", label: "Happy Travelers" },
    { icon: <FaGlobeAsia />, number: "50+", label: "Destinations" },
    { icon: <FaHeart />, number: "100%", label: "Satisfaction Rate" }
  ];

  const values = [
    {
      title: "Our Mission",
      description: "To provide exceptional travel experiences that create lasting memories while showcasing the unparalleled beauty of Kashmir, Ladakh, and Jammu regions."
    },
    {
      title: "Our Vision",
      description: "To be the most trusted and preferred travel partner for anyone seeking authentic mountain experiences and cultural immersion in the Himalayan region."
    },
    {
      title: "Our Values",
      description: "We prioritize safety, authenticity, sustainability, and customer satisfaction in every aspect of our services, treating every traveler as family."
    }
  ];

  return (
    <div className={styles.about}>
      <section className={styles.heroSection}>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>About MountainTop</h1>
          <p>Your Gateway to Himalayan Adventures</p>
        </motion.div>
      </section>

      <section className={styles.storySection}>
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <motion.div
              className={styles.storyContent}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2>Our Story</h2>
              <p>
                MountainTop is a Srinagar-based travel company established in 2020 with the goal 
                of providing reliable, comfortable, and well-planned travel experiences across 
                Kashmir and Ladakh. Though a modern venture, we are built on strong local knowledge, 
                professional service standards, and a passion for tourism.
              </p>
              <p>
                Since our inception, we have focused on serving domestic travelers with personalized 
                attention, transparent pricing, and carefully designed tour packages. Our services 
                include Kashmir Holiday Packages, Leh Ladakh Tour Packages, and fully customized 
                travel plans based on each client's needs and preferences.
              </p>
              <p>
                With a growing network of trusted local partners and service providers, we are 
                committed to making every journey smooth, enjoyable, and memorable, ensuring 
                each guest experiences the true beauty and hospitality of the region.
              </p>
            </motion.div>

            <motion.div
              className={styles.storyImage}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1539401357055-d283d71e5fae?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Kashmir landscape" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className={styles.statsSection}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className={styles.statCard}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className={styles.statIcon}>{stat.icon}</div>
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <motion.h2
            className={styles.valuesTitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What Drives Us
          </motion.h2>

          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <motion.div
                key={index}
                className={styles.valueCard}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.certificationSection}>
        <motion.div
          className={styles.certificationContent}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Certified & Trusted</h2>
          <p>
            We are proud to be registered with the Department of Tourism and certified by various 
            tourism authorities. Our commitment to quality and excellence has earned us the trust 
            of thousands of travelers worldwide.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default About;