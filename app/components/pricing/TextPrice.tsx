import { CSSProperties } from "react";

export type TextPriceProps = {
  className?: string;
  price?: string;
  label?: string;
  currency?: string;
  hasLabel?: boolean;
  size?: "Large" | "Small";
  textColor?: string; // For dynamic color based on card variant
};

export const TextPrice = ({
  className = "",
  price = "50",
  label = "/ mo",
  currency = "$",
  hasLabel = true,
  size = "Large",
  textColor,
}: TextPriceProps) => {
  const baseStyle: CSSProperties = {
    color: textColor || "var(--sds-color-text-default-default)",
  };

  if (size === "Small") {
    return (
      <div className={`flex items-end justify-center ${className}`} style={baseStyle}>
        <div className="flex items-start leading-none">
          <p
            className="shrink-0"
            style={{
              fontFamily: "var(--sds-typography-body-font-family)",
              fontWeight: "var(--sds-typography-body-font-weight-strong)",
              fontSize: "var(--sds-typography-body-size-medium)",
              letterSpacing: "-0.32px",
            }}
          >
            {currency}
          </p>
          <p
            className="shrink-0"
            style={{
              fontFamily: "var(--sds-typography-heading-font-family)",
              fontWeight: "var(--sds-typography-heading-font-weight)",
              fontSize: "var(--sds-typography-heading-size-base)",
              letterSpacing: "-0.48px",
            }}
          >
            {price}
          </p>
        </div>
        {hasLabel && (
          <p
            className="shrink-0"
            style={{
              fontFamily: "var(--sds-typography-body-font-family)",
              fontWeight: "var(--sds-typography-body-font-weight-regular)",
              fontSize: "var(--sds-typography-body-size-small)",
              lineHeight: "1.2",
            }}
          >
            {label}
          </p>
        )}
      </div>
    );
  }

  // Large size
  return (
    <div className={`flex items-end justify-center ${className}`} style={baseStyle}>
      <div
        className="flex items-start leading-none"
        style={{
          fontFamily: "var(--sds-typography-title-page-font-family)",
          fontWeight: "var(--sds-typography-title-page-font-weight)",
        }}
      >
        <p
          className="shrink-0"
          style={{
            fontSize: "var(--sds-typography-subtitle-size-small)",
            letterSpacing: "-0.48px",
          }}
        >
          {currency}
        </p>
        <p
          className="shrink-0"
          style={{
            fontSize: "var(--sds-typography-title-page-size-base)",
            letterSpacing: "-0.96px",
          }}
        >
          {price}
        </p>
      </div>
      {hasLabel && (
        <p
          className="shrink-0"
          style={{
            fontFamily: "var(--sds-typography-body-font-family)",
            fontWeight: "var(--sds-typography-body-font-weight-regular)",
            fontSize: "var(--sds-typography-body-size-small)",
            lineHeight: "1.8",
          }}
        >
          {label}
        </p>
      )}
    </div>
  );
};

