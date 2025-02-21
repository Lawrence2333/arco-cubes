import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const rgb = (value: string) => {
  return `rgb(${value})`;
};

export const rgba = (value: string, alpha: number) => {
  return `rgba(${value}, ${alpha})`;
};

export const hexColor = (rgb: string) => {
  if (!rgb) return "";
  const [r, g, b] = rgb.split(" ").map(Number);
  if (r === undefined || g === undefined || b === undefined) return "";
  if (isNaN(r) || isNaN(g) || isNaN(b)) return "";
  return `#${r.toString(16).padStart(2, "0")}${g
    .toString(16)
    .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
};
