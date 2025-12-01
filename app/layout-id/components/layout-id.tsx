"use client";
import { motion } from "motion/react";
import { useState } from "react";
import "../styles.css";
 
export default function LayoutId() {
  const [showSecond, setShowSecond] = useState(false);
 
  return (
    <div className="wrapper">
      <motion.button layout className="button cursor-pointer text-black" onClick={() => setShowSecond((s) => !s)}>
        Animate
      </motion.button>
      {showSecond ? (
        <motion.div layoutId="rectangle" className="second-element" style={{ borderRadius: 12 }} />
      ) : (
        <motion.div layoutId="rectangle" className="element" style={{ borderRadius: 12 }} />
      )}
    </div>
  );
}

// inline border radius is better for animating than tailwind classes