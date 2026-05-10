import React from "react";
import { motion } from "framer-motion";
import "../CSSFiles/Courses.css";

const courses = [
  "ELL 711 — Signal Theory",
  "ELL 712 — Digital Communication",
  "ELL 710 — Coding Theory",
  "ELL 719 — Detection and Estimation Theory",
  "ELL 725 — Wireless Communication",
  "CRL 734 — Convex Optimization"
];

function Courses() {
  return (
    <div className="page-wrap">
      <div className="courses-container">

        {/* Heading — same motion style */}
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="courses-heading"
        >
          Completed Coursework at IIT Delhi
        </motion.h1>

        {/* Column list */}
        <div className="courses-list">
          {courses.map((course, i) => (
            <motion.div
              key={i}
              className="glass-card course-card"
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <span className="course-index">{i + 1}.</span>
              <span className="course-text">{course}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Courses;