import { ButtonGroupProps } from "./button-types";
import { getButtonGroupStyles } from "./button-styles";

export const ButtonGroup = ({
  children,
  align = "start",
  className = "",
}: ButtonGroupProps) => {
  const baseStyles = getButtonGroupStyles(align);
  const combinedClassName = `${baseStyles} ${className}`.trim();

  return <div className={combinedClassName}>{children}</div>;
};

