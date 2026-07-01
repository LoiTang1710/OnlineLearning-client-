import type React from "react";
import { cn } from "../lib/utils.ts";


const buttonVariants = {
  primary: "bg-primary text-white hover:bg-tertiary",
  secondary: "bg-secondary text-tertiary hover:bg-secondary/60",
  inverted: "bg-tertiary text-white hover:bg-primary",
  outlined:
    "bg-transparent border border-gray-500 text-tertiary hover:bg-gray-50",
};
const buttonSizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-base",
  lg: "px-6 py-3 text-lg",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variants?: keyof typeof buttonVariants;
  size?: keyof typeof buttonSizes;
}
export const Button: React.FC<ButtonProps> = ({
  className,
  variants = "primary",
  size = "md",
  children,
  ...props
}) => {
  return (
    <button
      className={cn(
        "font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:opacity-50 disabled:cursor-not-allowed",
        buttonVariants[variants],
        buttonSizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
