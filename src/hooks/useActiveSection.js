import { useState, useEffect } from "react";

export const useActiveSection = (sectionIds = [], options = { rootMargin: "-30% 0px -60% 0px", threshold: 0 }) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (sectionIds.length === 0) return;

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, options);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [sectionIds, options]);

  return activeSection;
};
