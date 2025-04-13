import { clsx, type ClassValue } from "clsx";
import { Variants } from "motion/react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function formatPrice(price: number) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return formatter.format(price);
}

export function anime(variants: Variants) {
  return {
    initial: "initial",
    animate: "animate",
    exit: "exit",
    ...variants,
  };
}
