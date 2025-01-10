import React, { useState, useEffect } from "react";

const MultiLanguageText = () => {
  // Array of text in different languages
  const texts = [
    "Hello.", // English
    "नमस्ते", // Hindi
    "ਹੈਲੋ", // Punjabi
    "ہیلو۔",
    "নমস্কাৰ", // Assamese (Seven Sisters)
    "வணக்கம்", // Tamil (South India)
    "হ্যালো", // Bengali
  ];

  // State to manage the current text and its visibility
  const [currentText, setCurrentText] = useState(texts[0]);
  const [isVisible, setIsVisible] = useState(true);

  // Index to track the current text in the array
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Interval to change the text every 3 seconds
    const interval = setInterval(() => {
      // Fade out the current text
      setIsVisible(false);

      // Wait for the fade-out animation to complete, then update the text
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % texts.length); // Cycle through the array
        setCurrentText(texts[(index + 1) % texts.length]); // Update to the next text
        setIsVisible(true); // Fade in the new text
      }, 500); // Delay matches the CSS transition duration
    }, 2000); // Change text every 3 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [index, texts]);

  return (
      <span
        className={`relative text-5xl sm:text-7xl lg:text-9xl w-fit transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {currentText}
      </span>
  );
};

export default MultiLanguageText;