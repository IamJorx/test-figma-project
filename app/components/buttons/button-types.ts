import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "neutral" | "subtle" | "danger";

export type ButtonSize = "small" | "medium";

export type ButtonState = "default" | "hover" | "disabled";

export type ButtonGroupAlign = "start" | "end" | "center" | "justify" | "stack";

export type BaseButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">;

export type ButtonProps = BaseButtonProps & {
  children: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

export type IconButtonProps = BaseButtonProps & {
  "aria-label": string;
  icon: ReactNode;
};

export type ButtonGroupProps = {
  children: ReactNode;
  align?: ButtonGroupAlign;
  className?: string;
};

