import { Badge } from "@/components/ui/badge";
import React from "react";

interface ProfileTrackBadgeProps {
  type: "count" | "duration";
  value: number;
  srText: string;
  icon?: React.ReactNode;
}

export const ProfileTrackBadge = ({ type, value, srText, icon }: ProfileTrackBadgeProps) => {
  if (type === "count") {
    return <CountBadge value={value} srText={srText} icon={icon} />;
  }

  if (type === "duration") {
    return <DurationBadge value={value} srText={srText} />;
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
