import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'outline';
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'solid', children, className = '', ...props }) => {
  const baseStyles = "relative inline-flex items-center gap-3 px-8 py-4 font-mono font-bold uppercase tracking-wider text-sm transition-all duration-300 group overflow-hidden";
  
  const variants = {
    solid: "bg-neon-green text-black hover:bg-white hover:shadow-[0_0_30px_rgba(0,255,148,0.6)]",
    outline: "border border-neon-green text-neon-green hover:bg-neon-green hover:text-black"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </span>
    </button>
  );
};