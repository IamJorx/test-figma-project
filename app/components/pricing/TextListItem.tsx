import { CSSProperties } from "react";

export type TextListItemProps = {
  className?: string;
  text?: string;
  textColor?: string; // For dynamic color based on card variant
};

export const TextListItem = ({
  className = "",
  text = "List item",
  textColor,
}: TextListItemProps) => {
  const style: CSSProperties = {
    color: textColor || "var(--sds-color-text-default-secondary)",
    fontFamily: "var(--sds-typography-body-font-family)",
    fontWeight: "var(--sds-typography-body-font-weight-regular)",
    fontSize: "var(--sds-typography-body-size-medium)",
    lineHeight: "1.4",
  };

  return (
    <li className={`list-disc ${className}`} style={{ marginLeft: "24px" }}>
      <span style={style}>{text}</span>
    </li>
  );
};

