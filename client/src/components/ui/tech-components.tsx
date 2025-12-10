import { cn } from "@/lib/utils";
import React from "react";

interface TechButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export const TechButton = React.forwardRef<HTMLButtonElement, TechButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const variants = {
      primary: "bg-primary text-primary-foreground hover:bg-primary/90",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      outline: "border border-primary text-primary hover:bg-primary/10",
    };

    const sizes = {
      sm: "h-8 px-4 text-xs",
      md: "h-10 px-6 text-sm",
      lg: "h-12 px-8 text-base",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center font-heading font-bold uppercase tracking-wider transition-all duration-200 clip-chamfer disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
TechButton.displayName = "TechButton";

interface TechCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
}

export const TechCard = React.forwardRef<HTMLDivElement, TechCardProps>(
  ({ className, hoverEffect = true, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-card text-card-foreground p-6 tech-border transition-all duration-300",
          hoverEffect && "hover:border-primary/50 hover:shadow-[0_0_20px_rgba(211,192,101,0.1)]",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
TechCard.displayName = "TechCard";

interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  subtitle?: string;
}

export const SectionTitle = React.forwardRef<HTMLHeadingElement, SectionTitleProps>(
  ({ className, subtitle, children, ...props }, ref) => {
    return (
      <div className="mb-12 text-center">
        {subtitle && (
          <p className="text-primary font-mono text-sm tracking-widest mb-2 uppercase">
            {subtitle}
          </p>
        )}
        <h2
          ref={ref}
          className={cn(
            "text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase tracking-tight",
            className
          )}
          {...props}
        >
          {children}
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mt-4 clip-chamfer" />
      </div>
    );
  }
);
SectionTitle.displayName = "SectionTitle";
