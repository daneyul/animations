"use client";
import { motion } from "motion/react";
import { useState } from "react";
import useMeasure from 'react-use-measure'
import "../styles.css";

export default function ToggleHeight() {
  const [showExtraContent, setShowExtraContent] = useState(false);
  const [ref, bounds] = useMeasure();

  return (
    <div className="wrapper">
      <button className="button" onClick={() => setShowExtraContent((b) => !b)}>
        Toggle height
      </button>
      <motion.div
        animate={{ height: bounds.height }}
        className="element">
        <div ref={ref} className="inner">
          <h1>Fake Family Drawer</h1>
          <p>
            This is a fake family drawer. Animating height is tricky, but
            satisfying when it works.
          </p>
          {showExtraContent ? (
            <p>This extra content will change the height of the drawer. Some even more content to make the drawer taller and taller and taller...</p>
          ) : null}
        </div>
      </motion.div>
    </div>
  );
}