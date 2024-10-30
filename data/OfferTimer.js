
import { useState, useEffect } from "react";


const calculateTimeLeft = (targetDate) => {
  const diff = new Date(targetDate) - new Date();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
  return { days, hours, minutes, seconds };
};

export const OfferTimer = (targetDate) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      const updateTimeLeft = () => {
        setTimeLeft(calculateTimeLeft(targetDate));
      };

     
      updateTimeLeft();

      const intervalId = setInterval(updateTimeLeft, 1000);

      return () => clearInterval(intervalId);
    }
  }, [targetDate, mounted]);

  return mounted ? timeLeft : null;
};

export default OfferTimer;








