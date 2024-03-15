import { useEffect, useState } from "react";
import ClipBox from "../components/ClipBox";
import { motion } from "framer-motion";
const TimerLabel = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countDownDate = new Date("March 18, 2024 22:00:00").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance <= 0) {
        // Timer finished
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
        setTimeout(updateTimer, 1000);
      }
    };

    updateTimer();
  }, []);

  return (
    <div className="w-full py-8">
      <div className="--container w-[90%] md:w-[80%] mx-auto flex flex-col gap-8 md:gap-0 md:flex-row md:justify-between">
        <ClipBox>
          <div className="text-lg md:text-3xl font-grotesk  h-full text-white flex flex-col items-center justify-center">
            <p>Join us on 18-19</p>
            <p>March</p>
          </div>
        </ClipBox>
        <div className="flex justify-between md:justify-start md:gap-12 text-[#e0e0e080] md:mr-12">
          <span className="flex flex-col items-center gap-4">
            <motion.div
              className="text-bright text-5xl md:text-8xl font-medium font-groteskb"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {timeLeft.days}
            </motion.div>
            <p>Days</p>
          </span>
          <span className="flex flex-col items-center gap-4">
            <motion.div
              className="text-bright text-5xl md:text-8xl font-medium font-groteskb"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              {timeLeft.hours}
            </motion.div>
            <p>Hours</p>
          </span>
          <span className="flex flex-col items-center gap-4">
            <motion.div
              className="text-bright text-5xl md:text-8xl font-medium font-groteskb"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {timeLeft.minutes}
            </motion.div>
            <p>Minutes</p>
          </span>
          <span className="flex flex-col items-center gap-4">
            <motion.div
              className="text-bright text-5xl md:text-8xl font-medium font-groteskb  md:w-32 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.75 }}
            >
              {timeLeft.seconds}
            </motion.div>
            <p>Seconds</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TimerLabel;
