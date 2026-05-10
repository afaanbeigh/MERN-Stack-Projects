import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../Images/DisplayPicture.png';
import googleSchIcon from '../Images/GoogleScholarImage.png';
import linkedinIcon from '../Images/LinkedInImage.png';
import '../CSSFiles/AboutMe.css';

function AboutMe() {
  return (
    <div className="page-wrap">
        <div className="container">
          {/* LEFT SIDE */}
          <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="glass-card left-card"
          >
            <div className="left-side">
              <h1>Hi!</h1>

              <p>
                I am a PhD scholar at the Centre for Applied Research in Electronics (CARE),
                IIT Delhi, where I work under the supervision of Prof.&nbsp;
                <a href="https://scholar.google.com/citations?user=1rU0mxUAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="plain-link">
                  Prabhu Babu
                </a>&nbsp;
                and Prof.&nbsp;
                <a href="https://scholar.google.com/citations?user=pl1PcdIAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="plain-link">
                  Aakash Arora
                </a>
                . I closely collaborate with Prof.&nbsp;
                <a href="https://en.wikipedia.org/wiki/Peter_Stoica" target="_blank" rel="noopener noreferrer" className="plain-link">
                  Peter Stoica
                </a>&nbsp;
                (Uppsala University, Sweden). Prior to this, I completed my M.Tech in
                Communication and IT from NIT Srinagar.
              </p>

              <p>
                My research lies at the intersection of optimization, signal processing, and
                wireless communications with emphasis on OTFS modulation. Specifically, I work on:
              </p>

              <ul>
                <li>
                  Designing pilot sequence that generate OTFS waveforms with thumbtack-shaped
                  auto-ambiguity functions and optimized PAPR.
                </li>

                <li>
                  Developing computationally efficient algorithms for sparse wireless
                  channel estimation in OTFS systems.
                </li>
              </ul>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="glass-card right-card"
          >
            <div className="right">
              <div className="right-side">
                <img src={profileImg} alt="BasharatRashid" />
              </div>

              <div className="right-text">
                <h3>Basharat Rashid</h3>

                <div className="icon-row">
                  <a href="https://scholar.google.com/citations?user=JD2GeagAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                    <img src={googleSchIcon} alt="GoogleScholar" />
                  </a>

                  <a href="https://www.linkedin.com/in/basharat-rashid-6286a1b2/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinIcon} alt="LinkedIn" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
  );
}

export default AboutMe;