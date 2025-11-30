"use client";

import { useState } from "react";
import { ButtonProps } from "./button-types";
import { getButtonStyles, getButtonHoverStyles } from "./button-styles";

export const Button = ({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  className = "",
  leftIcon,
  rightIcon,
  ...props
}: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { className: baseClassName, style: baseStyle } = getButtonStyles(variant, size, disabled);
  const hoverStyles = getButtonHoverStyles(variant, disabled);
  const combinedClassName = `${baseClassName} ${className}`.trim();

  const currentStyle: React.CSSProperties = {
    ...baseStyle,
    ...(isHovered && !disabled ? hoverStyles : {}),
  };

  return (
    <button
      className={combinedClassName}
      style={currentStyle}
      disabled={disabled}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {leftIcon && <span className="flex items-center">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="flex items-center">{rightIcon}</span>}
    </button>
  );
};

