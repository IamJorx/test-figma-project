"use client";

import { useState } from "react";
import { IconButtonProps } from "./button-types";
import { getIconButtonStyles, getButtonHoverStyles } from "./button-styles";

export const IconButton = ({
  icon,
  variant = "primary",
  size = "medium",
  disabled = false,
  className = "",
  "aria-label": ariaLabel,
  ...props
}: IconButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { className: baseClassName, style: baseStyle } = getIconButtonStyles(variant, size, disabled);
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
      aria-label={ariaLabel}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <span className="flex items-center justify-center">{icon}</span>
    </button>
  );
};

