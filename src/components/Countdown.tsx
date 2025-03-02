import { useEffect, useState } from "react";
import padZero from "../utils/padZero";
import dates from "../data/dates";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState<
    | {
        hours: number;
        minutes: number;
        seconds: number;
      }
    | null
    | "endOfTheDay"
  >(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const today = dates.find((day) => day.sehri.getDate() === now.getDate());
      const nextSehri = dates.find((day) => day.sehri > now)?.sehri;
      const nextIftar = today?.iftar;

      if (!nextSehri && !nextIftar) {
        setTimeLeft(null);
        return;
      }

      let targetTime = nextSehri;

      if (today) {
        if (now > today.sehri) {
          targetTime = today.iftar;
        }
        const endOfTheDay = "endOfTheDay";
        if (now > today.iftar) return setTimeLeft(endOfTheDay);
      }

      if (targetTime) {
        const diff = targetTime.getTime() - now.getTime();
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        setTimeLeft({ hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (timeLeft === "endOfTheDay") return <span>दिन का अंत</span>;

  if (!timeLeft) return <span className="animate-pulse">Loading...</span>;
  // if (sehri time has passed) show iftar time
  return (
    <div>
      <span>
        {timeLeft.hours >= 12 ? "इफ़्तार" : "सेहरी"} में समय बाकी ⌛ :{" "}
      </span>
      <span>{padZero(timeLeft.hours.toString())}:</span>
      <span>{padZero(timeLeft.minutes.toString())}:</span>
      <span>{padZero(timeLeft.seconds.toString())}</span>
    </div>
  );
};

export default Countdown;
