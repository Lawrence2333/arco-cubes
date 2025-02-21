import React from "react";
import * as Cubes from "arco-cubes-basic";
import { cn } from "arco-cubes-basic";

interface ContactEmailProps {
  datas: {
    card_type: "large" | "small";
    email: string;
    title?: string;
    description?: string;
    use_card_radius?: boolean;
  };
}

export default function ContactEmail({ datas }: ContactEmailProps) {
  const { email, title, description, card_type, use_card_radius } = datas;
  const icon_url =
    "https://public.arco.ai/arco-images/cube/cube-contact-mail.svg";

  return (
    <Cubes.SectionCard
      className={cn(
        "flex flex-col items-center gap-3",
        card_type === "large"
          ? "justify-center py-6 px-3"
          : "justify-between flex-row gap-2",
        !use_card_radius && "rounded-full"
      )}
    >
      <img
        src={icon_url}
        alt="Contact Email"
        className={cn(
          card_type === "large"
            ? "w-30 h-30"
            : "w-9 h-9 rounded-full bg-secondary p-1"
        )}
      />
      <div
        className={cn(
          "flex flex-col gap-0.5",
          card_type !== "large" && "w-full"
        )}
      >
        <div
          className={cn(
            "text-on-primary leading-relaxed w-full font-tertiary font-secondary text-left text-base italic break-all line-clamp-1",
            card_type === "large" && "text-3xl text-center"
          )}
        >
          {card_type !== "large" ? email : title}
        </div>
        {card_type === "large" && (
          <div className="text-on-primary/70 font-primary text-base break-all line-clamp-2 text-center">
            {description}
          </div>
        )}
      </div>
      <Cubes.Link
        href={`mailto:${email}`}
        className={cn(
          "bg-tertiary px-6 h-10 rounded-full flex items-center justify-center",
          card_type === "large"
            ? "max-w-[240px]"
            : "px-3 shrink-0 max-w-[120px]"
        )}
      >
        <div className="text-on-tertiary font-secondary break-all line-clamp-1">
          {card_type === "large" ? email : title}
        </div>
      </Cubes.Link>
    </Cubes.SectionCard>
  );
}
