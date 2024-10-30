// timerLogic.js
// "use client"
import { useState, useEffect } from "react";

// Calculate time left function, separate from the component to avoid calling hooks inside it
const calculateTimeLeft = (targetDate) => {
  const diff = new Date(targetDate) - new Date();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
  return { days, hours, minutes, seconds };
};

const OfferTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [targetDate]);

  return timeLeft;
};

export default OfferTimer;




// export const OfferTimer = (mainDate) => {
//         const diff = mainDate - new Date();
//         const days = Math.floor(diff / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
//         const seconds = Math.floor((diff % (1000 * 60)) / 1000);
//   return {
//    days,
//    hours,
//    minutes,
//    seconds,
// };
// };



