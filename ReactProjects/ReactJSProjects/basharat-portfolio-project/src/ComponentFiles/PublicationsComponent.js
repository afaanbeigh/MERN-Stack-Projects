import React from "react";
import { motion } from "framer-motion";
import "../CSSFiles/Publications.css";

function Publications() {

  const publications = [
    {
      title: "Bayesian Game Formulation of Power Allocation in Multiple Access Wiretap Channel with Incomplete CSI",
      authors: "Basharat Rashid, Majed Haddad, Shahid M Shah",
      venue: "National Conference on Communications (NCC)",
      year: "2024",
      link: "https://ieeexplore.ieee.org/abstract/document/10485747"
    },
    {
      title: "A Convex-Concave Procedure-Based Algorithm for PAPR Minimization in MC-OTFS-Based Communication Systems",
      authors: "Ankush Koundal, Basharat Rashid, Aakash Arora, Prabhu Babu",
      venue: "IEEE Communications Letters",
      year: "2025",
      link: "https://ieeexplore.ieee.org/abstract/document/11316596"
    }
  ];

  return (
    <div className="page-wrap">
      <div className="pub-container">

        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="pub-heading"
        >
          Publications
        </motion.h1>

        {publications.map((pub, i) => (
          <motion.div
            key={i}
            className="glass-card pub-card"
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <h3>{pub.title}</h3>
            <p className="pub-authors">{pub.authors}</p>
            <p className="pub-venue">{pub.venue}, {pub.year}</p>

            <a href={pub.link} target="_blank" rel="noopener noreferrer">
              View
            </a>
          </motion.div>
        ))}

      </div>
    </div>
  );
}

export default Publications;