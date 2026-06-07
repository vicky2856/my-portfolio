import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

export const StatCounter = ({ value, suffix = "", prefix = "", duration = 2000 }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    // If the value is not a number, we just set it directly
    const targetNumber = parseFloat(value);
    if (isNaN(targetNumber)) {
      setDisplayValue(value);
      return;
    }

    if (!isInView) return;

    let start = 0;
    const end = targetNumber;
    const isFloat = value.toString().includes(".");
    const totalFrames = Math.round(duration / 16); // ~60fps
    const increment = (end - start) / totalFrames;
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      start += increment;
      if (frame >= totalFrames) {
        clearInterval(counter);
        setDisplayValue(end);
      } else {
        setDisplayValue(isFloat ? parseFloat(start.toFixed(2)) : Math.round(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [value, duration, isInView]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
};
