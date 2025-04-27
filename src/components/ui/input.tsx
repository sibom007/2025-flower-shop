import * as React from "react";
import { cn } from "@/lib/utils";

// Define variants as a mapping
const variantStyles = {
  primary:
    "w-full p-2 border border-orangeTheme-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orangeTheme-400",
  secondary: "border-blue-300 focus:ring-blue-400",
  danger: "border-red-300 focus:ring-red-400",
};

function Input({
  className,
  type,
  variant = "primary",
  ...props
}: React.ComponentProps<"input"> & {
  variant?: "primary" | "secondary" | "danger";
}) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "w-full p-2 rounded-md focus:outline-none",
        variantStyles[variant], // Apply variant-specific styles
        className // Combine with any additional passed className
      )}
      {...props}
    />
  );
}

export { Input };
