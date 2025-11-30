import { ButtonHTMLAttributes, ReactNode } from "react";

type AppButtonVariant = "primary" | "secondary";

type AppButtonProps = {
  children: ReactNode;
  variant?: AppButtonVariant;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const getVariantStyles = (variant: AppButtonVariant): string => {
  const baseStyles = "h-[45px] rounded-[12px] font-semibold text-base text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantStyles = {
    primary: "bg-[var(--test-primary-default)] hover:bg-[var(--test-primary-200)] focus:ring-[var(--test-primary-default)]",
    secondary: "bg-[var(--test-primary-200)] hover:bg-[var(--test-primary-default)] focus:ring-[var(--test-primary-200)]",
  };

  return `${baseStyles} ${variantStyles[variant]}`;
};

export const AppButton = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: AppButtonProps) => {
  const combinedClassName = `${getVariantStyles(variant)} ${className}`.trim();

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};

