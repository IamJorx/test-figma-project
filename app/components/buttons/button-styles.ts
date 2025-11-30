import { ButtonVariant, ButtonSize, ButtonGroupAlign } from "./button-types";
import { CSSProperties } from "react";

type VariantStyleConfig = {
  background: string;
  backgroundHover: string;
  backgroundDisabled: string;
  border: string;
  borderHover: string;
  borderDisabled: string;
  text: string;
  textHover: string;
  textDisabled: string;
  hasBorder: boolean;
  hasBorderOnHover?: boolean;
};

export type ButtonInlineStyles = {
  className: string;
  style: CSSProperties;
};

const variantConfigs: Record<ButtonVariant, VariantStyleConfig> = {
  primary: {
    background: "var(--sds-color-background-brand-default)",
    backgroundHover: "var(--sds-color-background-brand-hover)",
    backgroundDisabled: "var(--sds-color-background-disabled-default)",
    border: "var(--sds-color-border-brand-default)",
    borderHover: "var(--sds-color-border-brand-default)",
    borderDisabled: "var(--sds-color-border-disabled-default)",
    text: "var(--sds-color-text-brand-on-brand)",
    textHover: "var(--sds-color-text-brand-on-brand)",
    textDisabled: "var(--sds-color-text-disabled-on-disabled)",
    hasBorder: true,
    hasBorderOnHover: false,
  },
  neutral: {
    background: "var(--sds-color-background-neutral-tertiary)",
    backgroundHover: "var(--sds-color-background-neutral-tertiary-hover)",
    backgroundDisabled: "var(--sds-color-background-disabled-default)",
    border: "var(--sds-color-border-neutral-secondary)",
    borderHover: "var(--sds-color-border-neutral-secondary)",
    borderDisabled: "var(--sds-color-border-disabled-default)",
    text: "var(--sds-color-text-default-default)",
    textHover: "var(--sds-color-text-default-default)",
    textDisabled: "var(--sds-color-text-disabled-on-disabled)",
    hasBorder: true,
    hasBorderOnHover: false,
  },
  subtle: {
    background: "transparent",
    backgroundHover: "transparent",
    backgroundDisabled: "var(--sds-color-background-disabled-default)",
    border: "transparent",
    borderHover: "var(--sds-color-border-default-default)",
    borderDisabled: "var(--sds-color-border-disabled-default)",
    text: "var(--sds-color-text-neutral-default)",
    textHover: "var(--sds-color-text-default-default)",
    textDisabled: "var(--sds-color-text-disabled-on-disabled)",
    hasBorder: false,
    hasBorderOnHover: true,
  },
  danger: {
    background: "var(--sds-color-background-danger-default)",
    backgroundHover: "var(--sds-color-background-danger-hover)",
    backgroundDisabled: "var(--sds-color-background-disabled-default)",
    border: "var(--sds-color-border-danger-secondary)",
    borderHover: "var(--sds-color-border-danger-default)",
    borderDisabled: "var(--sds-color-border-disabled-default)",
    text: "var(--sds-color-text-danger-on-danger)",
    textHover: "var(--sds-color-text-danger-on-danger)",
    textDisabled: "var(--sds-color-text-disabled-on-disabled)",
    hasBorder: true,
    hasBorderOnHover: false,
  },
};

const sizeConfigs: Record<ButtonSize, { padding: string; height: string }> = {
  small: {
    padding: "var(--sds-size-space-200)",
    height: "32px",
  },
  medium: {
    padding: "var(--sds-size-space-300)",
    height: "40px",
  },
};

const getBaseStyles = (): string[] => [
  "inline-flex",
  "items-center",
  "justify-center",
  "gap-[var(--sds-size-space-200)]",
  "rounded-[var(--sds-size-radius-200)]",
  "font-[var(--sds-typography-body-font-family)]",
  "text-[var(--sds-typography-body-size-medium)]",
  "[font-weight:var(--sds-typography-body-font-weight-regular)]",
  "transition-colors",
  "focus:outline-none",
  "focus:ring-[var(--sds-size-stroke-focus-ring)]",
  "focus:ring-offset-2",
];

export const getButtonStyles = (
  variant: ButtonVariant = "primary",
  size: ButtonSize = "medium",
  disabled: boolean = false
): ButtonInlineStyles => {
  const config = variantConfigs[variant];
  const sizeConfig = sizeConfigs[size];
  
  const baseClassNames = [...getBaseStyles()];
  baseClassNames.push(disabled ? "cursor-not-allowed" : "cursor-pointer");
  
  const className = baseClassNames.join(" ");
  
  const style: CSSProperties = {
    height: sizeConfig.height,
    paddingLeft: sizeConfig.padding,
    paddingRight: sizeConfig.padding,
    backgroundColor: disabled 
      ? (config.backgroundDisabled === "transparent" ? "transparent" : config.backgroundDisabled)
      : (config.background === "transparent" ? "transparent" : config.background),
    color: disabled ? config.textDisabled : config.text,
  };

  // Border
  const shouldHaveBorder = config.hasBorder || (config.hasBorderOnHover && !disabled);
  
  if (shouldHaveBorder) {
    style.borderWidth = "var(--sds-size-stroke-border)";
    style.borderStyle = "solid";
    style.borderColor = disabled
      ? (config.borderDisabled === "transparent" ? "transparent" : config.borderDisabled)
      : (config.border === "transparent" ? "transparent" : config.border);
  }

  return { className, style };
};

export const getButtonHoverStyles = (
  variant: ButtonVariant = "primary",
  disabled: boolean = false
): CSSProperties => {
  const config = variantConfigs[variant];
  
  if (disabled) {
    return {};
  }

  const hoverStyle: CSSProperties = {};
  
  if (config.backgroundHover !== "transparent" && config.backgroundHover !== config.background) {
    hoverStyle.backgroundColor = config.backgroundHover;
  }
  
  if (config.textHover !== config.text) {
    hoverStyle.color = config.textHover;
  }
  
  const shouldHaveBorder = config.hasBorder || config.hasBorderOnHover;
  if (shouldHaveBorder && config.borderHover !== "transparent" && config.borderHover !== config.border) {
    hoverStyle.borderColor = config.borderHover;
  }

  return hoverStyle;
};

export const getIconButtonStyles = (
  variant: ButtonVariant = "primary",
  size: ButtonSize = "medium",
  disabled: boolean = false
): ButtonInlineStyles => {
  const { className, style } = getButtonStyles(variant, size, disabled);
  const sizeConfig = sizeConfigs[size];
  
  const iconButtonClassName = className;
  const iconButtonStyle: CSSProperties = {
    ...style,
    paddingLeft: 0,
    paddingRight: 0,
    width: sizeConfig.height,
  };

  return { className: iconButtonClassName, style: iconButtonStyle };
};

export const getButtonGroupStyles = (align: ButtonGroupAlign = "start"): string => {
  const baseStyles = [
    "inline-flex",
    "gap-[var(--sds-size-space-200)]",
  ];

  const alignStyles: Record<ButtonGroupAlign, string[]> = {
    start: ["justify-start"],
    end: ["justify-end"],
    center: ["justify-center"],
    justify: ["justify-between", "w-full"],
    stack: ["flex-col", "w-full"],
  };

  return [...baseStyles, ...alignStyles[align]].join(" ");
};

