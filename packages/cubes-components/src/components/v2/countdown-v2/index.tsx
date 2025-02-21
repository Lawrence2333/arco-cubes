import React, { useState, useEffect } from "react";
import { cn } from "arco-cubes-basic";
import * as Cubes from "arco-cubes-basic";

interface DiscountCountdownProps {
  datas: {
    title: string;
    description?: string;
    deadline: string;
    jump_url?: string;
    show_background?: boolean;
    shape?: "square" | "circle";
  };
}

const DiscountCountdown = ({ datas }: DiscountCountdownProps) => {
  const {
    title,
    description,
    deadline,
    jump_url,
    show_background = false,
    shape = "square",
  } = datas;
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(deadline).getTime() - new Date().getTime();
      if (difference > 0) {
        setTimeLeft({
          hours: Math.floor(difference / (1000 * 60 * 60)),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, [deadline]);

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div
      className={`flex flex-col items-center justify-center bg-tertiary p-3 w-[66px] h-[66px] ${
        shape === "circle" ? "rounded-full" : "rounded-2xl"
      }`}
    >
      <div className="text-on-tertiary text-2xl font-bold">
        {value.toString().padStart(2, "0")}
      </div>
      <div className="text-on-tertiary/70 text-[10px]">{label}</div>
    </div>
  );

  return (
    <Cubes.SectionCard
      bgEnable={false}
      className={`flex gap-1 flex-col items-center justify-center rounded-3xl p-8 ${
        show_background ? "bg-primary shadow-card border-card" : ""
      }`}
      href={jump_url}
    >
      <div
        className={cn(
          "text-on-surface text-lg font-secondary font-tertiary break-all line-clamp-2 text-center",
          show_background && "text-on-primary"
        )}
      >
        {title}
      </div>
      <div
        className={cn(
          "text-on-surface/70 text-sm font-primary text-center break-all line-clamp-3",
          show_background && "text-on-primary/70"
        )}
      >
        {description}
      </div>
      <div className="flex gap-3 mt-4">
        <TimeBlock value={timeLeft.hours} label="HOURS" />
        <TimeBlock value={timeLeft.minutes} label="MINUTES" />
        <TimeBlock value={timeLeft.seconds} label="SECONDS" />
      </div>
    </Cubes.SectionCard>
  );
};

export default DiscountCountdown;
