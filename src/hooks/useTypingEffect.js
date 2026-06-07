import { useState, useEffect } from "react";

export const useTypingEffect = (
  strings = [],
  typingSpeed = 80,
  erasingSpeed = 40,
  delayBetween = 2000
) => {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (strings.length === 0) return;

    let timer;
    const fullText = strings[currentStringIndex];

    if (!isDeleting) {
      // Typing phase
      if (currentText !== fullText) {
        timer = setTimeout(() => {
          setCurrentText(fullText.substring(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        // Full text typed, wait before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetween);
      }
    } else {
      // Deleting phase
      if (currentText !== "") {
        timer = setTimeout(() => {
          setCurrentText(fullText.substring(0, currentText.length - 1));
        }, erasingSpeed);
      } else {
        // Fully deleted, move to the next string
        setIsDeleting(false);
        setCurrentStringIndex((prev) => (prev + 1) % strings.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentStringIndex, strings, typingSpeed, erasingSpeed, delayBetween]);

  return currentText;
};
