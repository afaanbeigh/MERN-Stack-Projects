import React from "react";
import { motion } from "framer-motion";
import "../CSSFiles/Contact.css";

function Contact() {
  return (
    <div className="page-wrap">
      <div className="contact-container">

        {/* Heading — rotate + fade */}
        <motion.h1
          initial={{ opacity: 0, y: -40, rotate: -2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.7 }}
          className="contact-heading"
        >
          Contact
        </motion.h1>

        {/* Card — scale + blur fade */}
        <motion.div
          className="glass-card contact-card"
          initial={{ opacity: 0, scale: 0.92, filter: "blur(6px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
        >
          <div className="contact-info">

            <h3>Contact Information</h3>

            <p>
              For academic collaboration, research discussions, or professional
              communication, please reach out through the following channels.
            </p>

            <div className="contact-lines">

              <div className="contact-row">
                <span className="label">Address</span>
                <span>
                  Centre for Applied Research in Electronics (CARE) <br />
                  IIT Delhi, New Delhi — 110016, India
                </span>
              </div>

              <div className="contact-row">
                <span className="label">Email</span>
                <a href="mailto:basharat.rashid@care.iitd.ac.in" className="contact-link">
                  basharat.rashid@care.iitd.ac.in
                </a>
              </div>

              <div className="contact-row">
                <span className="label">LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/basharat-rashid-6286a1b2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  linkedin.com/in/basharat-rashid
                </a>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </div>
  );
}

export default Contact;