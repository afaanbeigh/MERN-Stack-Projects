import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaFacebook />, url: 'https://www.facebook.com/moutaintoptravel', name: 'Facebook' },
    { icon: <FaInstagram />, url: 'https://www.instagram.com/mountain_top_travels?igsh=MXNiOGJ3c2JvdndsZA==', name: 'Instagram' },
    { icon: <FaWhatsapp />, url: 'https://wa.me/917006092707', name: 'WhatsApp' }
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Accommodation', path: '/accommodation' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>MountainTop</h3>
          <p className={styles.footerDescription}>
            Your trusted travel partner for exploring the breathtaking beauty of Kashmir, 
            Ladakh, and Jammu. Delivering exceptional travel experiences since 2020.
          </p>
          <div className={styles.socialLinks}>
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Quick Links</h3>
          <ul className={styles.footerLinks}>
            {quickLinks.map((link, index) => (
              <motion.li 
                key={index}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link to={link.path}>{link.name}</Link>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Contact Info</h3>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <FaMapMarkerAlt className={styles.contactIcon} />
              <p>Nowshera Srinagar, Near Petrol Pump - 190011</p>
            </div>
            <div className={styles.contactItem}>
              <FaPhone className={styles.contactIcon} />
              <a href="tel:+917006092707">+91 7006092707</a>
            </div>
            <div className={styles.contactItem}>
              <FaEnvelope className={styles.contactIcon} />
              <a href="mailto:mountaintoptravelagent@gmail.com">mountaintoptravelagent@gmail.com</a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; {currentYear} MountainTop. All rights reserved.</p>
        <p className={styles.developer}>Designed & Developed by Afaan Beigh</p>
      </div>
    </footer>
  );
};

export default Footer;