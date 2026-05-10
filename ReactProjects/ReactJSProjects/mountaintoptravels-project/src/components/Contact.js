import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaWhatsapp, FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  const contactMethods = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "mountaintoptravelagent@gmail.com",
      link: "mailto:mountaintoptravelagent@gmail.com",
      color: "#667eea"
    },
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      value: "+91 7006092707",
      link: "https://wa.me/917006092707",
      color: "#25D366"
    },
    {
      icon: <FaFacebook />,
      title: "Facebook",
      value: "Follow us on Facebook",
      link: "https://www.facebook.com/moutaintoptravel",
      color: "#1877F2"
    },
    {
      icon: <FaInstagram />,
      title: "Instagram",
      value: "Follow us on Instagram",
      link: "https://www.instagram.com/mountain_top_travels?igsh=MXNiOGJ3c2JvdndsZA==",
      color: "#E4405F"
    }
  ];

  const officeInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Address",
      value: "Nowshera Srinagar, Near Petrol Pump - 190011"
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+91 7006092707"
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "mountaintoptravelagent@gmail.com"
    }
  ];

  return (
    <div className={styles.contact}>
      <section className={styles.heroSection}>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Get in Touch</h1>
          <p>We're here to help you plan your perfect journey</p>
        </motion.div>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Connect With Us</h2>
            <p>Choose your preferred way to reach out</p>
          </motion.div>

          <div className={styles.contactGrid}>
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactCard}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div
                  className={styles.iconWrapper}
                  style={{ background: method.color }}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {method.icon}
                </motion.div>
                <h3>{method.title}</h3>
                <p>{method.value}</p>
                <span className={styles.arrow}>→</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.officeSection}>
        <div className={styles.container}>
          <div className={styles.officeGrid}>
            <motion.div
              className={styles.officeInfo}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2>Visit Our Office</h2>
              <p className={styles.officeDescription}>
                Our doors are open to help you plan your next adventure. 
                Feel free to visit us or reach out through any of the channels above.
              </p>

              <div className={styles.infoList}>
                {officeInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className={styles.infoItem}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className={styles.infoIcon}>{info.icon}</div>
                    <div>
                      <h4>{info.title}</h4>
                      <p>{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className={styles.mapContainer}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className={styles.mapPlaceholder}>
                <FaMapMarkerAlt />
                <p>Nowshera, Srinagar</p>
                <p className={styles.mapSubtext}>Kashmir, India</p>
              </div>
            </motion.div>
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
          <h2>Ready to Start Your Adventure?</h2>
          <p>Let's create unforgettable memories together</p>
          <motion.p
            className={styles.ctaLink}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a href="https://wa.me/917006092707" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp /> Chat on WhatsApp
            </a>
          </motion.p>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;