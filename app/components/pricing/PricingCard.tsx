"use client";

import { CSSProperties } from "react";
import { Button } from "../buttons";
import { TextPrice } from "./TextPrice";
import { TextListItem } from "./TextListItem";

export type PricingCardProps = {
  title: string;
  price: string;
  currency?: string;
  label?: string;
  features: string[];
  buttonText?: string;
  device?: "Desktop" | "Mobile";
  variant?: "Stroke" | "Brand";
  onButtonClick?: () => void;
  className?: string;
};

export const PricingCard = ({
  title,
  price,
  currency = "$",
  label = "/ mo",
  features,
  buttonText = "Button",
  device = "Desktop",
  variant = "Stroke",
  onButtonClick,
  className = "",
}: PricingCardProps) => {
  // Determine colors based on variant
  const isBrand = variant === "Brand";
  const isMobile = device === "Mobile";

  const cardBackground = isBrand
    ? "var(--sds-color-background-brand-default)"
    : "var(--sds-color-background-default-default)";

  const cardBorder = isBrand
    ? "var(--sds-color-border-brand-default)"
    : "var(--sds-color-border-default-default)";

  const textColor = isBrand
    ? "var(--sds-color-text-brand-on-brand)"
    : "var(--sds-color-text-default-default)";

  const textColorSecondary = isBrand
    ? "var(--sds-color-text-brand-on-brand)"
    : "var(--sds-color-text-default-secondary)";

  const cardStyle: CSSProperties = {
    backgroundColor: cardBackground,
    borderColor: cardBorder,
    borderWidth: "var(--sds-size-stroke-border)",
    borderStyle: "solid",
    borderRadius: "var(--sds-size-radius-200)",
    minWidth: "240px",
    width: "300px",
  };

  const padding = isMobile
    ? "var(--sds-size-space-600)"
    : "var(--sds-size-space-800)";

  const topGap = "var(--sds-size-space-400)";
  const listGap = isMobile
    ? "var(--sds-size-space-200)"
    : "var(--sds-size-space-300)";
  const sectionGap = "var(--sds-size-space-600)";

  // Desktop variants
  if (device === "Desktop") {
    if (variant === "Brand") {
      return (
        <div className={className} style={cardStyle}>
          <div
            className="flex flex-col items-center"
            style={{
              padding,
              gap: sectionGap,
            }}
          >
            {/* Top Section */}
            <div
              className="flex flex-col items-center w-full"
              style={{ gap: topGap }}
            >
              {/* Title */}
              <div className="h-[29px] w-[149px]">
                <p
                  className="text-center"
                  style={{
                    fontFamily: "var(--sds-typography-heading-font-family)",
                    fontWeight: "var(--sds-typography-heading-font-weight)",
                    fontSize: "var(--sds-typography-heading-size-base)",
                    lineHeight: "1.2",
                    letterSpacing: "-0.48px",
                    color: textColor,
                  }}
                >
                  {title}
                </p>
              </div>

              {/* Price - Large */}
              <TextPrice
                price={price}
                currency={currency}
                label={label}
                size="Large"
                textColor={textColor}
              />

              {/* Features List */}
              <ul
                className="flex flex-col items-start w-full list-none"
                style={{ gap: listGap, padding: 0, margin: 0 }}
              >
                {features.map((feature, index) => (
                  <TextListItem
                    key={index}
                    text={feature}
                    textColor={textColor}
                    className="h-[22px]"
                  />
                ))}
              </ul>
            </div>

            {/* Button - Neutral variant for contrast */}
            <Button
              variant="neutral"
              size="medium"
              className="w-full"
              onClick={onButtonClick}
            >
              {buttonText}
            </Button>
          </div>
        </div>
      );
    }

    // Desktop/Stroke
    return (
      <div className={className} style={cardStyle}>
        <div
          className="flex flex-col items-center"
          style={{
            padding,
            gap: sectionGap,
          }}
        >
          {/* Top Section */}
          <div
            className="flex flex-col items-center w-full"
            style={{ gap: topGap }}
          >
            {/* Title */}
            <div className="h-[29px] w-[149px]">
              <p
                className="text-center"
                style={{
                  fontFamily: "var(--sds-typography-heading-font-family)",
                  fontWeight: "var(--sds-typography-heading-font-weight)",
                  fontSize: "var(--sds-typography-heading-size-base)",
                  lineHeight: "1.2",
                  letterSpacing: "-0.48px",
                  color: textColor,
                }}
              >
                {title}
              </p>
            </div>

            {/* Price - Large */}
            <TextPrice
              price={price}
              currency={currency}
              label={label}
              size="Large"
              textColor={textColor}
            />

            {/* Features List */}
            <ul
              className="flex flex-col items-start w-full list-none"
              style={{ gap: listGap, padding: 0, margin: 0 }}
            >
              {features.map((feature, index) => (
                <TextListItem
                  key={index}
                  text={feature}
                  textColor={textColorSecondary}
                  className="h-[22px]"
                />
              ))}
            </ul>
          </div>

          {/* Button - Primary variant */}
          <Button
            variant="primary"
            size="medium"
            className="w-full"
            onClick={onButtonClick}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    );
  }

  // Mobile variants
  if (variant === "Brand") {
    return (
      <div className={className} style={cardStyle}>
        <div
          className="flex flex-col items-start"
          style={{
            padding,
            gap: sectionGap,
          }}
        >
          {/* Top Section */}
          <div
            className="flex flex-col items-start w-full"
            style={{ gap: topGap }}
          >
            {/* Title and Price Row */}
            <div className="flex items-start justify-between w-full">
              {/* Title */}
              <div className="flex-1">
                <p
                  style={{
                    fontFamily: "var(--sds-typography-heading-font-family)",
                    fontWeight: "var(--sds-typography-heading-font-weight)",
                    fontSize: "var(--sds-typography-heading-size-base)",
                    lineHeight: "1.2",
                    letterSpacing: "-0.48px",
                    color: textColor,
                  }}
                >
                  {title}
                </p>
              </div>

              {/* Price - Small */}
              <TextPrice
                price={price}
                currency={currency}
                label={label}
                size="Small"
                textColor={textColor}
              />
            </div>

            {/* Features List */}
            <ul
              className="flex flex-col items-start w-full list-none"
              style={{ gap: listGap, padding: 0, margin: 0 }}
            >
              {features.map((feature, index) => (
                <TextListItem
                  key={index}
                  text={feature}
                  textColor={textColor}
                  className="h-[22px]"
                />
              ))}
            </ul>
          </div>

          {/* Button - Neutral variant for contrast */}
          <Button
            variant="neutral"
            size="medium"
            className="w-full"
            onClick={onButtonClick}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    );
  }

  // Mobile/Stroke
  return (
    <div className={className} style={cardStyle}>
      <div
        className="flex flex-col items-start"
        style={{
          padding,
          gap: sectionGap,
        }}
      >
        {/* Top Section */}
        <div
          className="flex flex-col items-start w-full"
          style={{ gap: topGap }}
        >
          {/* Title and Price Row */}
          <div className="flex items-start justify-between w-full">
            {/* Title */}
            <div className="flex-1">
              <p
                style={{
                  fontFamily: "var(--sds-typography-heading-font-family)",
                  fontWeight: "var(--sds-typography-heading-font-weight)",
                  fontSize: "var(--sds-typography-heading-size-base)",
                  lineHeight: "1.2",
                  letterSpacing: "-0.48px",
                  color: textColor,
                }}
              >
                {title}
              </p>
            </div>

            {/* Price - Small */}
            <TextPrice
              price={price}
              currency={currency}
              label={label}
              size="Small"
              textColor={textColor}
            />
          </div>

          {/* Features List */}
          <ul
            className="flex flex-col items-start w-full list-none"
            style={{ gap: listGap, padding: 0, margin: 0 }}
          >
            {features.map((feature, index) => (
              <TextListItem
                key={index}
                text={feature}
                textColor={textColorSecondary}
                className="h-[22px]"
              />
            ))}
          </ul>
        </div>

        {/* Button - Primary variant */}
        <Button
          variant="primary"
          size="medium"
          className="w-full"
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

