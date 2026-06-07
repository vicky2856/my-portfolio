import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Position of cursor dot
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth springs for cursor outer ring
  const ringX = useSpring(cursorX, { damping: 30, stiffness: 250, mass: 0.5 });
  const ringY = useSpring(cursorY, { damping: 30, stiffness: 250, mass: 0.5 });

  useEffect(() => {
    // Hide default cursor by adding class to html tag on desktop
    const checkDevice = () => {
      const isMobile = window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 1024;
      if (!isMobile) {
        document.documentElement.classList.add("custom-cursor-enabled");
        setIsVisible(true);
      } else {
        document.documentElement.classList.remove("custom-cursor-enabled");
        setIsVisible(false);
      }
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Event delegation to detect hovering on links/buttons/inputs/cards
    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = 
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.tagName === "INPUT" || 
        target.tagName === "TEXTAREA" || 
        target.closest("a") || 
        target.closest("button") || 
        target.closest('[role="button"]') ||
        target.closest(".interactive-hover");

      setIsHovered(!!isInteractive);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.documentElement.classList.remove("custom-cursor-enabled");
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Halo ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-cyan-400 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        style={{
          x: ringX,
          y: ringY,
        }}
        animate={{
          scale: isClicking ? 0.8 : isHovered ? 1.6 : 1,
          borderColor: isHovered ? "#8B5CF6" : "#06B6D4", // purple when hovered, cyan normal
          backgroundColor: isHovered ? "rgba(139, 92, 246, 0.1)" : "rgba(6, 182, 212, 0)",
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.2 }}
      />
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-cyan-400 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: isClicking ? 1.2 : isHovered ? 0.4 : 1,
          backgroundColor: isHovered ? "#8B5CF6" : "#06B6D4",
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />
    </>
  );
};
