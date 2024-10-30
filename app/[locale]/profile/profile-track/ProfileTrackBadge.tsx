import { Badge } from "@/components/ui/badge";
import React from "react";

type Variant = "default" | "secondary" | "outline";

interface ProfileTrackBadgeProps {
  type: "count" | "duration" | "label";
  value: number | string;
  srText: string;
  icon?: React.ReactNode;
  variant?: Variant;
}

export const ProfileTrackBadge = ({ type, value, srText, icon, variant }: ProfileTrackBadgeProps) => {
  if (type === "count") {
    return <CountBadge value={value as number} srText={srText} icon={icon} />;
  }

  if (type === "duration") {
    return <DurationBadge value={value as number} srText={srText} />;
  }

  if (type === "label") {
    return <LabelBadge value={value as string} srText={srText} variant={variant} icon={icon} />;
  }
};

const CountBadge = ({ value, srText, icon }: { value: number; srText: string; icon: React.ReactNode }) => {
  const formatCount = (count: number) => {
    return new Intl.NumberFormat(undefined, { notation: "compact", compactDisplay: "short" }).format(count);
  };

  return (
    <Badge variant="secondary">
      {icon}
      <span className="sr-only">{srText}:</span>
      {formatCount(value)}
    </Badge>
  );
};

const DurationBadge = ({ value, srText }: { value: number; srText: string }) => {
  const formatDuration = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return `${minutes}:${parseInt(seconds) < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <Badge variant="outline">
      <span className="sr-only">{srText}:</span>
      {formatDuration(value)}
    </Badge>
  );
};

const LabelBadge = ({
  value,
  srText,
  variant,
  icon,
}: {
  value: string;
  srText: string;
  variant?: Variant;
  icon?: React.ReactNode;
}) => {
  if (!variant) variant = "default";

  return (
    <Badge variant={variant}>
      <span className="sr-only">{srText}:</span>
      {icon}
      {value}
    </Badge>
  );
};
