import { useEffect, useState } from "react";
import ClipBox from "../components/ClipBox";

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
      <div className="--container w-[90%] mx-auto flex justify-between">
        <ClipBox>
          <div className="text-3xl font-grotesk  h-full text-white flex flex-col items-center justify-center">
            <p>Join us on 18-19</p>
            <p>March</p>
          </div>
        </ClipBox>
        <div className="flex gap-12 text-[#e0e0e080] mr-12">
          <span className="flex flex-col items-center gap-4">
            <h1 className="text-bright text-8xl font-medium font-groteskb">
              {timeLeft.days}
            </h1>
            <p>Days</p>
          </span>
          <span className="flex flex-col items-center gap-4">
            <h1 className="text-bright text-8xl font-medium font-groteskb">
              {timeLeft.hours}
            </h1>
            <p>Hours</p>
          </span>
          <span className="flex flex-col items-center gap-4">
            <h1 className="text-bright text-8xl font-medium font-groteskb">
              {timeLeft.minutes}
            </h1>
            <p>Minutes</p>
          </span>
          <span className="flex flex-col items-center gap-4">
            <h1 className="text-bright text-8xl font-medium font-groteskb w-32 text-center">
              {timeLeft.seconds}
            </h1>
            <p>Seconds</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TimerLabel;
