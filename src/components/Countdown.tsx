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
    | "dayEnd"
    | null
  >(null);

  const currentTime = new Date();

  const today = dates.find(
    (day) => day.sehri.getDate() === new Date().getDate()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (!today) return;

      const currentTime = new Date();

      const calculateTimeLeft = (targetTime: Date) => {
        const diff = targetTime.getTime() - currentTime.getTime();
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeft({ hours, minutes, seconds });
      };

      if (currentTime < today.sehri) {
        calculateTimeLeft(today.sehri);
        return;
      }

      if (currentTime < today.iftar) {
        calculateTimeLeft(today.iftar);
        return;
      }

      setTimeLeft("dayEnd");
      return;
    }, 1000);

    return () => clearInterval(interval);
  }, [today]);

  if (!today) return null;

  if (!timeLeft) return <span className="animate-pulse">Loading...</span>;

  if (timeLeft === "dayEnd") return;

  const CountdownDisplay = ({ label }: { label: string }) => (
    <div>
      <span>{label} ⌛ : </span>
      <span>{padZero(timeLeft.hours.toString())}:</span>
      <span>{padZero(timeLeft.minutes.toString())}:</span>
      <span>{padZero(timeLeft.seconds.toString())}</span>
    </div>
  );

  if (currentTime < today.sehri) {
    return <CountdownDisplay label="सेहरी में समय बाकी" />;
  }

  if (currentTime < today.iftar) {
    return <CountdownDisplay label="इफ़्तार में समय बाकी" />;
  }
};

export default Countdown;
