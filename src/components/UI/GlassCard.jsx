import { motion } from "framer-motion";

export const GlassCard = ({
  children,
  className = "",
  hover = true,
  delay = 0,
  yOffset = 30,
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.16, 1, 0.3, 1] // Custom easeOutExpo
      }}
      className={`glass-card rounded-2xl ${
        hover ? "glass-card-hover" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};
