import React from "react";
import { cn } from "../lib/utils";
import Link from "./Link";

interface SectionCardProps
  extends React.HTMLAttributes<HTMLDivElement | HTMLAnchorElement> {
  children: React.ReactNode;
  className?: string;
  bgEnable?: boolean;
  href?: string;
}

export default function SectionCard({
  children,
  className,
  bgEnable = true,
  href,
  ...props
}: SectionCardProps) {
  const classNames = cn(
    "w-full",
    bgEnable && "border-card shadow-card bg-primary rounded-3xl p-3",
    className
  );
  return href ? (
    <Link href={href} className={classNames} {...props}>
      {children}
    </Link>
  ) : (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
}
